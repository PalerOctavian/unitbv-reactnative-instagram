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

export default class NewsFeedSuggestions extends Component {
    render() {
        return (
            <View style={style.carouselView}>
                <Carousel ref={'carousel'} sliderWidth={30} itemWidth={30} snapOnAndroid={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} inactiveSlideScale={1} bounce={false} contentContainerStyle={style.carouselContainer}>
                    <Suggestion/>
                    <Suggestion/>
                    <Suggestion/>
                    <Suggestion/>
                    <Suggestion/>
                </Carousel>
            </View>
        )
    }
}

class Suggestion extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.photoContainer}>
                    <View>
                        <Image source={require('./Img/storyPhoto.jpg')} style={style.suggestionPhoto}/>
                    </View>
                    <View>
                        <Image source={require('./Img/close.png')}/>
                    </View>
                </View>
                <View style={style.name}>
                    <Text style={{
                        fontWeight: 'bold',
                        color: 'black'
                    }}>Marin George</Text>
                    <Text>Followed by</Text>
                    <Text>Alalala</Text>
                </View>
                <View style={style.follow}>
                    <TouchableOpacity style={style.loginWithFacebookTxtView}>
                        <Text style = {{color:'white', fontWeight:'bold'}}>Follow</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: 200,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.03)',
        marginLeft: 10
    },
    photoContainer: {
        flexDirection: 'row',
        marginRight: 10
    },
    suggestionPhoto: {
        borderRadius: 50,
        borderWidth: 1,
        height: 85,
        width: 85,
        marginRight: 10,
        marginLeft: 10
    },
    carouselView: {
        flexDirection: 'row',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.02)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.03)'
    },
    name: {
        flexDirection: 'column'
    },
    loginWithFacebookTxtView: {
        backgroundColor: '#3897f0',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.85,
        borderRadius: 2
    },
    follow: {
      width: 115,
      height: 30,
    }
})
