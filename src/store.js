import createStore from "unistore";
import axios from "axios";
import swal from "sweetalert";

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
  statusShowPassword: false,
  statusPageHomeSurveyor: false,
  listLokasiReklame: [],
  buktiPembayaranId: "",
  detilReklameSurveyor: "",
  statusGetDetilReklame: false,
  scannerDelay: 100,
  scannerResult: "No result",
  scannerKodeQr: "",
  statusSuksesScan: false,
  statusGagalScan: false,
  show: false,
  showing: false,
  textAreaPelanggaran: "",
  statusPelanggaran: false,
  validasiKodeQR: false,
  buktiPembayaranID: 1,
  daftarKodeQR: {},
  listKodeQR: [],
  listKodeQRUntukUnduh: [],
  idKodeQR: "",
  catatanPelanggaran: "",
  dataOfficer: {},
  dataBuktiPembayaranOfficer: [],
  pageBuktiPembayaran: 1,
  maksPageBuktiPembayaran: 1,
  pageKodeQR: 1,
  maksPageKodeQR: 1,
  formValid: false,
  pinValid: true,
  nipValid: true,
  npwpdValid: true,
  loginError: false,
  nomorSSPDValid: true,
  jumlahReklameValid: true,
  berhasilTambahData: false,
  laporanID: 0,
  detilLaporan: {},
  detilObjekPajak: {},
  buktiPembayaranPayer: {},
  listLaporanPajakPayer: [],
  daftarLaporanPayer: [],
  payerInfo: "",
  filterByDaftarLaporan: "semua",
  tipeReklame: "",
  namaObjekPajak: "",
  showInputLocation: "flex",
  latitudeInputDefault: -7.9744,
  longitudeInputDefault: 112.6328,
  zoomPetaDefault: 15,
  kataKunciLokasi: "",
  listRekomendasiLokasi: [],
  lokasiReklame: [],
  panjangObjekPajak: 0,
  lebarObjekPajak: 0,
  PeriodeAwal: "",
  PeriodeAkhir: "",
  listDropDown: {},
  listJenisReklame: [],
  loadingDetailObjek: true,
  jangkaWaktuPajak: "sesuatu",
  periodePemasangan: "",
  periodePembongkaran: "",
  blobGambar: null,
  objekGambar: null,
  statusSuksesbayar: true,
  dataStatusSuksesBayar: "",
  detailObjekPajakPost: {},
  detailLaporanPost: {},
  tokenSnap: "",
  detailLaporanPut: {},
  laporanIDPost: "",
};

export const store = createStore(initialState);

export const actions = store => ({
  // Fungsi untuk mengubah state sesuai dengan inputan pada kotak input
  handleInput: (state, event) => {
    store.setState({ [event.target.name]: event.target.value });
    console.log(`${event.target.name} :`, event.target.value);
    event.target.setCustomValidity("");
    if (event.target.name === "tipeReklame") {
      localStorage.setItem(`tipeReklamePayer`, `${event.target.value}`);
    }
  },

  // Fungsi untuk mengubah state sesuai dengan inputan pada kotak input
  handleInputPost: (state, event) => {
    localStorage.setItem(`${[event.target.name]}`, `${event.target.value}`);
  },

  // Fungsi untuk mengubah state sesuai dengan inputan pada kotak input
  handleInputPostNama: (state, event) => {
    store.setState({ [event.target.name]: event.target.value });
    localStorage.setItem(`${[event.target.name]}`, `${event.target.value}`);
  },

  handleInputPostLuas: (state, event) => {
    localStorage.setItem(`${[event.target.name]}`, `${event.target.value}`);
    store.setState({ [event.target.name]: event.target.value });
    localStorage.setItem(
      "luasObjekPajak",
      `${store.getState().panjangObjekPajak * store.getState().lebarObjekPajak}`
    );
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

  // Axios ntuk mendapatkan list marker(lokasi) peta surveyor
  getListLokasiReklame: state => {
    axios
      .get(
        "https://alterratax.my.id/bukti_pembayaran/surveyor",

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(response => {
        store.setState({ listLokasiReklame: response.data });
      })
      .catch(error => {
        console.log("gagal axios");
      });
  },

  // Axios ntuk mendapatkan list marker(lokasi) peta surveyor
  getDetilReklameSurveyor: state => {
    axios
      .get(
        "https://alterratax.my.id/bukti_pembayaran/surveyor/" +
          state.buktiPembayaranId,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(response => {
        store.setState({
          detilReklameSurveyor: response.data,
          textAreaPelanggaran: response.data.bukti_pembayaran.pelanggaran,
          statusGetDetilReklame: true
        });
        if (response.data.bukti_pembayaran.pelanggaran !== "") {
          store.setState({
            statusPelanggaran: true
          });
        }
      })
      .catch(error => {
        console.log("gagal axios");
      });
  },

  getIdByKodeQR: async state => {
    await axios
      .put(
        "https://alterratax.my.id/kode_qr/surveyor",
        {
          kode_unik: state.scannerResult
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(async response => {
        await store.setState({
          buktiPembayaranId: response.data.bukti_pembayaran_id
        });
        if (response.data.message === "Kode QR sudah terscan") {
          await store.setState({
            statusGagalScan: true
          });
        } else if (response.data.status_scan === true) {
          await store.setState({
            statusSuksesScan: true
          });
        } else if (response.data.message === "Kode QR tidak valid") {
          await store.setState({
            validasiKodeQR: true
          });
        }
      })
      .catch(error => {
        console.log("gagal axios");
      });
  },

  putLaporanPelanggaran: async state => {
    let stateAwal = store.getState().detilReklameSurveyor;
    await axios
      .put(
        "https://alterratax.my.id/bukti_pembayaran/surveyor",
        {
          bukti_pembayaran_id: state.buktiPembayaranId,
          pelanggaran: state.textAreaPelanggaran
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(async response => {
        stateAwal.bukti_pembayaran.pelanggaran = response.data.pelanggaran;
        store.setState({
          detilReklameSurveyor: stateAwal,
          statusPelanggaran: true
        });
        console.log("sukses axios");
      })
      .catch(error => {
        console.log("gagal axios");
      });
  },

  // fungsi get list kodeQR berdasarkan buktiPembayaranID
  getListKodeQR: async (state, event) => {
    const pageKodeQR = event;
    const req = {
      method: "get",
      url: `https://alterratax.my.id/kode_qr/officer?rp=2&p=${pageKodeQR}&bukti_pembayaran_id=${state.buktiPembayaranID}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        store.setState({
          daftarKodeQR: response.data,
          listKodeQR: response.data.list_kode_qr,
          pageKodeQR: response.data.page,
          maksPageKodeQR: response.data.maks_page
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  //Fungsi untuk mengambil list seluruh kode qr oleh officer
  getSemuaListKodeQROfficer: async state => {
    const req = {
      method: "get",
      url: `https://alterratax.my.id/kode_qr/officer?rp=500&bukti_pembayaran_id=${state.buktiPembayaranID}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        store.setState({ listKodeQRUntukUnduh: response.data.list_kode_qr });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  // fungsi cari kodeqr berdasarkan id
  cariKodeQR: async state => {
    let url = "";
    if (state.idKodeQR === "") {
      url = `https://alterratax.my.id/kode_qr/officer?rp=2&bukti_pembayaran_id=${state.buktiPembayaranID}&kode_QR_id=${state.idKodeQR}`;
    } else {
      url = `https://alterratax.my.id/kode_qr/officer?rp=500&bukti_pembayaran_id=${state.buktiPembayaranID}&kode_QR_id=${state.idKodeQR}`;
    }
    const req = {
      method: "get",
      url: url,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        store.setState({ listKodeQR: response.data.list_kode_qr });
      })
      .catch(function(error) {});
  },

  // Fungsi untuk set pageKodeQR = 1
  setPageKodeQR: async state => {
    store.setState({ pageKodeQR: 1 });
  },

  // Fungsi untuk set pageBuktiPembayaran = 1
  setPageBuktiPembayaran: async state => {
    store.setState({ pageBuktiPembayaran: 1 });
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
      .then(function(response) {
        self.setState({ dataOfficer: response.data[0] });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  //Fungsi untuk mengambil data list bukti pembayaran oleh officer
  getDataBuktiPembayaranOfficer: async (state, event) => {
    const pageBuktiPembayaran = event;
    const req = {
      method: "get",
      url: `https://alterratax.my.id/bukti_pembayaran/officer?rp=10&p=${pageBuktiPembayaran}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    const self = store;
    await axios(req)
      .then(function(response) {
        self.setState({
          dataBuktiPembayaranOfficer: response.data.list_bukti_pembayaran,
          pageBuktiPembayaran: response.data.page,
          maksPageBuktiPembayaran: response.data.maks_page
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  //Fungsi untuk mengambil data list bukti pembayaran difilter dari nomor sspd (fitur search)
  getCariBuktiPembayaran: async (state, event) => {
    let url = "";
    if (state.kataKunci === "") {
      url = `https://alterratax.my.id/bukti_pembayaran/officer?p=${state.pageBuktiPembayaran}`;
    } else {
      url = `https://alterratax.my.id/bukti_pembayaran/officer?nomor_sspd=${state.kataKunci}`;
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
      .then(function(response) {
        self.setState({
          dataBuktiPembayaranOfficer: response.data.list_bukti_pembayaran
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  // Fungsi untuk generate QR code dan menyimpannya di database oleh officer
  postGenerateQR: async (state, event) => {
    const id = event;
    const mydata = {
      bukti_pembayaran_id: id
    };
    const req = {
      method: "post",
      url: "https://alterratax.my.id/kode_qr/officer",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      data: mydata
    };

    await axios(req)
      .then(function(response) {
        store.setState({ pageKodeQR: 1 });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  // Fungsi untuk menambah data bukti pembayaran baru dan memasukannya ke database
  postBuktiPembayaran: async (state, event) => {
    if (!RegExp("[0-9]{5}").test(state.nomorSSPD)) {
    } else if (!RegExp("[0-9]{1}").test(state.jumlahReklame)) {
    } else {
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
        data: mydata
      };

      await axios(req)
        .then(function(response) {
          swal({
            title: "Sukses",
            text: "Data sukses ditambahkan",
            icon: "success"
          });
        })
        .catch(function(error) {
          swal({
            title: "Oops!",
            text:
              "Nomor SSPD sudah ditambahkan, silahkan cek ulang data input anda!",
            icon: "warning"
          });
          console.log(error);
        });
      store.setState({ berhasilTambahData: true });
    }
  },

  //Fungsi untuk menghapus data di localstorage ketika user logout
  handleLogOut: state => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    store.setState({ npwpd: "", nip: "", pin: "" });
  },

  //Fungsi untuk menghapus data di localstorage ketika user logout
  handleHapusLocal: state => {
    localStorage.removeItem("tipeReklamePayer");
    localStorage.removeItem("jenisObjekPajak");
    localStorage.removeItem("luasObjekPajak");
    localStorage.removeItem("tarifTambahan");
    localStorage.removeItem("sudutPandang");
    localStorage.removeItem("letakPemasangan");
    localStorage.removeItem("klasifikasiJalan");
    localStorage.removeItem("judulObjekPajak");
    localStorage.removeItem("panjangObjekPajak");
    localStorage.removeItem("lebarObjekPajak");
    localStorage.removeItem("mukaObjekPajak");
    localStorage.removeItem("ketinggianObjekPajak");
    localStorage.removeItem("jumlahReklameObjekPajak");
    localStorage.removeItem("masaPajakTahun");
    localStorage.removeItem("masaPajakBulan");
    localStorage.removeItem("jangkaWaktuObjekPajak");
    localStorage.removeItem("tanggalPembongkaran");
    localStorage.removeItem("tanggalPemasangan");
    localStorage.removeItem("fotoReklamePayer");
    localStorage.removeItem("namaObjekPajak");
    localStorage.removeItem("latitudeReklamePayer");
    localStorage.removeItem("longitudeReklamePayer");
    localStorage.removeItem("alamatReklamePayer");
  },

  // Fungsi untuk mengubah state sesuai dengan inputan pada kotak input ketika login
  handleInputLogin: (state, event) => {
    event.preventDefault();
    store.setState({ [event.target.name]: event.target.value });
    console.log(`${event.target.name} :`, event.target.value);
    switch (event.target.name) {
      case "nip":
        store.setState({
          nipValid: RegExp("[0-9A-Z]{16}").test(event.target.value)
            ? true
            : false
        });
        break;
      case "pin":
        store.setState({
          pinValid: RegExp("[0-9]{8}").test(event.target.value) ? true : false
        });
        break;
      case "npwpd":
        store.setState({
          npwpdValid: RegExp("[0-9A-Z]{16}").test(event.target.value)
            ? true
            : false
        });
        break;
      default:
        break;
    }
    console.warn(
      "cek valid",
      store.getState().nipValid,
      store.getState().pinValid
    );
    store.setState({
      formValid:
        (store.getState().nipValid || store.getState().npwpdValid) &&
        store.getState().pinValid
    });
  },

  handleGantiStatusPajak: (state, event) => {
    store.setState({ [event.target.name]: event.target.value });
    if (event.target.value === "batal") {
      store.setState({ filterByDaftarLaporan: "batal" });
    } else if (event.target.value === "belum") {
      store.setState({ filterByDaftarLaporan: "belum" });
    } else if (event.target.value === "sudah") {
      store.setState({ filterByDaftarLaporan: "sudah" });
    }
  },

  // fungsi get detil laporan payer berdasarkan laporanID
  getDetilLaporanPayer: async state => {
    const req = {
      method: "get",
      url: `https://alterratax.my.id/laporan/payer/${state.laporanID}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        store.setState({
          detilLaporan: response.data[0].laporan,
          detilObjekPajak: response.data[0].objek_pajak
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  //Fungsi untuk mengambil data bukti pembayaran oleh payer berdasarkan laporan_id
  getBuktiPembayaranPayer: async (state, event) => {
    const laporan_id = event;
    const req = {
      method: "get",
      url: `https://alterratax.my.id/bukti_pembayaran/payer/${laporan_id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    const self = store;
    await axios(req)
      .then(function(response) {
        self.setState({
          buktiPembayaranPayer: response.data.bukti_pembayaran,
          buktiPembayaranID: response.data.bukti_pembayaran.id
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  //Fungsi untuk mengambil list seluruh kode qr oleh payer
  getSemuaListKodeQRPayer: async state => {
    const req = {
      method: "get",
      url: `https://alterratax.my.id/kode_qr/payer?rp=500&bukti_pembayaran_id=${state.buktiPembayaranID}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        store.setState({ listKodeQRUntukUnduh: response.data.list_kode_qr });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  //Fungsi untuk mengambil list seluruh laporan payer
  getDaftarLaporan: async state => {
    const req = {
      method: "get",
      url: `https://alterratax.my.id/laporan/payer`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(req)
      .then(function(response) {
        store.setState({
          daftarLaporanPayer: response.data.list_laporan,
          payerInfo: response.data.payer
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  // Fungsi untuk mengambil data rekomendasi lokasi hasil pencarian dengan mengugunakan third party Mapbox Search API
  searchLokasi: async (state, event) => {
    const req = {
      method: "get",
      // url: "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input="+state.kataKunciLokasi+"&inputtype="+inputtype+"&fields="+fields+"&key="+key,
      // url: "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&fields=formatted_address,name,geometry&key=AIzaSyA_Td2kGqTcpU5wZ7t2iOcYdLrWNhrcCvI&input=jalan tidar",
      url:
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        state.kataKunciLokasi +
        ".json?country=ID&access_token=pk.eyJ1IjoiaGFtZGlyYW51IiwiYSI6ImNrNjkxdjF4aTBiOGczbGxqOWdocnhrN3kifQ.4x6Q9f7hcT-xSqZv4plNxA",
      headers: {}
    };

    await axios(req)
      .then(function(response) {
        store.setState({ listRekomendasiLokasi: response.data.features });
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  // Fungsi untuk mengambil data alamat lokasi dari hasil geocoding longitude,latitude dengan mengugunakan third party Mapbox Geocoding API
  getAlamatLokasi: async (state, event) => {
    const req = {
      method: "get",
      url:
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        state.longitudeInputDefault +
        "," +
        state.latitudeInputDefault +
        ".json?country=ID&access_token=pk.eyJ1IjoiaGFtZGlyYW51IiwiYSI6ImNrNjkxdjF4aTBiOGczbGxqOWdocnhrN3kifQ.4x6Q9f7hcT-xSqZv4plNxA",
      headers: {}
    };

    await axios(req)
      .then(function(response) {
        store.setState({ lokasiReklame: response.data.features });
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  // Axios ntuk mendapatkan list dropdown menu pada input payer
  getListDropDownInput: async state => {
    await axios
      .get(
        "https://alterratax.my.id/variabel_hitung/payer",

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(async response => {
        await store.setState({
          listDropDown: response.data,
          loadingDetailObjek: false
        });
      })
      .catch(error => {
        console.log("gagal axios");
      });
  },

  // fungsi untuk put objekpajak oleh payer
  putInputPayer: state => {
    axios
      .put(
        "https://alterratax.my.id/objek_pajak/payer",
        {
          foto: localStorage.getItem("fotoReklamePayer"),
          tipe_reklame: localStorage.getItem("tipeReklamePayer"),
          nama_reklame: localStorage.getItem("namaObjekPajak"),
          latitude: localStorage.getItem("latitudeReklamePayer"),
          longitude: localStorage.getItem("longitudeReklamePayer"),
          lokasi: localStorage.getItem("alamatReklamePayer"),
          judul_reklame: localStorage.getItem("judulObjekPajak"),
          jenis_reklame: localStorage.getItem("jenisObjekPajak"),
          tarif_tambahan: localStorage.getItem("tarifTambahan"),
          sudut_pandang: localStorage.getItem("sudutPandang"),
          panjang: localStorage.getItem("panjangObjekPajak"),
          luas: localStorage.getItem("luasObjekPajak"),
          lebar: localStorage.getItem("lebarObjekPajak"),
          muka: localStorage.getItem("mukaObjekPajak"),
          tinggi: localStorage.getItem("ketinggianObjekPajak"),
          jumlah: localStorage.getItem("jumlahReklameObjekPajak"),
          letak_pemasangan: localStorage.getItem("letakPemasangan"),
          klasifikasi_jalan: localStorage.getItem("klasifikasiJalan"),
          masa_pajak: `${localStorage.getItem(
            "masaPajakBulan"
          )} ${localStorage.getItem("masaPajakTahun")}`,
          jangka_waktu_pajak: localStorage.getItem("jangkaWaktuObjekPajak"),
          tanggal_pemasangan: localStorage.getItem("tanggalPemasangan"),
          tanggal_pembongkaran: localStorage.getItem("tanggalPembongkaran")
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        store.setState({ detailLaporanPut: response.data.laporan});
        swal({
          title: "Sukses",
          text: "Data Sudah Lengkap",
          icon: "success"
        });
      })
      .catch(error => {
        swal({
          title: "Oops!",
          text:
            "Data Tidak Lengkap",
          icon: "warning"
        });
        console.log(error);
      });
  },

  // fungsi untuk post objekpajak oleh payer
  postInputPayer: async state => {
    await axios
      .post(
        "https://alterratax.my.id/objek_pajak/payer",
        {
          foto: localStorage.getItem("fotoReklamePayer"),
          tipe_reklame: localStorage.getItem("tipeReklamePayer"),
          nama_reklame: localStorage.getItem("namaObjekPajak"),
          latitude: localStorage.getItem("latitudeReklamePayer"),
          longitude: localStorage.getItem("longitudeReklamePayer"),
          lokasi: localStorage.getItem("alamatReklamePayer"),
          judul_reklame: localStorage.getItem("judulObjekPajak"),
          jenis_reklame: localStorage.getItem("jenisObjekPajak"),
          tarif_tambahan: localStorage.getItem("tarifTambahan"),
          sudut_pandang: localStorage.getItem("sudutPandang"),
          panjang: localStorage.getItem("panjangObjekPajak"),
          luas: localStorage.getItem("luasObjekPajak"),
          lebar: localStorage.getItem("lebarObjekPajak"),
          muka: localStorage.getItem("mukaObjekPajak"),
          tinggi: localStorage.getItem("ketinggianObjekPajak"),
          jumlah: localStorage.getItem("jumlahReklameObjekPajak"),
          letak_pemasangan: localStorage.getItem("letakPemasangan"),
          klasifikasi_jalan: localStorage.getItem("klasifikasiJalan"),
          masa_pajak: `${localStorage.getItem("masaPajakBulan")} ${localStorage.getItem("masaPajakTahun")}`,
          jangka_waktu_pajak: localStorage.getItem("jangkaWaktuObjekPajak"),
          tanggal_pemasangan: localStorage.getItem("tanggalPemasangan"),
          tanggal_pembongkaran: localStorage.getItem("tanggalPembongkaran")
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          }
        }
      )
      .then( async response => {
        await store.setState({ detailObjekPajakPost: response.data.objek_pajak,
          detailLaporanPost: response.data.laporan, laporanIDPost: response.data.laporan.id});
        swal({
          title: "Sukses",
          text: "Data sukses ditambahkan",
          icon: "success"
        });
      })
      .catch(error => {
        swal({
          title: "Oops!",
          text: "Gagal menambahkan data, silahkan cek ulang data input anda!",
          icon: "warning"
        });
        console.log("gagal axios");
        console.log(error);
      });
  },

  //Fungsi untuk convert fileGambar ke url base64
  setFotoKeURL: async state => {
    const toBase64 = file =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });

    async function Main() {
      const file = state.objekGambar;
      console.log(await toBase64(file));
    }
    Main();
  },

  // Axios ntuk mendapatkan token snap midtrans
  getTokenSnap: async state => {
    await axios
      .get(
        "https://alterratax.my.id/laporan/payer/bayar?laporan_id="+state.detilLaporan.id+"&total_pajak="+state.detilLaporan.total_pajak,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(async response => {
        await store.setState({
          tokenSnap: response.data.token,
        });
      })
      .catch(error => {
        console.log("gagal axios");
      });
  },
  
  // Fungsi untuk generate QR code dan menyimpannya di database oleh payer
  postGenerateQRPayer: async (state, event) => {
    const mydata = {
      bukti_pembayaran_id: event
    };
    const req = {
      method: "post",
      url: "https://alterratax.my.id/kode_qr/payer",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      data: mydata
    };
    await axios(req)
      .then(function(response) {
        store.setState({ pageKodeQR: 1 });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
});