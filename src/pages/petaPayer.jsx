import React, { Component } from "react";
import "../styles/styleNavigasiSurveyor.css";
import "../styles/stylePetaPayer.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import mapboxgl from "mapbox-gl";
import { FaMapMarkerAlt } from "react-icons/fa";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFtZGlyYW51IiwiYSI6ImNrNjkxdjF4aTBiOGczbGxqOWdocnhrN3kifQ.4x6Q9f7hcT-xSqZv4plNxA";

class PetaPayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 112.62163667136366,
      lat: -7.960512177966962,
      zoom: 18
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div className="kotakInputLokasi">
        <div className="markerLokasi">
          <FaMapMarkerAlt />
        </div>
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default connect("", actions)(withRouter(PetaPayer));
