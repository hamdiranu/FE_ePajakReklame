import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import { Button, FormControl } from "react-bootstrap";
import { AiFillCheckCircle } from "react-icons/ai";
import ReactSnackBar from "react-js-snackbar";
import swal from "sweetalert";
import gifLoading from "../images/loading11.gif";

// Kelas untuk Komponen Halaman Detail Reklame Surveyor
class KontenDetailReklameSurveyor extends React.Component {
  detilKeScan = () => {
    store.setState({ statusPageHomeSurveyor: true });
    this.props.history.push("/surveyor/home");
  };

  laporPelanggaran = async () => {
    await this.props.putLaporanPelanggaran();
    await this.props.history.push(
      `/surveyor/detail-reklame/${store.getState().buktiPembayaranId}`
    );
  };

  componentDidMount = async () => {
    await store.setState({ buktiPembayaranId: this.props.match.params.id });
    await this.props.getDetilReklameSurveyor();
    store.setState({ statusPageHomeSurveyor: true });
    if (this.props.statusSuksesScan === true) {
      this.show();
    } else if (this.props.statusGagalScan === true) {
      swal({
        title: "Oops!",
        text: "Kode QR sudah pernah discan!",
        icon: "warning",
        button: "Laporkan!"
      });
    }
    store.setState({ statusSuksesScan: false, statusGagalScan: false });
  };

  show = () => {
    if (this.props.showing) return;

    store.setState({ show: true, showing: true });
    setTimeout(() => {
      store.setState({ show: false, showing: false });
    }, 2000);
  };

  render() {
    return (
      <div className="kontenDetilReklameSurveyor">
        {this.props.statusGetDetilReklame ? (
          <React.Fragment>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 petaDetikReklame my-5">
                  <LeafletMap
                    center={[
                      this.props.detilReklameSurveyor.objek_pajak.latitude,
                      this.props.detilReklameSurveyor.objek_pajak.longitude
                    ]}
                    zoom={16}
                    maxZoom={30}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                    className="kotakPeta"
                    
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker
                      position={[
                        this.props.detilReklameSurveyor.objek_pajak.latitude,
                        this.props.detilReklameSurveyor.objek_pajak.longitude
                      ]}
                    >
                      <Popup>
                        <div style={{ fontSize: "10px", color: "black" }}>
                          {
                            this.props.detilReklameSurveyor.objek_pajak
                              .jenis_reklame
                          }
                        </div>
                        <div style={{ fontSize: "13px", color: "black" }}>
                          {
                            this.props.detilReklameSurveyor.objek_pajak
                              .judul_reklame
                          }
                        </div>
                        <div style={{ fontSize: "10px" }}>
                          {this.props.detilReklameSurveyor.objek_pajak.lokasi}
                        </div>
                      </Popup>
                    </Marker>
                  </LeafletMap>
                </div>
                <div className="col-md-6 md-info-reklame">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12" style={{color:"#1a3454", fontSize:"2.3vh"}}>
                        NO SSPD {this.props.detilReklameSurveyor.bukti_pembayaran.nomor_sspd}
                      </div>
                      <div className="col-md-12" style={{color:"#f47522", fontSize:"2.3vh"}}>
                        <b>{this.props.detilReklameSurveyor.objek_pajak.nama_reklame.toUpperCase()}</b>
                      </div>                      
                    </div>
                  </div>                  
                  <div className="container my-3">
                    <div className="row align-items-center">
                      <div className="col-md-12 info-reklame">
                        <div className="row">
                          <div className="col-md-3" style={{width:"25%"}}>Judul</div>
                          <div className="col-md-1" style={{width:"8%"}}>:</div>
                          <div className="col-md-8" style={{width:"66%"}}>
                            {
                              this.props.detilReklameSurveyor.objek_pajak
                                .judul_reklame
                            }
                          </div>
                        </div>                        
                      </div>
                      <div className="col-md-12 info-reklame">
                        <div className="row">
                          <div className="col-md-3" style={{width:"25%"}}>Jenis</div>
                          <div className="col-md-1" style={{width:"8%"}}>:</div>
                          <div className="col-md-8" style={{width:"66%"}}>
                            {
                              this.props.detilReklameSurveyor.objek_pajak
                                .jenis_reklame
                            }
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 info-reklame">
                        <div className="row">
                          <div className="col-md-3" style={{width:"25%"}}>Jumlah</div>
                          <div className="col-md-1" style={{width:"8%"}}>:</div>
                          <div className="col-md-8" style={{width:"66%"}}>
                            {
                              this.props.detilReklameSurveyor.bukti_pembayaran
                                .jumlah_reklame
                            }
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 info-reklame">
                        <div className="row">
                          <div className="col-md-3" style={{width:"25%"}}>QR Valid</div>
                          <div className="col-md-1" style={{width:"8%"}}>:</div>
                          <div className="col-md-8" style={{width:"66%"}}>
                            {this.props.detilReklameSurveyor.kode_QR_terscan} /{" "}
                            {
                              this.props.detilReklameSurveyor.bukti_pembayaran
                                .jumlah_reklame
                            }
                          </div>
                        </div>
                      </div>
                      {this.props.statusPelanggaran ?
                        <div className="col-md-12 info-reklame">
                          <div className="row">
                            <div className="col-md-3" style={{width:"25%", color:"#e43c25"}}>Pelanggaran</div>
                            <div className="col-md-1" style={{width:"8%", color:"#e43c25"}}>:</div>
                            <div className="col-md-8" style={{width:"66%", color:"#e43c25"}}>
                              {
                                this.props.detilReklameSurveyor.bukti_pembayaran
                                  .pelanggaran
                              }
                            </div>
                          </div>
                        </div>
                      : 
                        <div className="spacePelanggaranKosong"></div>
                      }                      
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 text-center mb-3">
                        <Button
                          onClick={() => this.detilKeScan()}
                          variant="primary"
                        >
                          Scan Kode QR
                        </Button>
                      </div>
                      <div className="col-md-12" style={{color:"#1a3454"}}>
                        Laporkan Pelanggaran :
                      </div>
                      <div className="col-md-12">
                        <div className="textAreaPelanggaran">
                          <FormControl
                            className="isiTextAreaPelanggaran"
                            as="textarea"
                            name="textAreaPelanggaran"
                            aria-label="With textarea"
                            value={this.props.textAreaPelanggaran}
                            onChange={e => this.props.handleInput(e)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="tombolReport my-3">
                          <Button
                            onClick={() => this.laporPelanggaran()}
                            variant="danger"
                            style={{backgroundColor:"#e43c25"}}
                          >
                            Laporkan
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <div className="gifLoading">
            <img src={gifLoading} alt="" />
          </div>
        )}
        <div className="checkSnackBar">
          <ReactSnackBar Icon={<AiFillCheckCircle />} Show={this.props.show}>
            Sukses, status telah berubah!
          </ReactSnackBar>
        </div>
      </div>
    );
  }
}

export default connect(
  "buktiPembayaranId, detilReklameSurveyor, statusGetDetilReklame, statusSuksesScan, showing, show, textAreaPelanggaran, statusPelanggaran, statusGagalScan",
  actions
)(withRouter(KontenDetailReklameSurveyor));
