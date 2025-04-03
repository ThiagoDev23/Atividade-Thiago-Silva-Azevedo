import React, { Component } from "react";
import { View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';



const DATA = [
  
  {
    id: '1',
    image: 'https://i.pinimg.com/736x/af/41/fc/af41fc65f1fa2c145ff00106568afa39.jpg',
    text: ["Mundial: 1x", "Anos: 1981", "Finais: Flamengo 3x0 Liverpool"],
  },
  {
    id: '2',
    image: 'https://i.pinimg.com/736x/26/3e/09/263e09a8b6342b65bb8a8bd1f5dbfec5.jpg',
    text: ["Copa Libertadores: 3x", "Anos: 1981 2019 2022", "Finais:", "Flamengo 4x2(Ag) Cobreloa", "Flamengo 2x1 River Plate", "Flamengo 1x0 Athletico Paranaense"],
  },
  {
    id: '3',
    image: 'https://media.gettyimages.com/id/1434873773/pt/foto/rio-de-janeiro-brazil-the-trophy-is-displayed-prior-to-the-second-leg-match-of-the-final-of.jpg?s=612x612&w=0&k=20&c=f4sSzU1nBTWxv2fk1ByFQzkoyiJZoPyLNeqQZNmuobk=',
    text: ["Copa do Brasil: 5x", "Anos: 1990 2006 2013 2022 2024", "Finais:", "Flamengo 1x0(Ag) Goiás", "Flamengo 3x0(Ag) Vasco", "Flamengo 3x1(Ag) Athletico Paranaense", "Flamengo (P6)1x1(P5)(AG) Corinthians", "Flamengo 4x1(AG) Athletico Mineiro"],
  },
  {
    id: '4',
    image: 'https://i.pinimg.com/736x/b3/3a/00/b33a0061f9cb893876fbf32b98520bfc.jpg',
    text: ["Brasileirão: 8x", "Anos:1980 1982 1983 1987 1992 2009 2019 2020"],
  },
];

const Item = ({ image, text }) => (
  <View style={styles.item}>
    {image && <Image source={{ uri: image }} style={styles.image} />}
    {text && text.map((line, index) => <Text key={index} style={styles.text}>{line}</Text>)}
  </View>
);

const App = () => (
  <SafeAreaProvider style={styles.container2}>
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Flamengo</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item image={item.image} text={item.text} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  headerTitle: {
    color: 'white',
    fontSize: 25,
    margin: 10,
  },
  item: {
    backgroundColor: '#D3D3D3',
    padding: 1,
    marginVertical: 8,
    marginHorizontal: 10,
    alignItems: 'left',
    width: "95%", 
    borderRadius: 10, 
  },

  image: {
    width: "100%",
    height: 220,
    resizeMode: 'contain',
    borderRadius: 10,
    marginTop: 0,
    
  },
  text: {
    fontSize: 18,
    marginTop: 5,
    color: '#333',
    textAlign: 'left',
    
  },
});

export default App;