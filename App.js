import React, { Component } from "react";
import { View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';



const DATA = [
  
  {
    
    image: 'https://cgi.chevrolet.com/mmgprod-us/dynres/prove/image.gen?i=2025/1YC07/1YC07__2LT/GBA_HTM_0ST_1SZ_2LT_2ST_3ST_4AA_4ST_5A7_5FC_5ST_6X1_719_7X1_8X2_9L3_9X2_A2X_A7K_AH2_AHE_AHH_AJ7_AL0_AL9_AP9_AQA_AT9_AXJ_B72_BAZ_BC7_BGR_CF7_CJ2_D3V_DRZ_DYX_EF7_EFR_EPH_ERI_EYT_FE3_FJW_G96_GM7_IOK_J25_J55_J6A_K4C_KI3_KQV_KRV_LHD_LT2_M1L_MAH_N38_NE1_NE8_NGA_NK4_NKD_NPP_NUB_PPW_PRF_Q9A_R9N_RWL_SLM_T0A_T4L_T8Z_TB8_TDM_TQ5_TTW_U2K_U80_UD7_UDV_UE1_UE4_UEU_UFG_UFT_UG1_UHX_UHY_UJN_UKT_UMN_UQH_UQT_UTJ_UTU_UTV_UV6_UVA_V08_V8D_VA5_VH9_VHM_VK3_VRF_VRG_VRH_VRK_VRL_VRM_VRN_VRR_VT7_VV4_WMZ_XFQ_XL8_Z51gmds2.jpg&v=deg01&std=true&country=US',
    text: [" Marca: Chevrolet", " Modelo: Corvette", "Ano: 2025"],
  },
  {
    
    image: 'https://media.bailliegifford.com/mws/cq0fn2lu/shutterstock_2074849312.jpg',
    text: [" Marca: Ferrari", " Modelo: SF90", "Ano: 2023"],
  },
  {
    
    image: 'https://s2-autoesporte.glbimg.com/axnbbSqvvknTgdAFCpMjDI_cuAI=/0x0:1200x675/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2023/b/t/EZlzFfQVWgT2bZpNXi6A/nissan-gt-r-nismo-special-edition-my2024-02.jpg',
    text: [" Marca: Nissan", " Modelo: GT-R", "Ano: 2024"],
  },
];

const Item = ({ image, text }) => (
  <View style={styles.item}>
    {image && <Image source={{ uri: image }} style={styles.image} />}
    {text && text.map((line, index) => <Text key={index} style={styles.text}>{line}</Text>)}
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Carros Esportivos!</Text>
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
    flex: 1,
    marginTop: StatusBar.currentHeight || 2,
  },
  headerTitle: {
    color: 'black',
    fontSize: 25,
    margin: 10,
  },
  item: {
    backgroundColor: '#D3D3D3',
    padding: 1,
    marginVertical: 8,
    marginHorizontal: 13,
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