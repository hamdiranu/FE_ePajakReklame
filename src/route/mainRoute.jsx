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
import InputGambarPayer from "../pages/inputGambarPayer";
import InputLokasiPayer from "../pages/inputLokasiPayer";
import InputDetailObjekPayer from "../pages/inputDetailObjekPayer";
import InputInfoObjekPayer from "../pages/inputInfoObjekPayer";
import NotaPajakPayer from "../pages/notaPajakPayer";

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
          <Route exact path="/payer/detail-laporan/:id" component={DetilLaporanPayer} />
          <Route
            exact
            path="/payer/input-gambar"
            component={InputGambarPayer}
          />
          <Route
            exact
            path="/payer/input-lokasi"
            component={InputLokasiPayer}
          />
          <Route
            exact
            path="/payer/input-detail-objek-pajak"
            component={InputDetailObjekPayer}
          />
          <Route
            exact
            path="/payer/input-informasi-pajak"
            component={InputInfoObjekPayer}
          />
          <Route exact path="/payer/nota-pajak" component={NotaPajakPayer} />
          {/* <Route component={NotMatch} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoute;
