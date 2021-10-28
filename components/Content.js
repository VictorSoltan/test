import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Content() {

  const prices = [
    {room: 'Living Room' },
    {room: 'Dining Room' }
  ]

  const roomsPrices = prices.map((el, index) => {
    return(
      <View key={index} style={{width: '86%', marginTop: '12%', marginRight: '1%'}}>
        <View style={styles.div}>
          <View>
            <Text style={styles.title}>{el.room}</Text>
          </View>
          <View>
              <Image style={{ width: '22px', height: '22px' }} source={require("../assets/circle-edit-outline.svg")} />
          </View>
        </View>
        <Text style={styles.product}>Product</Text>
        <Text style={styles.title}>Hardwood floring</Text>
        <Text style={styles.product}>Calculation</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>2,342.2 sq.ft.<Text style={{fontSize: "17px", fontWeight: '100'}}> x </Text>$3.25</Text>
          <Text style={styles.title}>$5679.87</Text>
        </View>        
      </View>
    ) 
  })

  return(
    <View style={styles.container}>
      <View style={styles.icons}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '56%'}}>
            <Image style={{ width: '23px', height: '23px' }} source={require("../assets/qrcode-scan.svg")} />
            <Image style={{ width: '24px', height: '22px' }} source={require("../assets/monitor-share.svg")} />
            <Image style={{ width: '18px', height: '22px' }} source={require("../assets/file-document-outline.svg")} />
            <Image style={{ width: '24px', height: '24px' }} source={require("../assets/printer.svg")} />
        </View>
        <View style={{ marginRight: '1%'}}>
            <Image style={{ width: '24px', height: '24px' }} source={require("../assets/circle-edit-outline.svg")} />
        </View>
      </View>
      <View style={styles.project}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{color: "#235172", fontSize: "20px", fontWeight: '600'}}>Name of project</Text>
            <Text style={{color: "#235172", fontSize: "18px", marginTop: '6%'}}>Toronto, ON</Text>
          </View>
          <View style={{marginTop: '1%'}}>
            <Text style={{color: "#235172", fontSize: "11px"}}>In progress</Text>
          </View>
        </View>
          <Image style={{ width: '100%', height: '50vw', marginTop: '6%'}} source={require("../assets/shelf.png")} />
      </View>
      <View style={{width: '90%'}}>
        <View style={styles.div}>
          <View>
            <Text style={styles.title}>Bedroom</Text>
          </View>
          <View>
              <Image style={{ width: '22px', height: '22px' }} source={require("../assets/circle-edit-outline.svg")} />
          </View>
        </View>
        <Text style={{color: "#235172", fontSize: "13px", marginTop: '2%'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Text>
      </View>
      <View style={{width: '90%'}}>
        <Text style={styles.product}>Product</Text>
        <Text style={styles.title}>Hardwood flooring</Text>
        <Text style={styles.product}>Calculation</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>2,342.2 sq.ft.<Text> x </Text>$3.25</Text>
          <Text style={styles.title}>$5679.87</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '8%', marginRight: '2%' }}>
          <Image style={styles.productImg} source={require("../assets/wall.png")} />
          <Image style={styles.productImg} source={require("../assets/wall.png")} />
          <Image style={styles.productImg} source={require("../assets/wall.png")} />
        </View>
      </View>
      {roomsPrices}
    </View>
  )    
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '6%',
    paddingBottom: '16%',
  },    
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '96%',
    marginTop: '2%'
  },
  project: {
    display: 'flex',
    width: '100%',
    marginTop: '15%'
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '12%'
  },
  product: {
    color: "#EAEEEF", 
    fontSize: "18px", 
    fontWeight: '600', 
    marginTop: '4%'
  },
  title: {
    color: "#235172", 
    fontSize: "18px", 
    fontWeight: '600'
  },
  productImg: {
    width: '28%', 
    height: '22vw', 
    borderRadius: '16px' 
  }
})