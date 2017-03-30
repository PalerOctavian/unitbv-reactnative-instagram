import React, { Component } from 'react';
import { Text,
		View,
	 	StyleSheet, } from 'react-native';

export default class LoginList extends Component {
	render () {
		return (
			<View style = {styles.list}>
		 		<Text> English UK </Text>
		 	</View>
		)
	};
}

const styles = StyleSheet.create ({
	list: {
		alignItems: 'center',
		marginTop: 15,
	},
})
