import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, actions } from "../store";
import { Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import {Modal, ButtonToolbar} from 'react-bootstrap'

class KontenBerandaOfficer extends React.Component {
  handleCari = async (event) => {
    store.setState({ [event.target.name]: event.target.value });
    await this.props.getCariBuktiPembayaran();
  };
  
  handleGenerateQR = async (id) => {
    await this.props.postGenerateQR(id);
    await this.props.history.replace("/home/officer/daftar-kode-QR");
  };

  handleTambahData = async () => {
    await this.props.postBuktiPembayaran();
    await this.props.getDataBuktiPembayaranOfficer();
    await this.props.history.replace("/home/officer");  
  }
  render() {
    const TambahDataModal = (props) => {
      return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <div className="container-fluid" style={{padding:"20px", border:"solid 1px black", minHeight:"400px"}}>
                <div className="boxLogin"> 
                    <div class="mb-5" style={{textAlign:"center"}}>
                        <h4 style={{fontWeight:"bolder"}}>Tambah Data</h4>
                        <h4 style={{fontWeight:"bolder"}}>Bukti Pembayaran</h4>
                    </div>
                    <div>
                        <form onSubmit={e => e.preventDefault(e)}>
                            <div class="form-group">
                                <label for="nomorSSPD">Nomor SSPD :</label>
                                <input 
                                  type="text" 
                                  class="form-control" 
                                  name="nomorSSPD" 
                                  placeholder="Masukkan nomor SSPD" 
                                  pattern="[0-9].{4,}" 
                                  onChange={e => this.props.handleInput(e)} 
                                  id="nomorSSPD" 
                                  required
                                />
                            </div>
                            <div class="form-group">
                                <label for="jumlahReklame" style={{textAlign:"center"}}>Jumlah Reklame:</label>
                                <input 
                                  type="text" 
                                  class="form-control" 
                                  name="jumlahReklame" 
                                  placeholder="Masukkan jumlah reklame" 
                                  pattern="[0-9].{1,}"
                                  onChange={e => this.props.handleInput(e)} 
                                  id="jumlahReklame" 
                                  required
                                />
                            </div>
                            <div className="row justify-content-center">
                              <button 
                                type="submit" 
                                style={{width:"50%", marginTop:"20px"}} 
                                onClick={() => this.handleTambahData()} 
                                class="btn btn-primary">
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
    }

    const TambahData = () => {
      const [modalShow, setModalShow] = React.useState(false);
      return (
        <ButtonToolbar>
          <Button style={{backgroundColor:"#c904a6", border:"#c904a6", color:"white"}} onClick={() => setModalShow(true)}>
            Tambah Data
          </Button>
          <TambahDataModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </ButtonToolbar>
      );
    }

    return (
      <div className="kontenBerandaOfficer">
        <div style={{ textAlign: "center" }}>
          <h2 className="judulHomeOfficer">Daftar SSPD</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-sm-4 cariSspdMobile">
              <form onSubmit={e => e.preventDefault(e)}>
                <span>Cari berdasarkan No. SSPD :</span>
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
              < TambahData />
            </div>
          </div>
          <div>
            <ul className="listSspd">
              <li className="list-group-item dh">
                <div className="row">
                  <div className="col no-sspd">Nomor SSPD</div>
                  <div className="col nama-wp">Nama WP</div>
                  <div className="col nama-reklame">Nama Reklame</div>
                  <div className="col jenis-reklame">Jenis Reklame (Qty)</div>
                  <div className="col status">Status</div>
                  <div className="col kodeQr">QR Code</div>
                </div>
              </li>
              {this.props.dataBuktiPembayaranOfficer.map((item, index) => {
                const buktiPembayaran = item.bukti_pembayaran;
                const objekPajak = item.objek_pajak;
                const payer = item.payer;

                let status
                if (item["kode_QR terscan"] === 0){
                  status = "Belum Tervalidasi";
                } else if (item["kode_QR terscan"] === buktiPembayaran.jumlah_reklame) {
                  status = "Sudah Tervalidasi";
                } else {
                  status = `${item["kode_QR terscan"]} / ${buktiPembayaran.jumlah_reklame} Tervalidasi`;
                }

                return (
                  <li className="list-group-item dt">
                    <div className="row">
                      <div className="col-7 col-sm order-sm-1 no-sspd dt-small barisNomorSspd">
                        {buktiPembayaran.nomor_sspd}
                      </div>
                      <div className="col-5 col-sm order-sm-5 statusValidasi dt-small dt-right dt-bold">
                        {status}
                      </div>
                      <div className="col-7 col-sm order-sm-2 namaWp dt-title">
                        {payer.nama}
                      </div>
                      <div className="col-5 col-sm order-sm-6 kodeQr dt-right">
                        {buktiPembayaran.status_buat_kode_qr
                        ?
                        <Link to="/home/officer/daftar-kode-QR">
                          Lihat Detail
                        </Link>
                        :
                        <Button onClick={e => this.handleGenerateQR(buktiPembayaran.id)} className="btn btn-xs" variant="success">
                          Generate QR
                        </Button>
                        }
                      </div>
                      <div className="col-auto col-sm order-sm-3 namaReklame dt-small">
                        {objekPajak.nama_reklame}
                      </div>
                      <div className="col-auto col-sm order-sm-4 jenisReklame dt-small">
                        {objekPajak.jenis_reklame} ({buktiPembayaran.jumlah_reklame})
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect("dataBuktiPembayaranOfficer", actions)(withRouter(KontenBerandaOfficer));
