import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 30,
		justifyContent: 'flex-end',
		alignItems: 'stretch',
	},
	title: {
		fontSize: 32,
		textAlign: 'center',
		fontWeight: '200',
	},
	input: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#000000',
		margin: 12,
		textAlign: 'center',
	},
	warning: {
		color: `#b22222`,
		padding: 10,
	},
});
