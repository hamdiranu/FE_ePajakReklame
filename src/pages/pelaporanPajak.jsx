import React, { Component } from "react";
import "../styles/styleNavigasiSurveyor.css";
import "../styles/styleDetilReklameSurveyor.css";
import "../styles/styleDetilLaporanPayer.css"
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import NavigasiDetilLaporanPayer from "../components/navigasiDetilLaporanPayer";
import axios from "axios";
import swal from "sweetalert";

class PelaporanPajak extends Component {
  componentDidMount = async () => {
    if (localStorage.getItem("token") === null || localStorage.getItem("role") !== "payer"){
      await this.props.history.push("/login");
    } else {
      await store.setState({laporanID:this.props.match.params.id});
      await this.props.getDetilLaporanPayer();
      if(this.props.detilLaporan.status_pembayaran === true){
        await this.props.getBuktiPembayaranPayer(this.props.match.params.id);
        await this.props.getSemuaListKodeQRPayer();
      }
    };
  };

  //Fungsi untuk mengubah pembatalan_laporan oleh payer
  putBatalLaporanPayer= async () => {
    const data = {
      "laporan_id": this.props.detilLaporan.id,
      "status_pembatalan": true,
    };
    const req = {
      method: "put",    
      url: `https://alterratax.my.id/laporan/payer`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data : data
    };
    await axios(req)
      .then(function(response){
        swal("Selamat!", "Berhasil Membatalkan Laporan", "success");
        console.log(response.data);
      })
      .catch(function(error){
        alert("Gagal Membatalkan Laporan");
        console.log(error);
      })
    this.props.history.replace("/payer/home");
  };
  render() {
    let namaFileSemuaKodeQR = ""
    if(this.props.buktiPembayaranPayer.nomor_sspd !== undefined){
      namaFileSemuaKodeQR = `KodeQR-SSPD-${this.props.buktiPembayaranPayer.nomor_sspd}.pdf`;
      console.warn("ini namafile", namaFileSemuaKodeQR);
    }
    return (
      <React.Fragment>
        <NavigasiDetilLaporanPayer />
        <div className="pt-5"></div>
        <div className="pt-5"></div>
        <div className="container" style={{marginLeft:"auto !important", marginRight:"auto !important"}}>
          <div className="row align-items-center my-1">
            <div className="col-md-6 text-center judul-detail-laporan" style={{width:"50%"}}>
              {this.props.detilObjekPajak.nama_reklame}
            </div>            
            {this.props.detilLaporan.pembatalan_laporan === false ?
              <React.Fragment>
                {this.props.detilLaporan.status_pembayaran===true ?
                  <div className="col-md-6 text-center judul-detail-laporan" style={{width:"50%"}}>
                    Status : <span style={{color:"green"}}> Sudah Bayar </span>
                  </div>
                :
                  <div className="col-md-6 text-center judul-detail-laporan" style={{width:"50%"}}>
                    Status : <span style={{color:"red"}}> Belum Bayar </span>
                  </div>
                }
              </React.Fragment>
            :
              <div></div>
            }
          </div>
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <Link to="/payer/home" className="btn btn-primary">
                Beranda
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect("laporanID, detilLaporan, detilObjekPajak, listKodeQRUntukUnduh, buktiPembayaranPayer",
  actions)(withRouter(PelaporanPajak));