import React, { Component } from "react";
import "../styles/styleNavigasiSurveyor.css";
import "../styles/styleDetilLaporanPayer.css"
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import NavigasiDetilLaporanPayer from "../components/navigasiDetilLaporanPayer";
import { FaWindowClose, FaCcAmazonPay } from "react-icons/fa";
import ReactToPrint from 'react-to-print';
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "../components/pdfSemuaKodeQR";
import axios from "axios";
import swal from "sweetalert";

class BuktiBayarPDF extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div style={{border:"2px solid black"}} className="m-4">
          <table className="m-4" style={{borderBottom:"5px solid black"}} height="200px">
            <tbody className="">
              <tr className="">
                <td width="25%" className="text-center">
                <img style={{height:"150px"}}
                  src="https://seeklogo.com/images/K/kab-bandung-barat-logo-26B962B358-seeklogo.com.png"
                  alt=""/>
                </td>
                <td className="text-center px-3" width="845px">
                  <h4 style={{fontWeight:"bold"}}>PEMERINTAH KABUPATEN BANDUNG BARAT</h4>
                  <h3 style={{fontWeight:"bold"}}>BADAN PENGELOLAAN KEUANGAN DAERAH</h3>
                  <h5>Jl. Raya Padalarang-Cisarua KM.2 Ngamprah Kabupaten Bandung Barat</h5>
                  <h5>Website : www.bandungbaratkab.go.id, Kode Pos : 40552</h5>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col-md-12 text-center">
              <h5 style={{fontWeight:"bold"}}>
                SSPD
              </h5>
              <h5>
                ( SURAT SETORAN PAJAK DAERAH )
              </h5>
              <h5>
                PAJAK Pajak Reklame
              </h5>
            </div>
          </div>
          <table width="973px" className="mx-5 mt-3">
            <tbody>
              <tr>
                <td width="25%">Nama</td>
                <td width="5%">:</td>
                <td colSpan="2"><b>KOPERASI SIMPAN PINJAM MAKMUR MANDIRI</b></td>
              </tr>
              <tr>
                <td width="25%">Alamat</td>
                <td width="5%">:</td>
                <td colSpan="2"><b>JL. RAYA BATUJAJAR NO. 72 DESA CIMAREME KEC. PADALARANG</b></td>
              </tr>
              <tr>
                <td width="25%">NPWPD</td>
                <td width="5%">:</td>
                <td colSpan="2"><b>P220160001273217008003</b></td>
              </tr>
              <tr>
                <td width="25%">Menyetor Berdasarkan</td>
                <td width="5%">:</td>
                <td colSpan="2"><b>SKPD Official</b></td>
              </tr>
              <tr>
                <td width="25%">Periode Pajak</td>
                <td width="5%">:</td>
                <td><b>Januari 2020</b></td>
                <td width="18%">No. Urut : 4558768724</td>
              </tr>
            </tbody>
          </table>
          <table className="mx-5 my-4">
            <tbody className="mx-5 text-center">
              <tr style={{borderTop:"1px solid"}} height="30px">
                <td style={{borderLeft:"1px solid"}} width="50px">No.</td>
                <td style={{borderLeft:"1px solid"}} width="150px">Kode Rekening</td>
                <td style={{borderLeft:"1px solid"}} colspan="3">Jenis Pajak Daerah</td>
                <td style={{borderLeft:"1px solid"}} width="130px">Jumlah</td>
                <td style={{borderLeft:"1px solid"}} width="80px">Denda</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}} width="130px">Total Setoran</td>
              </tr>
              <tr style={{borderTop:"1px solid"}}>
                <td style={{borderLeft:"1px solid"}} className="pt-2">1.</td>
                <td style={{borderLeft:"1px solid"}} className="pt-2">4110401</td>
                <td colspan="3" style={{borderLeft:"1px solid"}} className="text-left px-2 pt-2">
                  BILLBOARD / BANDO
                </td>
                <td style={{borderLeft:"1px solid"}} className="pt-2">Rp.854.450,00</td>
                <td style={{borderLeft:"1px solid"}}>Rp.0,00</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}>Rp.854.450,00</td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td width="180px" className="text-left px-2" style={{borderLeft:"1px solid"}}>Periode</td>
                <td width="10px">:</td>
                <td width="360px" className="text-left px-2">25 Januari 2020 s/d 24 Januari 2021</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td className="text-left px-2" style={{borderLeft:"1px solid"}}>Naskah</td>
                <td>:</td>
                <td className="text-left px-2">DEMIR TURKISH RESTAURANT</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td className="text-left px-2" style={{borderLeft:"1px solid"}}>Lokasi</td>
                <td>:</td>
                <td className="text-left px-2">JL. RAYA LEMBANG 188 A DS. LEMBANG KEC LEMBANG</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td className="text-left px-2" style={{borderLeft:"1px solid"}}>Panjang</td>
                <td>:</td>
                <td className="text-left px-2">0.98 M</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td className="text-left px-2" style={{borderLeft:"1px solid"}}>Tinggi</td>
                <td>:</td>
                <td className="text-left px-2">5.20 M</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td className="text-left px-2" style={{borderLeft:"1px solid"}}>Lebar</td>
                <td>:</td>
                <td className="text-left px-2">1.20 M</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td className="text-left px-2" style={{borderLeft:"1px solid"}}>Muka</td>
                <td>:</td>
                <td className="text-left px-2">2 muka</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td className="text-left px-2" style={{borderLeft:"1px solid"}}>Jumlah Reklame</td>
                <td>:</td>
                <td className="text-left px-2">1 buah</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td className="text-left px-2" style={{borderLeft:"1px solid"}}>Tarif</td>
                <td>:</td>
                <td className="text-left px-2">25%</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td colSpan="3" style={{borderTop:"1px solid", borderLeft:"1px solid"}} className="text-left px-2 py-2">
                  <b>Jumlah Total Setoran</b>
                </td>
                <td colSpan="3" style={{borderTop:"1px solid", borderLeft:"1px solid", borderRight:"1px solid"}} className="py-2">
                  <b>Rp.854.450,00</b>
                </td>
              </tr>
              <tr style={{borderTop:"1px solid", borderBottom:"1px solid"}}>
                <td className="py-2" colSpan="2" style={{borderLeft:"1px solid"}}>Terbilang</td>
                <td className="py-2" colSpan="6" style={{borderRight:"1px solid"}}>: <i>DELAPAN RATUS LIMA PULUH EMPAT RIBU EMPAT RATUS LIMA PULUH RUPIAH</i></td>
              </tr>
            </tbody>
          </table>
          <table className="m-5" width="973px">
            <tbody className="mx-5 text-center" style={{border:"1px solid"}}>
              <tr>
                <td className="pt-4" style={{borderRight:"1px solid"}}>Bendahara Penerima,</td>
                <td className="pt-4" colSpan="3" style={{borderRight:"1px solid"}}>Diterima oleh :</td>
                <td className="pt-4">21 Januari 2020</td>
              </tr>
              <tr>
                <td className="pb-3" style={{borderRight:"1px solid"}}></td>
                <td className="pb-3" colSpan="3" style={{borderRight:"1px solid"}}>Petugas Tempat Pembayaran</td>
                <td className="pb-3">Penyetor</td>
              </tr>
              <tr>
                <td style={{borderRight:"1px solid"}}></td>
                <td className="text-left px-2" width="13%">Tanggal</td>
                <td className="text-left" width="3%">:</td>
                <td className="text-left" style={{borderRight:"1px solid"}}>21 Januari 2020</td>
                <td></td>
              </tr>
              <tr>
                <td style={{borderRight:"1px solid"}}></td>
                <td className="text-left px-2">Tanda Tangan</td>
                <td className="text-left">:</td>
                <td className="text-left" style={{borderRight:"1px solid"}}></td>
                <td></td>
              </tr>
              <tr>
                <td style={{borderRight:"1px solid"}}><u>LINDA HANDAYANI SE MM</u></td>
                <td colSpan="3" style={{borderRight:"1px solid"}}></td>
                <td></td>
              </tr>
              <tr>
                <td className="pb-4" style={{borderRight:"1px solid"}}>NIP. 19761020 20080 1 2009</td>
                <td className="text-left pb-4 px-2">Nama Terang</td>
                <td className="text-left pb-4">:</td>
                <td className="text-left pb-4" style={{borderRight:"1px solid"}}></td>
                <td className="pb-4">(..............................)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
class LaporanPDF extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{border:"2px solid black"}} className="m-4">
          <table className="m-4" style={{borderBottom:"5px solid black"}} height="200px">
            <tbody className="">
              <tr className="">
                <td width="25%" className="text-center">
                <img style={{height:"150px"}}
                  src="https://seeklogo.com/images/K/kab-bandung-barat-logo-26B962B358-seeklogo.com.png"
                  alt=""/>
                </td>
                <td className="text-center px-3" width="845px">
                  <h4 style={{fontWeight:"bold"}}>PEMERINTAH KABUPATEN BANDUNG BARAT</h4>
                  <h3 style={{fontWeight:"bold"}}>BADAN PENGELOLAAN KEUANGAN DAERAH</h3>
                  <h5>Jl. Raya Padalarang-Cisarua KM.2 Ngamprah Kabupaten Bandung Barat</h5>
                  <h5>Website : www.bandungbaratkab.go.id, Kode Pos : 40552</h5>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col-md-12 text-center">
              <h5 style={{fontWeight:"bold"}}>
                SURAT KETETAPAN PAJAK DAERAH (SKPD)
              </h5>
              <h5 style={{fontWeight:"bold"}}>
                PAJAK Pajak Reklame
              </h5>
              <h5 style={{fontWeight:"bold"}}>
                TAHUN 2020
              </h5>
            </div>
          </div>
          <table className="m-5">
            <tbody className="m-5">
              <tr>
                <td width="150px">NAMA PEMILIK</td>
                <td width="50px">:</td>
                <td width="420px">PT SURYA RASA ABADVERNA INDRIAWATI</td>
                <td width="140px">NO. TAGIHAN</td>
                <td width="50px">:</td>
                <td>0000091012020-001</td>
              </tr>
              <tr>
                <td>NAMA USAHA</td>
                <td>:</td>
                <td>DEMIR TURKISH RESTAURANT</td>
                <td>NO. SKPD</td>
                <td>:</td>
                <td>0000091/01/2020-001</td>
              </tr>
              <tr>
                <td>ALAMAT USAHA</td>
                <td>:</td>
                <td>JL. RAYA LEMBANG NO. 188 A</td>
                <td>NO. NHR</td>
                <td>:</td>
                <td>0000116/01/2020-001</td>
              </tr>
              <tr>
                <td>NPWPD</td>
                <td>:</td>
                <td>P120180001033217001003</td>
              </tr>
            </tbody>
          </table>
          <table className="m-5">
            <tbody className="mx-5 text-center">
              <tr style={{borderTop:"1px solid"}} height="30px">
                <td style={{borderLeft:"1px solid"}} width="50px">No.</td>
                <td style={{borderLeft:"1px solid"}} width="150px">Kode Rekening</td>
                <td style={{borderLeft:"1px solid"}} colspan="3">Jenis Pajak Daerah</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}} width="250px">Jumlah</td>
              </tr>
              <tr style={{borderTop:"1px solid"}}>
                <td style={{borderLeft:"1px solid"}} className="pt-2">1.</td>
                <td style={{borderLeft:"1px solid"}} className="pt-2">4110401</td>
                <td colspan="3" style={{borderLeft:"1px solid"}} className="text-left px-2 pt-2">
                  BILLBOARD / BANDO
                </td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}} className="pt-2">Rp.854.450,00</td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td width="180px" className="text-left px-2" style={{borderLeft:"1px solid"}}>Periode</td>
                <td width="10px">:</td>
                <td width="360px" className="text-left px-2">25 Januari 2020 s/d 24 Januari 2021</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td className="text-left px-2" style={{borderLeft:"1px solid"}}>Naskah</td>
                <td>:</td>
                <td className="text-left px-2">DEMIR TURKISH RESTAURANT</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td className="text-left px-2" style={{borderLeft:"1px solid"}}>Lokasi</td>
                <td>:</td>
                <td className="text-left px-2">JL. RAYA LEMBANG 188 A DS. LEMBANG KEC LEMBANG</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td className="text-left px-2" style={{borderLeft:"1px solid"}}>Panjang</td>
                <td>:</td>
                <td className="text-left px-2">0.98 M</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td className="text-left px-2" style={{borderLeft:"1px solid"}}>Tinggi</td>
                <td>:</td>
                <td className="text-left px-2">5.20 M</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td className="text-left px-2" style={{borderLeft:"1px solid"}}>Lebar</td>
                <td>:</td>
                <td className="text-left px-2">1.20 M</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td className="text-left px-2" style={{borderLeft:"1px solid"}}>Muka</td>
                <td>:</td>
                <td className="text-left px-2">2 muka</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td className="text-left px-2" style={{borderLeft:"1px solid"}}>Jumlah Reklame</td>
                <td>:</td>
                <td className="text-left px-2">1 buah</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td className="text-left px-2" style={{borderLeft:"1px solid"}}>Tarif</td>
                <td>:</td>
                <td className="text-left px-2">25%</td>
                <td style={{borderLeft:"1px solid", borderRight:"1px solid"}}></td>
              </tr>
              <tr>
                <td style={{borderLeft:"1px solid"}}></td>
                <td style={{borderLeft:"1px solid"}}></td>
                <td colSpan="3" style={{borderTop:"1px solid", borderLeft:"1px solid"}} className="text-left px-2 py-2">
                  <b>Jumlah Ketetapan Pajak</b>
                </td>
                <td style={{borderTop:"1px solid", borderLeft:"1px solid", borderRight:"1px solid"}} className="py-2">
                  <b>Rp.854.450,00</b>
                </td>
              </tr>
              <tr style={{borderTop:"1px solid"}}>
                <td className="py-2" colSpan="2" style={{borderLeft:"1px solid"}}>Terbilang</td>
                <td className="py-2" colSpan="4" style={{borderLeft:"1px solid", borderRight:"1px solid"}}>: <i>DELAPAN RATUS LIMA PULUH EMPAT RIBU EMPAT RATUS LIMA PULUH RUPIAH</i></td>
              </tr>
              <tr style={{borderTop:"1px solid"}}>
                <td colSpan="6" className="text-left p-2" style={{borderLeft:"1px solid", borderRight:"1px solid"}}>
                  <u>PERHATIAN</u> :
                </td>
              </tr>
              <tr>
                <td className="text-right" style={{verticalAlign:"top", borderLeft:"1px solid"}}>
                  1.
                </td>
                <td className="text-left" colSpan="5" style={{borderRight:"1px solid"}}>
                  Harap penyertaan dilakukan pada Kas Daerah atau tempat lain yang ditunjuk (Bendahara Penerimaan) dengan menggunakan Surat Setoran Pajak Daerah (SSPD).
                </td>
              </tr>
              <tr style={{borderBottom:"1px solid"}}>
                <td className="text-right" style={{verticalAlign:"top", borderLeft:"1px solid"}}>
                  2.
                </td>
                <td className="text-left" colSpan="5" style={{borderRight:"1px solid"}}>
                  Apabila SKPD ini tidak atau kurang dibayar lewat waktu paling lama 15 hari setelah SKPD ini diterima atau (tanggal jatuh tempo) dikenakan sanksi administrasi berupa bunga sebesar 2% per bulan.
                </td>
              </tr>
            </tbody>
          </table>
          <table className="mx-5">
            <tbody className="text-center mx-5">
              <tr>
                <td width="531px"></td>
                <td width="531px">
                  Bandung Barat, 15 Januari 2020
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  An. Kepala Badan Pengelolaan Keuangan Daerah
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Kabupaten Bandung Barat
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Kabid Pajak Daerah I
                </td>
              </tr>
              <tr>
                <td>
                  Tanggal Jatuh Tempo
                </td>
                <td></td>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr>
                <td>
                  30 Januari 2020
                </td>
                <td>
                  <u><b>Drs. HASANUDIN, M.Si</b></u>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Pembina
                </td>
              </tr>
              <tr>
                <td></td>
                <td>NIP : 19730404 199203 1 001</td>
              </tr>
              <tr>
                <td colSpan="2" className="text-left px-3 pb-4">
                  *SKPD ini bukan merupakan Legalitas Perizinan
                </td>
              </tr>
              <tr style={{borderTop:"1px solid"}}>
                <td className="pt-4 pb-2" colSpan="2">
                  <b>TANDA TERIMA</b>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="mx-5" width="966px">
            <tbody className="mx-5">
              <tr>
                <td width="17%"><b>NAMA USAHA</b></td>
                <td width="3%">:</td>
                <td width="42%">DEMIR TURKISH RESTAURANT</td>
                <td width="10%">NO. SKPD</td>
                <td width="3%">:</td>
                <td width="25%">0000091/01/2020-001</td>
              </tr>
              <tr>
                <td><b>ALAMAT USAHA</b></td>
                <td>:</td>
                <td>JL. RAYA LEMBANG NO. 188 A</td>
              </tr>
              <tr>
                <td><b>NPWPD</b></td>
                <td>:</td>
                <td>P120180001033217001003</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td colSpan="3" className="text-center">Bandung Barat, .....................</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className="text-center" colSpan="3">Yang Menerima,</td>
              </tr>
              <tr height="48px"><br/></tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className="text-center pb-5" colSpan="3">(.....................................)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
class DetilLaporanPayer extends Component {
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
      })
      .catch(function(error){
        alert("Gagal Membatalkan Laporan");
        console.log(error);
      })
    this.props.history.replace("/payer/home");
  };

  tombolBayar = async () => {
    const data = {
      "laporan_id": this.props.detilLaporan.id,
      "status_pembayaran": true,
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
        console.log("isi response", response.data)
        store.setState({ dataStatusSuksesBayar : response.data });
      })
      .catch(function(error){
        alert("Gagal Membatalkan Laporan");
        console.log(error);
      })
    this.props.history.push("/payer/status-pembayaran");
    store.setState({ statusSuksesbayar : true });
  }
  render() {
    const pemasangan = new Date(this.props.detilObjekPajak.tanggal_pemasangan);
    const tanggal_pasang = pemasangan.getDate();
    const bulan_pasang = pemasangan.getMonth()+1;
    const tahun_pasang = pemasangan.getFullYear();
    const pembongkaran = new Date(this.props.detilObjekPajak.tanggal_pembongkaran);
    const tanggal_bongkar = pembongkaran.getDate();
    const bulan_bongkar = pembongkaran.getMonth()+1;
    const tahun_bongkar = pembongkaran.getFullYear();
    let namaFileSemuaKodeQR = ""
    if(this.props.buktiPembayaranPayer.nomor_sspd !== undefined){
      namaFileSemuaKodeQR = `KodeQR-SSPD-${this.props.buktiPembayaranPayer.nomor_sspd}.pdf`;
    }
    const currencyFormatter = require("currency-formatter");
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
            <div className="col-md-6" style={{width:"50%"}}></div>
            <div className="col-md-6 text-center total-pajak"
              style={{width:"50%"}}>
              Total Pajak : Rp. {currencyFormatter.format(this.props.detilLaporan.total_pajak, {
                code: "IDR",
                symbol: ""
              })}
            </div>
          </div>
          <div className="row mx-0 align-items-center my-2">
            <div className="col-md-6" style={{width:"50%"}}>
              <div className="row">
                <img className="report-payer-gambar"
                  src={this.props.detilObjekPajak.foto} alt=""/>
              </div>
            </div>
            <div className="col-md-6" style={{width:"50%"}}>
              {this.props.detilLaporan.pembatalan_laporan ?
                <div className="judul-detail-laporan text-center">Status : Batal Lapor</div>
              :
                <React.Fragment>
                  <div className="row my-3">
                    <div className="col-md-12 text-center">
                      <ReactToPrint
                        trigger={() => <button
                          className="btn btn-info button-detail-report">Laporan (SKPD)</button>
                        }
                        content={() => this.kontenLaporan}
                      />                      
                    </div>
                    <div style={{display:"none"}} className="col-md-12">
                      <LaporanPDF ref={el => (this.kontenLaporan = el)}/>
                    </div>
                  </div>
                  {this.props.detilLaporan.status_pembayaran === true ?
                    <React.Fragment>
                      <div className="row my-3">
                        <div className="col-md-12 text-center">
                          <ReactToPrint
                            trigger={() => <button className="btn btn-warning button-detail-report"
                            >Bukti Bayar (SSPD)</button>
                            }
                            content={() => this.kontenBuktiBayar}
                          />
                        </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-12 text-center">
                          {this.props.buktiPembayaranPayer.nomor_sspd !== undefined ?
                            <React.Fragment>
                              {this.props.listKodeQRUntukUnduh?
                                <PDFDownloadLink
                                  document={<PdfDocument data={this.props.listKodeQRUntukUnduh}
                                    nomor_sspd={this.props.buktiPembayaranPayer.nomor_sspd}/>}
                                  fileName={namaFileSemuaKodeQR}
                                  className="btn btn-dark button-detail-report"
                                >
                                  {({ blob, url, loading, error }) =>
                                    loading ? "Loading document..." : "Kode QR"
                                  }
                                </PDFDownloadLink>
                              :
                                <div></div>
                              }
                            </React.Fragment>
                          :
                            <div></div>
                          }
                          
                        </div>
                      </div>
                    </React.Fragment>                  
                  :
                    <React.Fragment>
                      <div className="row my-3">
                        <div className="col-md-12 text-center">
                          <button onClick={() => this.tombolBayar()} className="btn btn-success button-detail-report">
                            <FaCcAmazonPay/> Bayar Sekarang
                          </button>
                        </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-12 text-center">
                          <button onClick={this.putBatalLaporanPayer} className="btn btn-danger button-detail-report">
                            <FaWindowClose/> Pembatalan
                          </button>
                        </div>
                      </div>
                    </React.Fragment>
                  }
                </React.Fragment>                
              }          
            </div>
          </div>
          <div className="row" style={{display:"none"}}>
            <div className="col-md-12">
              <div className="col-md-12">
                <BuktiBayarPDF ref={el => (this.kontenBuktiBayar = el)}/>
              </div>
            </div>
          </div>
          <div className="row mx-0 mt-5 mb-3">
            <div className="col-md-12 px-0">
              <table id="dtBasicExample"
                className="table table-striped table-responsive table-sm table-non-pdf"
                cellspacing="0" width="100%"
                style={{marginLeft:"auto", marginRight:"auto", display:"table"}}>
                <tbody style={{verticalAlign:"center"}}>
                  <tr width="384px">
                    <th width="154px">NOPD</th>
                      <td width="230px">{this.props.detilObjekPajak.nopd}</td>
                  </tr>
                  <tr>
                    <th>Judul</th>
                      <td>{this.props.detilObjekPajak.judul_reklame}</td>
                  </tr>
                  <tr>
                    <th>Tipe Produk</th>
                      <td>{this.props.detilObjekPajak.tarif_tambahan}</td>
                  </tr>
                  <tr>
                    <th>Jenis</th>
                      <td>{this.props.detilObjekPajak.jenis_reklame}</td>
                  </tr>
                  <tr>
                    <th>Tipe</th>
                      <td>{this.props.detilObjekPajak.tipe_reklame}</td>
                  </tr>
                  <tr>
                    <th>Ukuran (Luas)</th>
                      <td>{this.props.detilObjekPajak.panjang}m x {this.props.detilObjekPajak.lebar}m ( {this.props.detilObjekPajak.luas}m<sup>2</sup> )</td>
                  </tr>
                  <tr>
                    <th>Ketinggian Dari Tanah</th>
                      <td>{this.props.detilObjekPajak.tinggi}</td>
                  </tr>
                  <tr>
                    <th>Jumlah</th>
                      <td>{this.props.detilObjekPajak.jumlah}</td>
                  </tr>
                  <tr>
                    <th>Letak Pemasangan</th>
                      <td>{this.props.detilObjekPajak.letak_pemasangan}</td>
                  </tr>
                  <tr>
                    <th>Jumlah Muka Reklame</th>
                      <td>{this.props.detilObjekPajak.muka}</td>
                  </tr>
                  <tr>
                    <th>Sudut Pandang</th>
                      <td>{this.props.detilObjekPajak.sudut_pandang}</td>
                  </tr>
                  <tr>
                    <th>Lokasi</th>
                      <td>{this.props.detilObjekPajak.lokasi}</td>
                  </tr>
                  <tr>
                    <th>Klasifikasi Jalan</th>
                      <td>{this.props.detilObjekPajak.klasifikasi_jalan}</td>
                  </tr>
                  <tr>
                    <th>Waktu Pemasangan</th>
                      <td>{tanggal_pasang}-{bulan_pasang}-{tahun_pasang} s/d {tanggal_bongkar}-{bulan_bongkar}-{tahun_bongkar}
                      </td>
                  </tr>
                  <tr>
                    <th>Masa Pajak</th>
                      <td>{this.props.detilObjekPajak.masa_pajak}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect("laporanID, detilLaporan, detilObjekPajak, listKodeQRUntukUnduh, buktiPembayaranPayer",
  actions)(withRouter(DetilLaporanPayer));