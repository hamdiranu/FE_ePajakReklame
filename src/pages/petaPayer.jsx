import React, { Component } from "react";
import "../styles/styleNavigasiSurveyor.css";
import "../styles/stylePetaPayer.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
// // import NavigasiSurveyor from "../components/navigasiSurveyor";
// import "mapbox-gl/dist/mapbox-gl.css";
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

// const token =
//   "pk.eyJ1IjoiaGFtZGlyYW51IiwiYSI6ImNrNjkxdjF4aTBiOGczbGxqOWdocnhrN3kifQ.4x6Q9f7hcT-xSqZv4plNxA";

class PetaPayer extends Component {
  render() {
    return (
      <div>
        <div id="map"></div>
        <pre id="coordinates" class="coordinates"></pre>
      </div>
    );
  }
}

export default connect("", actions)(withRouter(PetaPayer));
