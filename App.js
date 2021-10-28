import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import Content from './components/Content'
import Footer from './components/Footer'

export default function App() {
  const menuButtonsTitles = ['Projects', 'Services', 'Clients', 'Settings']

  const menuButtons = menuButtonsTitles.map((el, index) => {
    return(
      <View key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', }}>
        <TouchableOpacity style={{padding: '4%'}} >
              <Text style={styles.buttonText}>{el}</Text>
        </TouchableOpacity>
        {index === 0 ?
            <Image style={{ position: 'absolute', top: '28px', width: '100%', height: '70%' }} source={require("./assets/menuBottom.svg")} />
          : null }
      </View>
    ) 
  })

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', width: '60%'}}>
            <Image style={{ width: '18px', height: '19px' }} source={require("./assets/Logo.svg")} />
            <Text style={{ color: '#e5f0f7', fontSize: '26px', marginLeft: '12%' }}>Projects</Text>
          </View>
          <Image style={{ width: '20px', height: '20px' }} source={require("./assets/close-circle-outline.svg")} />
       </View>
        <View style={styles.headerMenu}>
          {menuButtons}
        </View>
      </View>
      <Content />
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    backgroundColor: '#1e5478',
    alignItems: 'center',
    paddingTop: '6%',
  },
  headerLogo:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: '86%',
  },
  headerMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '86%',
    paddingTop: '9%',
    paddingBottom: '20px',
  },
  button: {
    backgroundColor: 'none',
  },
  buttonText: {
      color: '#b6dbf6',
      fontSize: 16,
      textAlign: 'center',
  }
});
