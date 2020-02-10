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
    padding: 10
  },
  image: {
    height: 250,
    width: 250,
    marginVertical: 70,
    marginHorizontal: 100,
    alignContent: "center"
  },
  movieTitle: {
    top: 20,
    fontSize: 14,
    margin: 10,
    textAlign: "center"
  }
});

// Fungsi untuk membuat halaman pdf (kode QR satuan) pada page Officer
export function PdfDocument(props) {
  return (
    <Document>
      <Page style={styles.page}>
        {props.data
          ? props.data.map((a, index) => {
              return (
                <View key={index} style={styles.movieContainer}>
                  <Text style={styles.movieTitle}>
                    E-Pajak{"\n"}ID : {a.id}
                  </Text>
                  <Image style={styles.image} source={`${a.link_gambar}`} />
                </View>
              );
            })
          : ""}
      </Page>
    </Document>
  );
}
