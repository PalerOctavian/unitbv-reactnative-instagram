import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';

export default class NewsFeedNavBar extends Component {
    render() {
        return (
            <View style={style.navBar}>
                <View>
                    <Image source={require('./Img/photoCamera.png')} style={style.leftButton}/>
                </View>
                <View>
                    <Image source={require('./Img/octaGram.png')}/>
                </View>
                <View>
                    <Image source={require('./Img/send.png')} style={style.rightButton}/>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
  navBar: {
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.2)'
  },
  leftButton: {
      marginLeft: 10
  },
  rightButton: {
      marginRight: 10
  }
})
