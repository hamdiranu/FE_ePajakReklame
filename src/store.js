import createStore from "unistore";
import axios from "axios";

const initialState = {
  npwpd: "",
  nip: "",
  pin: "",
  roleFormLogin: "officer",
  role: "",
  kataKunci: "",
  nomorSSPD: "",
  jumlahReklame: 0,
  token: "",
  formOfficer: false,
  statusInputPassword: "password",
  buktiPembayaranID: 1,
  daftarKodeQR:{},
  listKodeQR:[],
  listKodeQRUntukUnduh: [],
  idKodeQR : "",
  catatanPelanggaran: "",
  statusShowPassword: false,
  dataOfficer: {},
  dataBuktiPembayaranOfficer: [],
  pageBuktiPembayaran : 1,
  maksPageBuktiPembayaran : 1,
  pageKodeQR : 1,
  maksPageKodeQR : 1,
};

export const store = createStore(initialState);

export const actions = store => ({
  // Fungsi untuk mengubah state sesuai dengan inputan pada kotak input
  handleInput: (state, event) => {
    store.setState({ [event.target.name]: event.target.value });
    console.log(`${event.target.name} :`, event.target.value);
    event.target.setCustomValidity("");
  },

  // Fungsi untuk menampilkan alert jika input login tidak sesuai dengan ketetapan
  validasiFormLogin: (state, event) => {
    if (event.target.name === "npwpd") {
      event.target.setCustomValidity(
        "NPWPD harus terdiri dari 1 huruf dan sejumlah angka"
      );
      store.setState({ validasiInputNpwp: false });
    } else if (event.target.name === "nip") {
      event.target.setCustomValidity("NIP harus terdiri dari 18 digit angka");
      store.setState({ validasiInputNip: false });
    } else if (event.target.name === "pin") {
      event.target.setCustomValidity("PIN harus terdiri dari 8 digit angka");
      store.setState({ validasiInputPin: false });
    }
  },

  // Fungsi untuk mengganti status form login menjadi form login payer/officer
  handleGantiRole: (state, event) => {
    store.setState({ [event.target.name]: event.target.value });
    if (event.target.value === "Payer") {
      store.setState({ formOfficer: false });
    } else {
      store.setState({ formOfficer: true });
    }
  },

  // Fungsi untuk menampilkan input password yang disembunyikan
  showPassword: (state, event) => {
    if (state.statusInputPassword === "password") {
      store.setState({ statusInputPassword: "text", statusShowPassword: true });
    } else {
      store.setState({
        statusInputPassword: "password",
        statusShowPassword: false
      });
    }
  },

  // fungsi get list kodeQR berdasarkan buktiPembayaranID
  getListKodeQR : async (state, event) => {
    const pageKodeQR = event
    const req = {
      method : "get",
      url : `https://alterratax.my.id/kode_qr/officer?rp=2&p=${pageKodeQR}&bukti_pembayaran_id=${state.buktiPembayaranID}`,
      headers : {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    await axios(req)
      .then(function(response){
        store.setState({daftarKodeQR: response.data,
          listKodeQR: response.data.list_kode_qr,
          pageKodeQR : response.data.page,
          maksPageKodeQR : response.data.maks_page});
      })
      .catch(function(error){
        console.log(error);
      });
  },

  //Fungsi untuk mengambil list seluruh kode qr oleh officer
  getSemuaListKodeQROfficer: async (state) => {
    const req = {
      method: "get",    
      url: `https://alterratax.my.id/kode_qr/officer?rp=500&bukti_pembayaran_id=${state.buktiPembayaranID}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    await axios(req)
      .then(function(response){
        store.setState({listKodeQRUntukUnduh: response.data.list_kode_qr});
        console.log(response.data);
      })
      .catch(function(error){
        console.log(error);
      })
  },

  // fungsi cari kodeqr berdasarkan id
  cariKodeQR : async (state) => {
    let url = "";
    if(state.idKodeQR===""){
      url = `https://alterratax.my.id/kode_qr/officer?rp=2&bukti_pembayaran_id=${state.buktiPembayaranID}&kode_QR_id=${state.idKodeQR}`
    }
    else{
      url = `https://alterratax.my.id/kode_qr/officer?rp=500&bukti_pembayaran_id=${state.buktiPembayaranID}&kode_QR_id=${state.idKodeQR}`
    }
    const req = {
      method : "get",
      url : url,
      headers : {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    await axios(req)
      .then(function(response){
        store.setState({listKodeQR: response.data.list_kode_qr});
      })
      .catch(function(error){
      });
  },
   
  // Fungsi untuk set pageKodeQR = 1
  setPageKodeQR: async (state) => {
    store.setState({pageKodeQR : 1});
  },

  // Fungsi untuk set pageBuktiPembayaran = 1
  setPageBuktiPembayaran: async (state) => {
    store.setState({pageBuktiPembayaran : 1});
  },

  //Fungsi untuk mengambil data officers (nama dan daerahnya)
  getDataOfficer: async (state, event) => {
    const req = {
      method: "get",    
      url: "https://alterratax.my.id/officers",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };

  const self = store;
  await axios(req)
      .then(function(response){
          self.setState({ dataOfficer: response.data[0]});
          console.log(response.data);
      })
      .catch(function(error){
          console.log(error)
      })
  },

  //Fungsi untuk mengambil data list bukti pembayaran oleh officer
  getDataBuktiPembayaranOfficer: async (state, event) => {
    const pageBuktiPembayaran = event;
    const req = {
      method: "get",    
      url: `https://alterratax.my.id/bukti_pembayaran/officer?rp=2&p=${pageBuktiPembayaran}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    const self = store;
    await axios(req)
      .then(function(response){
        self.setState({ dataBuktiPembayaranOfficer: response.data.list_bukti_pembayaran,
          pageBuktiPembayaran:response.data.page, maksPageBuktiPembayaran:response.data.maks_page});
        console.log(response.data);
      })
      .catch(function(error){
        console.log(error)
      })
  },

  //Fungsi untuk mengambil data list bukti pembayaran difilter dari nomor sspd (fitur search)
  getCariBuktiPembayaran: async (state, event) => {
    let url = "";
    if(state.kataKunci===""){
      url = `https://alterratax.my.id/bukti_pembayaran/officer?rp=2&p=${state.pageBuktiPembayaran}`
    }
    else{
      url = `https://alterratax.my.id/bukti_pembayaran/officer?rp=500&nomor_sspd=${state.kataKunci}`
    }
    const req = {
      method: "get",    
      url: url,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };

  const self = store;
  await axios(req)
      .then(function(response){
          self.setState({ dataBuktiPembayaranOfficer: response.data.list_bukti_pembayaran});
          console.log(response.data);
      })
      .catch(function(error){
          console.log(error)
      })
  },
  
  // Fungsi untuk generate QR code dan menyimpannya di database 
  postGenerateQR: async (state, event) => {
    const id = event
    const mydata = {
      bukti_pembayaran_id: id
    };
    const req = {
      method: "post",    
      url: "https://alterratax.my.id/kode_qr/officer",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      data:mydata
    };

    await axios(req)
      .then(function(response){
        store.setState({pageKodeQR:1})
        console.log(response.data);
      })
      .catch(function(error){
        console.log(error)
      })
  },

  // Fungsi untuk menambah data bukti pembayaran baru dan memasukannya ke database 
  postBuktiPembayaran: async (state, event) => {
    const mydata = {
      nomor_sspd: state.nomorSSPD,
      jumlah_reklame: state.jumlahReklame
    };
    const req = {
      method: "post",    
      url: "https://alterratax.my.id/bukti_pembayaran/officer",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      data:mydata
    };

  await axios(req)
      .then(function(response){
          console.log(response.data);
          alert("Data sukses ditambahkan")
      })
      .catch(function(error){
          alert("Data input tidak memenuhi syarat, silahkan cek ulang data input anda!")
          console.log(error)
      })
  },
    
  handleLogOut: state => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    store.setState({ npwpd: "", nip: "", pin: "" });
  }
});
