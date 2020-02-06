import React, { Component } from "react";
import "../styles/styleBerandaOfficer.css";
import "../styles/styleNavigasiOfficer.css";
import "../styles/styleKodeQR.css";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import NavigasiOfficer from "../components/navigasiOfficer";
import { Form } from "react-bootstrap";
import { FaSearch, FaDownload } from "react-icons/fa";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { TiArrowBackOutline } from "react-icons/ti";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "../components/pdfSemuaKodeQR";
import {Modal} from 'react-bootstrap';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
} from "@react-pdf/renderer";

class DaftarKodeQrOfficer extends Component {
  // fungsi get cari kodeQR berdasarkan idKodeQR
  getCariKodeQR = async (event) => {
    await this.props.handleInput(event);
    this.props.cariKodeQR();
    // const req = {
    //   method : "get",
    //   url : `https://alterratax.my.id/kode_qr/officer?bukti_pembayaran_id=${this.props.buktiPembayaranID}&kode_QR_id=${this.props.idKodeQR}`,
    //   headers : {
    //       Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODA5NTUwMzAsIm5iZiI6MTU4MDk1NTAzMCwianRpIjoiMzA1NDFlYTQtOTk0Zi00ZmNkLTk0ZWYtM2U1ZmMyNmU0OTdjIiwiZXhwIjoxNTgxMDQxNDMwLCJpZGVudGl0eSI6IlAyMDAwMDAwMDExMjIwMDEiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJpZCI6MSwibmlwIjoiUDIwMDAwMDAwMTEyMjAwMSIsIm5hbWEiOiJPZmZpY2VyMSIsInJvbGUiOiJvZmZpY2VyIiwiZGFlcmFoX2lkIjoxfX0.T2bXW0e6uxLKJ_ArHxQp4Fiwsr4deHiYJtSkSjEDvJc",
    //   },
    // };
    // await axios(req)
    //   .then(function(response){
    //     store.setState({listKodeQR: response.data.list_kode_qr});
    //   })
    //   .catch(function(error){
    //   });
  };
  componentDidMount = async () => {
    await this.props.getListKodeQR();
  };
  render() {
    const toDataURL = url => fetch(url)
      .then(response => response.blob())
      .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
    }))
    const daftarKodeQR = this.props.daftarKodeQR;
    let listKodeQRUntukUnduh = this.props.listKodeQRUntukUnduh;
    if(listKodeQRUntukUnduh.length !== 0){
      listKodeQRUntukUnduh.map((item, key) => {
        toDataURL(`${item.link_gambar}`)
        .then(dataUrl => {
          item.link_gambar = dataUrl;
        })
      });
    };
    const nama_file_semua_kodeqr = `KodeQR-SSPD-${daftarKodeQR.nomor_sspd}.pdf`;
    const styles = StyleSheet.create({
      page: {
          backgroundColor: "#ffffff"
      },
      movieContainer: {
          backgroundColor: "#f6f6f5",
          display: "flex",
          flexDirection: "row",
          padding:10
      },
      image: {
          height: 250,
          width: 250,
          marginVertical: 70,
          marginHorizontal: 100,
          alignContent:"center"
      },
      movieTitle:{
          top: 20,
          fontSize: 14,
          margin: 10,
          textAlign: "center"
      }
    });
    const KodeQRModal = (props) => {
      return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <div className="container-fluid" style={{padding:"20px", backgroundColor:"silver", border:"solid 1px silver", minHeight:"400px"}}>
                <div className="boxLogin"> 
                    <div className="mb-3" style={{textAlign:"center"}}>
                      <h4 style={{fontWeight:"bolder"}}>KodeQR</h4>
                    </div>
                    <div className="mb-4" style={{textAlign:"center"}}>
                      <img src={props.gambarKodeQR} alt="" style={{width:"60%", height:"60%"}}/>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <PDFDownloadLink
                          document={
                            <Document>
                              <Page style={styles.page}>
                                <View style={styles.movieContainer}>
                                    <Text style={styles.movieTitle}>E-Pajak{"\n"}ID : {props.id}</Text>
                                    <Image
                                        style={styles.image}
                                        source={`${props.gambarKodeQR}`}
                                    />
                                </View>
                              </Page>
                            </Document>}
                          fileName={`KodeQR-SSPD-${daftarKodeQR.nomor_sspd}-ID-${props.id}.pdf`}
                        >
                          {({ blob, url, loading, error }) =>
                            loading ? "Loading..." : <FaDownload size={30}/>
                          }
                        </PDFDownloadLink>
                    </div>
                </div>
            </div>
          </Modal.Body>
        </Modal>
      );
    }
    const KodeQR = (props) => {
      const [modalShow, setModalShow] = React.useState(false);
      return (
        <div>
          <button className="btn btn-success" onClick={() => setModalShow(true)}>Lihat Kode QR</button>
          <KodeQRModal
            gambarKodeQR = {props.gambarKodeQR}
            id = {props.id}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      );
    }
    return (
      <React.Fragment>
        <NavigasiOfficer />
        <div className="kontenDaftarKodeQrOfficer">
          <div className="container">
            <div className="col-md-2" style={{ paddingLeft: "0px" }}>
              <div className="tombolBacktoDaftarSSPD">
                <TiArrowBackOutline />
                <div style={{ paddingTop: "3px", paddingLeft: "3px" }}>
                  <span>Kembali</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <h2 className="judulHomeOfficer">Daftar Kode QR</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-12">
                <div className="container">
                  <div style={{ marginBottom: "20px", display: "grid" }}>
                    <span>No. SSPD : {daftarKodeQR.nomor_sspd}</span>
                    <span>
                      Nama Reklame : {daftarKodeQR.nama_reklame} <br />
                    </span>
                    {daftarKodeQR.pelanggaran === "" ?
                      <div></div>
                    :
                      <div className="box-pelanggaran">
                        <div className="text-pelanggaran">{daftarKodeQR.pelanggaran}</div>
                      </div>
                    }                    
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <form onSubmit={e => e.preventDefault(e)}>
                    <span>Cari berdasarkan ID :</span>
                    <div className="officerCariID">
                      <Form.Control
                        type={this.props.statusInputPassword}
                        id="idKodeQR"
                        className="fadeIn second inputIdQr"
                        name="idKodeQR"
                        placeholder="Masukkan ID"
                        onChange={e => this.getCariKodeQR(e)}
                      />
                      <FaSearch/>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4" style={{ margin: "auto" }}>
                <div className="row">
                  <div className="col-md-12 col-sm-4 tombolDownloadSemuaQr">
                    <div style={{ margin: "auto" }}>
                      <span>Unduh semua kode QR : </span>
                    </div>
                    <div>
                      {listKodeQRUntukUnduh ?
                        <PDFDownloadLink
                          document={<PdfDocument data={listKodeQRUntukUnduh} />}
                          fileName={nama_file_semua_kodeqr}
                          style={{
                            textDecoration: "none",
                            padding: "10px",
                            color: "#ffffff",
                            backgroundColor: "#007BFF",
                            border: "1px solid #007BFF",
                            borderRadius: "5px",
                            width: "fit-content",
                            textAlign: "center",                            
                          }}
                        >
                          {({ blob, url, loading, error }) =>
                            loading ? "Loading document..." : "Unduh"
                          }
                        </PDFDownloadLink>
                      :
                        <div></div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ul className="listSspd">
                <li className="list-group-item dh">
                  <div className="row">
                    <div className="col no-sspd">ID</div>
                    <div className="col nama-wp">Kode Unik</div>
                    <div className="col nama-reklame">Status Scan</div>
                    <div className="col status">Kode QR</div>
                  </div>
                </li>
                {this.props.listKodeQR.map((item, key) => {
                  return (
                    <li className="list-group-item dt">
                      <div className="row">
                        <div className="col-8 col-sm order-sm-1 no-sspd dt-small">
                          {item.id}
                        </div>
                        <div className="col-8 col-sm order-sm-2 nama-wp dt-title">
                          {item.kode_unik}
                        </div>
                        <div className="col-4 col-sm order-sm-6 tombolDownloadKodeQrSatuan dt-right">
                          <KodeQR gambarKodeQR={item.link_gambar} id={item.id}/>
                        </div>
                          {item.status_scan===true ?
                            <div className="col-auto col-sm order-sm-3 statusSudahScan dt-small">
                              <AiFillCheckCircle />
                            </div>                  
                          :
                            <div className="col-auto col-sm order-sm-3 statusBelumScan dt-small">
                              <AiFillCloseCircle />
                            </div>
                          }
                      </div>
                    </li>
                  );
                })
                }
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect("daftarKodeQR, listKodeQR, buktiPembayaranID, idKodeQR, listKodeQRUntukUnduh", actions)(withRouter(DaftarKodeQrOfficer));
