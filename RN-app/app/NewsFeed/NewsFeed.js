import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import NewsFeedPost from './NewsFeedPost.js';
import NewsFeedStoryes from './NewsFeedStoryes.js'
import NewsFeedNavBar from './NewsFeedNavBar.js'
import NewsFeedSuggestions from './NewsFeedSuggestions.js'

export default class NewsFeed extends Component {

    render() {
        return (
            <View style={style.container}>
                <View style={style.alignScroll}>
                    <NewsFeedNavBar/>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <NewsFeedStoryes/>
                        <NewsFeedPost/>
                        <NewsFeedPost/>
                        <NewsFeedSuggestions/>
                        <NewsFeedPost/>
                        <NewsFeedPost/>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    alignScroll: {
        flex: 0.9,
        flexDirection: 'column'
    }
})
