import createStore from "unistore";
// import axios from "axios";

const initialState = {
  npwpd: "",
  nip: "",
  pin: "",
  roleFormLogin: "officer",
  role: "",
  token: "",
  formOfficer: false,
  statusInputPassword: "password",
  statusShowPassword: false
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

  handleLogOut: state => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    store.setState({ npwpd: "", nip: "", pin: "" });
  }
});
