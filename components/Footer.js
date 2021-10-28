import React from 'react';
import { StyleSheet, View, Text  } from 'react-native';

export default function Content() {
  return(
    <View style={styles.footer}>
      <Text style={styles.text}>Total: <Text style={{fontSize: "26px"}}>$17,039.61</Text></Text>
    </View> 
  )
}
const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    backgroundColor: '#1e5478',
    padding: '4%',
    paddingTop: '8%',
    paddingBottom: '8%'
  },
  text: {
    color: "white", 
    fontSize: "18px", 
    display: 'flex', 
    alignItems: 'center'
  }
})