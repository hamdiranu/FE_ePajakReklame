import createStore from "unistore";
import axios from 'axios';

const initialState = {
  npwp: "",
  nip: "",
  pin: "",
  role: "",
  formOfficer: false,
  statusInputPassword: "password",
  statusShowPassword: false,
  buktiPembayaranID: 1,
  daftarKodeQR:{},
  listKodeQR:[],
  listKodeQRUntukUnduh: [],
  idKodeQR : 0,
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

  // fungsi get list kodeQR berdasarkan buktiPembayaranID
  getListKodeQR : async (state) => {
    const req = {
      method : "get",
      url : `https://alterratax.my.id/kode_qr/officer?bukti_pembayaran_id=${state.buktiPembayaranID}`,
      headers : {
          Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODA5NTUwMzAsIm5iZiI6MTU4MDk1NTAzMCwianRpIjoiMzA1NDFlYTQtOTk0Zi00ZmNkLTk0ZWYtM2U1ZmMyNmU0OTdjIiwiZXhwIjoxNTgxMDQxNDMwLCJpZGVudGl0eSI6IlAyMDAwMDAwMDExMjIwMDEiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJpZCI6MSwibmlwIjoiUDIwMDAwMDAwMTEyMjAwMSIsIm5hbWEiOiJPZmZpY2VyMSIsInJvbGUiOiJvZmZpY2VyIiwiZGFlcmFoX2lkIjoxfX0.T2bXW0e6uxLKJ_ArHxQp4Fiwsr4deHiYJtSkSjEDvJc",
      },
    };
    await axios(req)
      .then(function(response){
        store.setState({daftarKodeQR: response.data,
          listKodeQR: response.data.list_kode_qr,
          listKodeQRUntukUnduh: response.data.list_kode_qr});
      })
      .catch(function(error){
      });
  },

  // fungsi cari kodeqr berdasarkan id
  cariKodeQR : async (state) => {
    const req = {
      method : "get",
      url : `https://alterratax.my.id/kode_qr/officer?bukti_pembayaran_id=${state.buktiPembayaranID}&kode_QR_id=${state.idKodeQR}`,
      headers : {
          Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODA5Njg3ODcsIm5iZiI6MTU4MDk2ODc4NywianRpIjoiMTJlMzNhNzUtMjhmYy00ZDU4LTkyZmItMzc2NGFlNWU1MTQ4IiwiZXhwIjoxNTgxMDU1MTg3LCJpZGVudGl0eSI6IlAyMDAwMDAwMDExMjIwMDEiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJpZCI6MSwibmlwIjoiUDIwMDAwMDAwMTEyMjAwMSIsIm5hbWEiOiJPZmZpY2VyMSIsInJvbGUiOiJvZmZpY2VyIiwiZGFlcmFoX2lkIjoxfX0.G4kbBcewTwmdqW-g7KSco9X4NxI41Uf9bJ48gR6MebQ",
      },
    };
    await axios(req)
      .then(function(response){
        store.setState({listKodeQR: response.data.list_kode_qr});
      })
      .catch(function(error){
      });
  },
});
