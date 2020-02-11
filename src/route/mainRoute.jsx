import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "unistore/react";
import { store } from "../store";
import Login from "../pages/login";
import BerandaOfficer from "../pages/berandaOfficer";
import DaftarKodeQrOfficer from "../pages/daftarKodeQrOfficer";
import BerandaSurveyor from "../pages/berandaSurveyor";
import PetaSurveyor from "../pages/petaSurveyor";
import DetilReklameSurveyor from "../pages/detilReklameSurveyor";
import BerandaPayer from "../pages/berandaPayer";
import PetaPayer from "../pages/petaPayer";
import inputGambarPayer from "../pages/inputGambarPayer";
import inputLokasiPayer from "../pages/inputLokasiPayer";
import inputDetilObjekPayer from "../pages/inputDetilObjekPayer";

const MainRoute = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* PAGES ROUTING */}
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/officer/home" component={BerandaOfficer} />
          <Route
            exact
            path="/officer/daftar-kode-QR/:id"
            component={DaftarKodeQrOfficer}
          />
          <Route exact path="/surveyor/home" component={BerandaSurveyor} />
          <Route exact path="/surveyor/peta" component={PetaSurveyor} />
          <Route
            exact
            path="/surveyor/detil-reklame/:id"
            component={DetilReklameSurveyor}
          />
          <Route exact path="/payer/home" component={BerandaPayer} />
          <Route exact path="/payer/peta" component={PetaPayer} />
          <Route
            exact
            path="/payer/input-gambar"
            component={inputGambarPayer}
          />
          <Route
            exact
            path="/payer/input-lokasi"
            component={inputLokasiPayer}
          />
          <Route
            exact
            path="/payer/input-detil-objek-pajak"
            component={inputDetilObjekPayer}
          />
          {/* <Route component={NotMatch} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoute;
