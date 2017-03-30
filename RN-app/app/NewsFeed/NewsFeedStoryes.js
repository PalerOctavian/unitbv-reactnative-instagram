import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import Carousel from 'react-native-snap-carousel'

export default class NewsFeedStoryes extends Component {
    render() {
        return (
            <View style={style.carouselView}>
                <Carousel ref={'carousel'} sliderWidth={30} itemWidth={30} snapOnAndroid={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} inactiveSlideScale={1} bounce={false} contentContainerStyle={style.carouselContainer}>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                </Carousel>
            </View>
        )
    }
}

class Story extends Component {
    render() {
        return (
            <View>
                <Image source={require('./Img/storyPhoto.jpg')} style={style.storyPhoto}/>
            </View>
        )
    }
}

const style = StyleSheet.create({
  carouselView: {
      flexDirection: 'row',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.02)',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0, 0, 0, 0.03)'
  },
  storyPhoto: {
      borderRadius: 50,
      borderWidth: 1,
      height: 55,
      width: 55,
      marginRight: 10,
      marginLeft: 10
  },
})
