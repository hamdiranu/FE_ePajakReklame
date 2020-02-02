import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "unistore/react";
import { store } from "../store";
import Login from "../pages/login";
import BerandaOfficer from "../pages/berandaOfficer";
import DaftarKodeQrOfficer from "../pages/daftarKodeQrOfficer";

const MainRoute = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* PAGES ROUTING */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/home/officer" component={BerandaOfficer} />
          <Route
            exact
            path="/home/officer/daftar-kode-QR"
            component={DaftarKodeQrOfficer}
          />
          {/* <Route component={NotMatch} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoute;
