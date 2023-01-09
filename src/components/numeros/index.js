import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../../styles/numeros';

const renderItem = ({ item }) => {
	return (
		<View style={Styles.numberBox} key={item}>
			<Text style={Styles.number}>{item} </Text>
		</View>
	);
};
export default renderItem;
