/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image} from 'react-native';
import Login from './app/LoginPage/Login.js';
import NewsFeed from './app/NewsFeed/NewsFeed.js';
import Search from './app/Search/Search.js';
import AddPhoto from './app/AddPhoto/AddPhoto.js';
import Notifications from './app/Notifications/Notifications.js';
import Profile from './app/Profile/Profile.js';
import {Scene, Router} from 'react-native-router-flux';

const HomeIcon = () => {
  return(
    <Image style={style.icon} source={require('./app/NewsFeed/Img/home24.png')}/>
  )
}

const SearchIcon = ({title}) => {
  return(
    <Image style={style.icon} source={require('./app/NewsFeed/Img/search24.png')}/>
  )
}

const AddIcon = ({title}) => {
  return(
    <Image style={style.icon} source={require('./app/NewsFeed/Img/add24.png')}/>
  )
}

const NotificationsIcon = ({title}) => {
  return(
    <Image style={style.icon} source={require('./app/NewsFeed/Img/notifications24.png')}/>
  )
}

const ProfileIcon = ({title}) => {
  return(
    <Image style={style.icon} source={require('./app/NewsFeed/Img/profile24.png')}/>
  )
}

export default class InstagramProject extends Component {
    render() {
        return (
            <Router>
                <Scene key="login" component={Login} initial={true} hideNavBar={true}/>
                <Scene key="newsFeed"  tabs={true} tabBarStyle={style.tabBar} >
                    <Scene key="home" icon={HomeIcon} component={NewsFeed} hideNavBar={true}/>
                    <Scene key="search" icon={SearchIcon} component={Search} hideNavBar={true}/>
                    <Scene key="add" icon={AddIcon} component={AddPhoto} hideNavBar={true}/>
                    <Scene key="notifications" icon={NotificationsIcon} component={Notifications} hideNavBar={true}/>
                    <Scene key="profile" icon={ProfileIcon} component={Profile} hideNavBar={true}/>
                </Scene>
            </Router>
        );
    };
}

const style = StyleSheet.create({
    tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth:1,
    height:50,
    borderTopColor: 'rgba(0,0,0,0.15)',
  },
  icon: {
    opacity: 0.4,
  },
})

AppRegistry.registerComponent('InstagramProject', () => InstagramProject);
