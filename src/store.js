import createStore from "unistore";
import axios from "axios";

const initialState = {
  npwp: "",
  nip: "",
  pin: "",
  role: "",
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
  statusPelanggaran: false
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

  // Axios ntuk mendapatkan list marker(lokasi) peta surveyor
  getListLokasiReklame: state => {
    axios
      .get(
        "https://alterratax.my.id/bukti_pembayaran/surveyor",

        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODExNTM3NjIsIm5iZiI6MTU4MTE1Mzc2MiwianRpIjoiNmEwZTY2NGYtN2E0Yy00Mjc1LTllOWEtNDZjNDgwMDRlZGFmIiwiZXhwIjoxNTgxMjQwMTYyLCJpZGVudGl0eSI6IlAyMDAwMDAwMDExMjIwMDMiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJpZCI6MywibmlwIjoiUDIwMDAwMDAwMTEyMjAwMyIsIm5hbWEiOiJDaG9raSIsInJvbGUiOiJzdXJ2ZXlvciIsImRhZXJhaF9pZCI6MX19.nPRRUXKwKc1a9VIFAEwzvAjbhqhmW7kggWs8s-PMPlA`
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
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODExNTM3NjIsIm5iZiI6MTU4MTE1Mzc2MiwianRpIjoiNmEwZTY2NGYtN2E0Yy00Mjc1LTllOWEtNDZjNDgwMDRlZGFmIiwiZXhwIjoxNTgxMjQwMTYyLCJpZGVudGl0eSI6IlAyMDAwMDAwMDExMjIwMDMiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJpZCI6MywibmlwIjoiUDIwMDAwMDAwMTEyMjAwMyIsIm5hbWEiOiJDaG9raSIsInJvbGUiOiJzdXJ2ZXlvciIsImRhZXJhaF9pZCI6MX19.nPRRUXKwKc1a9VIFAEwzvAjbhqhmW7kggWs8s-PMPlA`
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
        console.log("cek response", response.data);
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
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODExNTM3NjIsIm5iZiI6MTU4MTE1Mzc2MiwianRpIjoiNmEwZTY2NGYtN2E0Yy00Mjc1LTllOWEtNDZjNDgwMDRlZGFmIiwiZXhwIjoxNTgxMjQwMTYyLCJpZGVudGl0eSI6IlAyMDAwMDAwMDExMjIwMDMiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJpZCI6MywibmlwIjoiUDIwMDAwMDAwMTEyMjAwMyIsIm5hbWEiOiJDaG9raSIsInJvbGUiOiJzdXJ2ZXlvciIsImRhZXJhaF9pZCI6MX19.nPRRUXKwKc1a9VIFAEwzvAjbhqhmW7kggWs8s-PMPlA`
          }
        }
      )
      .then(async response => {
        // console.log("cek state", state.scannerResult);
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
        }
        console.log("cek response gagal", response.data.message);
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
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODExNTM3NjIsIm5iZiI6MTU4MTE1Mzc2MiwianRpIjoiNmEwZTY2NGYtN2E0Yy00Mjc1LTllOWEtNDZjNDgwMDRlZGFmIiwiZXhwIjoxNTgxMjQwMTYyLCJpZGVudGl0eSI6IlAyMDAwMDAwMDExMjIwMDMiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJpZCI6MywibmlwIjoiUDIwMDAwMDAwMTEyMjAwMyIsIm5hbWEiOiJDaG9raSIsInJvbGUiOiJzdXJ2ZXlvciIsImRhZXJhaF9pZCI6MX19.nPRRUXKwKc1a9VIFAEwzvAjbhqhmW7kggWs8s-PMPlA`
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
  }
});
