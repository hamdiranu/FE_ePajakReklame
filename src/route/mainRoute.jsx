import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "unistore/react";
import { store } from "../store";
import Login from "../pages/login";
import BerandaOfficer from "../pages/berandaOfficer";
import DaftarKodeQrOfficer from "../pages/daftarKodeQrOfficer";
import BerandaSurveyor from "../pages/berandaSurveyor";
import PetaSurveyor from "../pages/petaSurveyor";
import DetailReklameSurveyor from "../pages/detailReklameSurveyor";
import BerandaPayer from "../pages/berandaPayer";
import DetilLaporanPayer from "../pages/detilLaporanPayer";
import inputGambarPayer from "../pages/inputGambarPayer";
import inputLokasiPayer from "../pages/inputLokasiPayer";
import inputLokasiPetaPayer from "../pages/inputLokasiPetaPayer";
import inputDetailObjekPayer from "../pages/inputDetailObjekPayer";
import inputInfoObjekPayer from "../pages/inputInfoObjekPayer";

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
            path="/surveyor/detail-reklame/:id"
            component={DetailReklameSurveyor}
          />
          <Route exact path="/payer/home" component={BerandaPayer} />
          <Route exact path="/payer/detil-laporan/:id" component={DetilLaporanPayer} />
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
            path="/payer/input-detail-objek-pajak"
            component={inputDetailObjekPayer}
          />
          <Route
            exact
            path="/payer/input-informasi-pajak"
            component={inputInfoObjekPayer}
          />
          <Route
            exact
            path="/payer/input-lokasi/peta"
            component={inputLokasiPetaPayer}
          />
          {/* <Route component={NotMatch} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoute;
