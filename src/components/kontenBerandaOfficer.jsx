import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, actions } from "../store";
import { Button, Form } from "react-bootstrap";
import { FaSearch, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Modal, ButtonToolbar } from "react-bootstrap";

// Kelas untuk Komponen Halaman Beranda Officer
class KontenBerandaOfficer extends React.Component {
  handleCari = async event => {
    store.setState({ [event.target.name]: event.target.value });
    if (
      store.getState().kataKunci.length >= 4 ||
      store.getState().kataKunci === ""
    ) {
      await this.props.getCariBuktiPembayaran();
    }
  };

  handleGenerateQR = async id => {
    await this.props.postGenerateQR(id);
    await this.props.history.replace("/officer/daftar-kode-QR/" + id);
  };

  handleTambahData = async () => {
    await this.props.postBuktiPembayaran();
    if (this.props.berhasilTambahData) {
      await this.props.getDataBuktiPembayaranOfficer();
      await this.props.history.replace("/officer/home");
    }
  };

  render() {
    const TambahDataModal = props => {
      return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body style={{ backgroundColor: "#F47523" }}>
            <div
              className="container-fluid bodyModal"
              style={{ backgroundColor: "white" }}
            >
              <div className="boxLogin">
                <div
                  class="mb-5"
                  style={{ textAlign: "center", marginTop: "20px" }}
                >
                  <h4 style={{ fontWeight: "bolder", color: "#17345F" }}>
                    Tambah Data
                  </h4>
                  <h4 style={{ fontWeight: "bolder", color: "#17345F" }}>
                    Bukti Pembayaran
                  </h4>
                </div>
                <div>
                  <form onSubmit={e => e.preventDefault(e)}>
                    <div class="form-group" style={{ textAlign: "center" }}>
                      <label for="nomorSSPD">Nomor SSPD :</label>
                      <input
                        type="text"
                        name="nomorSSPD"
                        class="form-control"
                        onInvalid={event =>
                          event.target.setCustomValidity(
                            "Nomor SSPD Harus Sesuai Dengan Ketentuan"
                          )
                        }
                        placeholder="Masukkan nomor SSPD"
                        pattern="[0-9].{4,}"
                        onChange={e => this.props.handleInput(e)}
                        id="nomorSSPD"
                        required
                        style={{
                          backgroundColor: "white",
                          border: "1px solid #CED4DA",
                          borderRadius: "7px"
                        }}
                      />
                    </div>
                    <div class="form-group" style={{ textAlign: "center" }}>
                      <label
                        for="jumlahReklame"
                        style={{ textAlign: "center" }}
                      >
                        Jumlah Reklame:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="jumlahReklame"
                        onInvalid={event =>
                          event.target.setCustomValidity(
                            "Jumlah Reklame Harus Berupa Angka & Minimal Berjumlah 1"
                          )
                        }
                        placeholder="Masukkan jumlah reklame"
                        style={{
                          backgroundColor: "white",
                          border: "1px solid #CED4DA",
                          borderRadius: "7px"
                        }}
                        onChange={e => this.props.handleInput(e)}
                        pattern="[0-9].{0,}"
                        id="jumlahReklame"
                        required
                      />
                    </div>
                    <div className="row justify-content-center">
                      <button
                        type="submit"
                        style={{
                          width: "50%",
                          marginTop: "20px",
                          backgroundColor: "#62E7C8",
                          fontWeight: "700",
                          color: "#17345F"
                        }}
                        onClick={() => this.handleTambahData()}
                        class="btn buttonTambahData"
                      >
                        Tambah Data
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      );
    };

    const TambahData = () => {
      const [modalShow, setModalShow] = React.useState(false);
      return (
        <ButtonToolbar>
          <Button
            style={{ marginLeft: "auto", display: "table" }}
            onClick={() => setModalShow(true)}
          >
            Tambah Data
          </Button>
          <TambahDataModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </ButtonToolbar>
      );
    };

    const PelanggaranModal = props => {
      return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body style={{ backgroundColor: "red" }}>
            <div
              className="container-fluid"
              style={{
                padding: "20px",
                backgroundColor: "white",
                border: "solid 1px silver",
                minHeight: "400px"
              }}
            >
              <div className="boxPelanggaran">
                <div class="mb-5" style={{ textAlign: "center" }}>
                  <h4 style={{ fontWeight: "bolder" }}>Pelanggaran</h4>
                </div>
                <div>
                  <p>{props.catatanPelanggaran}</p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      );
    };

    const Pelanggaran = props => {
      const [modalShow, setModalShow] = React.useState(false);
      return (
        <div>
          <Button
            className="btn-sm pelanggaran"
            style={{ backgroundColor: "white", border: "white", color: "red" }}
            onClick={() => setModalShow(true)}
          >
            <p>Lihat pelanggaran</p>
          </Button>
          <PelanggaranModal
            catatanPelanggaran={props.catatanPelanggaran}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      );
    };

    return (
      <div className="kontenBerandaOfficer">
        <div style={{ textAlign: "center" }}>
          <h2 className="judulHomeOfficer">Daftar SSPD</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-sm-4 cariSspdMobile">
              <form onSubmit={e => e.preventDefault(e)}>
                <span className="keteranganCari" style={{ fontWeight: "700" }}>
                  Cari berdasarkan No. SSPD :
                </span>
                <div className="officerCariSSPD">
                  <Form.Control
                    type={this.props.statusInputPassword}
                    id="kataKunci"
                    className="col-md-11 col-sm-7 fadeIn second inputSSPD"
                    name="kataKunci"
                    placeholder="Cari"
                    onChange={e => this.handleCari(e)}
                  />
                  <FaSearch />
                </div>
              </form>
            </div>
            <div className="col-md-2 col-sm-6 tombolTambahSSPD">
              <TambahData />
            </div>
          </div>
          <div>
            <ul className="listSspd">
              <li
                className="list-group-item dh"
                style={{
                  color: "white",
                  fontWeight: "900",
                  fontSize: "17px",
                  backgroundColor: "#455C7F"
                }}
              >
                <div className="row">
                  <div
                    className="col no-sspd"
                    style={{ borderRight: "1px solid" }}
                  >
                    Nomor SSPD
                  </div>
                  <div
                    className="col nama-wp"
                    style={{ borderRight: "1px solid" }}
                  >
                    Nama WP
                  </div>
                  <div
                    className="col nama-reklame"
                    style={{ borderRight: "1px solid" }}
                  >
                    Nama Reklame
                  </div>
                  <div
                    className="col jenis-reklame"
                    style={{ borderRight: "1px solid" }}
                  >
                    Jenis (Qty)
                  </div>
                  <div
                    className="col status"
                    style={{ borderRight: "1px solid" }}
                  >
                    Status
                  </div>
                  <div className="col kodeQr">QR Code</div>
                </div>
              </li>
              {this.props.dataBuktiPembayaranOfficer.map((item, index) => {
                const buktiPembayaran = item.bukti_pembayaran;
                const objekPajak = item.objek_pajak;
                const payer = item.payer;
                const catatanPelanggaran = buktiPembayaran.pelanggaran;

                let status;
                if (item["kode_QR terscan"] === 0) {
                  status = "Belum Tervalidasi";
                } else if (
                  item["kode_QR terscan"] === buktiPembayaran.jumlah_reklame
                ) {
                  status = "Sudah Tervalidasi";
                } else {
                  status = `${item["kode_QR terscan"]} / ${buktiPembayaran.jumlah_reklame} Tervalidasi`;
                }

                return (
                  <li className="list-group-item dt">
                    <div className="row">
                      <div className="col-6 col-sm order-sm-1 no-sspd dt-small barisNomorSspd">
                        {buktiPembayaran.nomor_sspd}
                      </div>
                      <div className="col-6 col-sm order-sm-5 statusValidasi dt-small dt-bold">
                        {status}
                        <br />
                        {buktiPembayaran.pelanggaran === "" ? (
                          <div></div>
                        ) : (
                          <Pelanggaran
                            className="linkPelanggaran"
                            catatanPelanggaran={catatanPelanggaran}
                          />
                        )}
                      </div>
                      <div className="col-7 col-sm order-sm-2 namaWp dt-title">
                        {payer}
                      </div>
                      <div className="col-5 col-sm order-sm-6 kodeQr">
                        {buktiPembayaran.status_buat_kode_qr ? (
                          <Link
                            to={`/officer/daftar-kode-QR/${buktiPembayaran.id}`}
                            onClick={this.props.setPageKodeQR}
                          >
                            Lihat Detail
                          </Link>
                        ) : (
                          <Button
                            onClick={e =>
                              this.handleGenerateQR(buktiPembayaran.id)
                            }
                            className="btn btn-xs"
                            variant="success"
                          >
                            Generate QR
                          </Button>
                        )}
                      </div>
                      <div className="col-8 col-sm order-sm-3 namaReklame dt-small">
                        {objekPajak.nama_reklame}
                      </div>
                      <div className="col-auto col-sm order-sm-4 jenisReklame dt-small">
                        {objekPajak.jenis_reklame} (
                        {buktiPembayaran.jumlah_reklame})
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            {this.props.kataKunci === "" ? (
              <div className="clearfix">
                <ul className="pagination">
                  {this.props.pageBuktiPembayaran === 1 ? (
                    <li className="page-item disabled">
                      <button className="page-link">
                        <FaAngleLeft />
                      </button>
                    </li>
                  ) : (
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={() =>
                          this.props.getDataBuktiPembayaranOfficer(
                            this.props.pageBuktiPembayaran - 1
                          )
                        }
                      >
                        <FaAngleLeft />
                      </button>
                    </li>
                  )}
                  <li className="page-item disabled">
                    <button className="page-link" style={{ color: "#232423" }}>
                      Halaman {this.props.pageBuktiPembayaran}
                    </button>
                  </li>
                  {this.props.pageBuktiPembayaran ===
                  this.props.maksPageBuktiPembayaran ? (
                    <li className="page-item disabled">
                      <button className="page-link">
                        <FaAngleRight />
                      </button>
                    </li>
                  ) : (
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={() =>
                          this.props.getDataBuktiPembayaranOfficer(
                            this.props.pageBuktiPembayaran + 1
                          )
                        }
                      >
                        <FaAngleRight />
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "dataBuktiPembayaranOfficer, pageBuktiPembayaran, maksPageBuktiPembayaran, kataKunci, berhasilTambahData",
  actions
)(withRouter(KontenBerandaOfficer));
