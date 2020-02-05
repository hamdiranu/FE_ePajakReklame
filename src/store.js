import createStore from "unistore";
import axios from "axios";

const initialState = {
  npwp: "",
  nip: "",
  pin: "",
  role: "",
  kataKunci: "",
  nomorSSPD: "",
  jumlahReklame: 0,
  formOfficer: false,
  statusInputPassword: "password",
  statusShowPassword: false,
  dataOfficer: {},
  dataBuktiPembayaranOfficer: []
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
    if (event.target.name === "npwp") {
      event.target.setCustomValidity(
        "NPWP harus terdiri dari 1 huruf dan sejumlah angka"
      );
    } else if (event.target.name === "nip") {
      event.target.setCustomValidity("NIP harus terdiri dari 18 digit angka");
    } else if (event.target.name === "pin") {
      event.target.setCustomValidity("PIN harus terdiri dari 8 digit angka");
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

  //Fungsi untuk mengambil data officers (nama dan daerahnya)
  getDataOfficer: async (state, event) => {
    const req = {
      method: "get",    
      url: "https://alterratax.my.id/officers",
      headers: {
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODA5MDYzMTcsIm5iZiI6MTU4MDkwNjMxNywianRpIjoiYmY4YmM1ZDEtOTQ3Zi00NzUzLThjOTktOTY1YzIzZmI0NGMzIiwiZXhwIjoxNTgwOTkyNzE3LCJpZGVudGl0eSI6IlAyMDAwMDAwMDExMjIwMDEiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJpZCI6MSwibmlwIjoiUDIwMDAwMDAwMTEyMjAwMSIsIm5hbWEiOiJPZmZpY2VyMSIsInJvbGUiOiJvZmZpY2VyIiwiZGFlcmFoX2lkIjoxfX0.YoiojQJRy-uRNsd7vx-A-YYUejd7Xg2md6zHxuEigag"
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
    const req = {
      method: "get",    
      url: "https://alterratax.my.id/bukti_pembayaran/officer",
      headers: {
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODA5MDYzMTcsIm5iZiI6MTU4MDkwNjMxNywianRpIjoiYmY4YmM1ZDEtOTQ3Zi00NzUzLThjOTktOTY1YzIzZmI0NGMzIiwiZXhwIjoxNTgwOTkyNzE3LCJpZGVudGl0eSI6IlAyMDAwMDAwMDExMjIwMDEiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJpZCI6MSwibmlwIjoiUDIwMDAwMDAwMTEyMjAwMSIsIm5hbWEiOiJPZmZpY2VyMSIsInJvbGUiOiJvZmZpY2VyIiwiZGFlcmFoX2lkIjoxfX0.YoiojQJRy-uRNsd7vx-A-YYUejd7Xg2md6zHxuEigag"
      }
    };

  const self = store;
  await axios(req)
      .then(function(response){
          self.setState({ dataBuktiPembayaranOfficer: response.data});
          console.log(response.data);
      })
      .catch(function(error){
          console.log(error)
      })
  },

  //Fungsi untuk mengambil data list bukti pembayaran difilter dari nomor sspd (fitur search)
  getCariBuktiPembayaran: async (state, event) => {
    const req = {
      method: "get",    
      url: "https://alterratax.my.id/bukti_pembayaran/officer?nomor_sspd="+state.kataKunci,
      headers: {
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODA5MDYzMTcsIm5iZiI6MTU4MDkwNjMxNywianRpIjoiYmY4YmM1ZDEtOTQ3Zi00NzUzLThjOTktOTY1YzIzZmI0NGMzIiwiZXhwIjoxNTgwOTkyNzE3LCJpZGVudGl0eSI6IlAyMDAwMDAwMDExMjIwMDEiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJpZCI6MSwibmlwIjoiUDIwMDAwMDAwMTEyMjAwMSIsIm5hbWEiOiJPZmZpY2VyMSIsInJvbGUiOiJvZmZpY2VyIiwiZGFlcmFoX2lkIjoxfX0.YoiojQJRy-uRNsd7vx-A-YYUejd7Xg2md6zHxuEigag"
      }
    };

  const self = store;
  await axios(req)
      .then(function(response){
          self.setState({ dataBuktiPembayaranOfficer: response.data});
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
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODA5MDYzMTcsIm5iZiI6MTU4MDkwNjMxNywianRpIjoiYmY4YmM1ZDEtOTQ3Zi00NzUzLThjOTktOTY1YzIzZmI0NGMzIiwiZXhwIjoxNTgwOTkyNzE3LCJpZGVudGl0eSI6IlAyMDAwMDAwMDExMjIwMDEiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJpZCI6MSwibmlwIjoiUDIwMDAwMDAwMTEyMjAwMSIsIm5hbWEiOiJPZmZpY2VyMSIsInJvbGUiOiJvZmZpY2VyIiwiZGFlcmFoX2lkIjoxfX0.YoiojQJRy-uRNsd7vx-A-YYUejd7Xg2md6zHxuEigag"
      },
      data:mydata
    };

  await axios(req)
      .then(function(response){
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
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODA5MDYzMTcsIm5iZiI6MTU4MDkwNjMxNywianRpIjoiYmY4YmM1ZDEtOTQ3Zi00NzUzLThjOTktOTY1YzIzZmI0NGMzIiwiZXhwIjoxNTgwOTkyNzE3LCJpZGVudGl0eSI6IlAyMDAwMDAwMDExMjIwMDEiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJpZCI6MSwibmlwIjoiUDIwMDAwMDAwMTEyMjAwMSIsIm5hbWEiOiJPZmZpY2VyMSIsInJvbGUiOiJvZmZpY2VyIiwiZGFlcmFoX2lkIjoxfX0.YoiojQJRy-uRNsd7vx-A-YYUejd7Xg2md6zHxuEigag"
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
});
