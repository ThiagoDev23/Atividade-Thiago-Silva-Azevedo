import React, { Component } from "react";
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';



const DATA = [
  
  {
    id: '1',
    image: 'https://fla-image.mundobola.com/_next/image/?url=https%3A%2F%2Ffla-media.mundobola.com%2Fmedia%2F2023%2F12%2FMundial-1981.webp&w=3840&q=75',
    text: ["Mundial: 1x", "Anos: 1981", "Finais: Flamengo 3x0 Liverpool"],
  },
  {
    id: '2',
    image: 'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F1124%2Fr632336_1296x729_16%2D9.jpg',
    text: ["Copa Libertadores: 3x", "Anos: 1981 2019 2022", "Finais:", "Flamengo 4x2(Ag) Cobreloa", "Flamengo 2x1 River Plate", "Flamengo 1x0 Athletico Paranaense"],
  },
  {
    id: '3',
    image: 'https://assets.goal.com/images/v3/blt48df22d6907bc36c/GettyImages-1434896261.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    text: ["Copa do Brasil: 5x", "Anos: 1990 2006 2013 2022 2024", "Finais:", "Flamengo 1x0(Ag) Goiás", "Flamengo 3x0(Ag) Vasco", "Flamengo 3x1(Ag) Athletico Paranaense", "Flamengo (P6)1x1(P5)(AG) Corinthians", "Flamengo 4x1(AG) Athletico Mineiro"],
  },
  {
    id: '4',
    image: 'https://s2.glbimg.com/d63FujljV1mgqziMafd--g-eeQM=/640x424/i.glbimg.com/og/ig/infoglobo1/f/original/2019/12/05/36093669_es_06-12-2009_rio_de_janeiro_rj_final_do_campeonato_brasileiro_2009_flamengo_x_gremio_no_ma.jpg',
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
      <Text style={styles.headerTitle}>FlaApp</Text>
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
    fontWeight: 'bold',
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