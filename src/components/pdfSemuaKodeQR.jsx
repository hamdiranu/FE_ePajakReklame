import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
} from "@react-pdf/renderer";
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
        alignItems: "center",
        textAlign: "center",
        marginVertical: 70,
        marginHorizontal: 80,
    },
    movieTitle:{
        top: 20,
        fontSize: 14,
        textAlign: "center"
    }
});

// Fungsi untuk membuat halaman pdf (semua kode QR) pada page Officer
export function PdfDocument(props) {
    return (
        <Document>
            <Page style={styles.page}>
                {props.data ?
                    props.data.map((a, index) => {
                        return (
                            <View key={index} style={styles.movieContainer}>
                                <Text style={styles.movieTitle}>SIP-Rek!{"\n"}SSPD: {props.nomor_sspd}{"\n"}ID : {a.id}</Text>
                                <Image
                                    style={styles.image}
                                    source={`${a.link_gambar}`}
                                />
                            </View>
                        );
                        })
                    : ""
                }
            </Page>
        </Document>
    );
}