import createStore from "unistore";
// import axios from "axios";

const initialState = {
  npwp: "",
  pin: "",
  role: "",
  officer: false
};

export const store = createStore(initialState);

export const actions = store => ({
  // Fungsi untuk mengubah state sesuai dengan inputan pada kotak input
  handleInputLogin: (state, event) => {
    store.setState({ [event.target.name]: event.target.value });
    console.log(`${event.target.name} :`, event.target.value);
  },

  handleGantiRole: (state, event) => {
    store.setState({ [event.target.name]: event.target.value });
    if (event.target.value === "Payer") {
      console.log("masuk ganti officer ke false");
      store.setState({ officer: false });
    } else {
      console.log("masuk ganti officer ke true");
      store.setState({ officer: true });
    }
    console.log("officer", store.getState().officer);
    console.log(`${event.target.name} :`, event.target.value);
  }
});
