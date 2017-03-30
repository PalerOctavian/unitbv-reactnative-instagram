import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

export default class NewsFeedPost extends Component {
    render() {
        return (
            <View>
                <User/>
                <Photo/>
                <PhotoBar/>
                <Comments/>
            </View>
        )
    }
}

class User extends Component {
    render() {
        return (
            <View style={style.user}>
                <View style={style.userPhoto}>
                    <Image source={require('./Img/userPhoto.jpg')} style={{
                        borderRadius: 50
                    }}/>
                    <Text style={{
                        margin: 10
                    }}>Vladimir Putin</Text>
                </View>
                <View>
                    <TouchableOpacity style={style.dots}>
                        <Image source={require('./Img/verticalDots.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

class Photo extends Component {
    render() {
        return (
            <View>
                <Image style={{
                    height: 400,
                    width: 400,
                }} source={require('./Img/postPhoto.jpg')}/>
            </View>
        )
    }
}

class PhotoBar extends Component {
    render() {
        return (
            <View style={style.photoBar}>
                <View style={style.first}>
                    <TouchableOpacity>
                        <Image source={require('./Img/like.png')} style={style.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('./Img/comment.png')} style={style.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('./Img/share.png')} style={style.icon}/>
                    </TouchableOpacity>
                </View>
                <View style={style.second}>
                    <TouchableOpacity>
                        <Image source={require('./Img/bookmark.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

class Comments extends Component {
    render() {
        return (
            <View style={style.commSection}>
                <View style={style.like}>
                    <Image source={require('./Img/likeCom.png')} style={{marginRight: 5}}/>
                    <Text style={style.boldText}>1312 likes</Text>
                </View>
                <View style={style.comment}>
                  <Text style={style.boldText}>Vladimir Putin</Text>
                  <Text> #bombingWithFriends</Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    userPhoto: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    photoBar: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        borderColor: 'rgba(0, 0, 0, 0.2)'
    },
    first: {
        flexDirection: 'row',
        marginBottom: 10
    },
    icon: {
        marginRight: 10
    },
    commSection: {
      marginBottom: 25,
      marginLeft: 10,
    },
    boldText: {
      fontWeight: 'bold',
      color: 'black',
    },
    like: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    comment: {
      flexDirection: 'row',
    }
})
