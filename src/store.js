import createStore from "unistore";
// import axios from "axios";

const initialState = {
  npwp: "",
  nip: "",
  pin: "",
  role: "",
  formOfficer: false,
  statusInputPassword: "password",
  statusShowPassword: false,
  markers: [
    { key: "marker1", position: [51.5, -0.1], content: "My first popup" },
    { key: "marker2", position: [51.51, -0.1], content: "My second popup" },
    { key: "marker3", position: [51.49, -0.05], content: "My third popup" }
  ]
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
  }
});
