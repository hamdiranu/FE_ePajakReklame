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
      `/surveyor/detil-reklame/${store.getState().buktiPembayaranId}`
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
            <div className="container judulDetilReklameSurveyor">
              <span className="judulReklameSurveyor">
                {this.props.detilReklameSurveyor.objek_pajak.nama_reklame}
              </span>
              <span className="nomorSspdDetilReklame">
                No SSPD{" "}
                {this.props.detilReklameSurveyor.bukti_pembayaran.nomor_sspd}
              </span>
            </div>
            <div className="container kotakKontenDetailReklame">
              <div className="row">
                <div className="col-md-6 petaDetikReklame">
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
                <div className="col-md-6">
                  <div
                    style={{ backgroundColor: "white", borderRadius: "10px" }}
                  >
                    <div className="kotakInfoDetilReklame">
                      <div className="rowInfoDetilReklame">
                        <span>Judul : </span>
                        <span>
                          {
                            this.props.detilReklameSurveyor.objek_pajak
                              .judul_reklame
                          }
                        </span>
                      </div>
                      <div className="rowInfoDetilReklame">
                        <span>Jenis Reklame : </span>
                        <span>
                          {
                            this.props.detilReklameSurveyor.objek_pajak
                              .jenis_reklame
                          }
                        </span>
                      </div>
                      <div className="rowInfoDetilReklame">
                        <span>Jumlah Reklame : </span>
                        <span>
                          {
                            this.props.detilReklameSurveyor.bukti_pembayaran
                              .jumlah_reklame
                          }
                        </span>
                      </div>
                      <div className="rowInfoDetilReklame">
                        <span>Jumlah Kode QR Valid : </span>
                        <span>
                          {this.props.detilReklameSurveyor.kode_QR_terscan} /{" "}
                          {
                            this.props.detilReklameSurveyor.bukti_pembayaran
                              .jumlah_reklame
                          }
                        </span>
                      </div>
                      {this.props.statusPelanggaran ? (
                        <div className="rowInfoDetilReklame">
                          <span>Pelangaran : </span>
                          <span>
                            {
                              this.props.detilReklameSurveyor.bukti_pembayaran
                                .pelanggaran
                            }
                          </span>
                        </div>
                      ) : (
                        <div className="spacePelanggaranKosong"></div>
                      )}
                      <div
                        style={{
                          textAlign: "center",
                          paddingTop: "10px",
                          paddingBottom: "10px"
                        }}
                      >
                        <Button
                          onClick={() => this.detilKeScan()}
                          variant="primary"
                        >
                          Scan Kode QR
                        </Button>
                      </div>
                      <div className="catatanPelanggaran">
                        <span>Catatan Pelanggaran :</span>
                      </div>
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
                      <div
                        className="tombolReport"
                        style={{
                          textAlign: "center",
                          paddingTop: "30px"
                        }}
                      >
                        <Button
                          onClick={() => this.laporPelanggaran()}
                          variant="danger"
                        >
                          Report
                        </Button>
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
