import React, { Component } from "react";
import "../styles/styleNavigasiLokasiPayer.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, actions } from "../store";
import NavigasiLokasiPayer from "../components/navigasiLokasiPayer";
import { FaMapMarkerAlt } from "react-icons/fa";
import mapboxgl from "mapbox-gl";
import { Button } from "react-bootstrap";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFtZGlyYW51IiwiYSI6ImNrNjkxdjF4aTBiOGczbGxqOWdocnhrN3kifQ.4x6Q9f7hcT-xSqZv4plNxA";

class LokasiPetaPayer extends Component {
  componentDidMount = async () => {
    if (localStorage.getItem("token") === null || localStorage.getItem("role") !== "payer"){
      await this.props.history.push("/login")
    }
    else{
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [
          this.props.longitudeInputDefault,
          this.props.latitudeInputDefault
        ],
        zoom: this.props.zoomPetaDefault
      });
  
      map.on("move", () => {
        store.setState({
          longitudeInputDefault: map.getCenter().lng.toFixed(4),
          latitudeInputDefault: map.getCenter().lat.toFixed(4),
          zoomPetaDefault: map.getZoom().toFixed(2)
        });
        console.log(
          "lat , long : ",
          this.props.latitudeInputDefault,
          this.props.longitudeInputDefault
        );
      });
    }    
  }

  handleKonfirmasiLokasi = async () => {
    await this.props.getAlamatLokasi();
    await store.setState({listRekomendasiLokasi:[]})
    await localStorage.setItem("longitudeReklamePayer", this.props.longitudeInputDefault)
    await localStorage.setItem("latitudeReklamePayer", this.props.latitudeInputDefault)
    if (this.props.lokasiReklame.length !== 0){
      await localStorage.setItem("alamatReklamePayer", this.props.lokasiReklame[0].place_name)
    }
    this.props.history.push("/payer/input-lokasi")
  }

  render() {
    return (
      <React.Fragment>
        <NavigasiLokasiPayer />
        <div className="col-md-12 col-sm-12 colKotakInputLokasi">
          <div
            className="kotakInputLokasi"
            style={{ display: this.props.showInputLocation }}
          >
            <div className="markerLokasi">
              <FaMapMarkerAlt />
            </div>
            <div
              ref={el => (this.mapContainer = el)}
              className="mapContainer"
            />
          </div>
        </div>
        <div className="row buttonKonfirmasi justify-content-center"
          style={{margin:"20px 0"}}
        >
          <Button type="submit" className="btn-primary" onClick={this.handleKonfirmasiLokasi}>
            Konfirmasi
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default connect("longitudeInputDefault, latitudeInputDefault, zoomPetaDefault, lokasiReklame", actions)(withRouter(LokasiPetaPayer));
