import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import Styles from '../../styles/geradorDeNumeros';

const geradorDeNumeros = ({ numbers }) => {
	const createNumbers = () => {
		let changeNumber = parseInt(numbers);
		let numbersArray = [];
		if (typeof changeNumber === 'number') {
			for (let index = 0; index < numbers; index++) {
				let createNumbers = parseInt(Math.random() * (60 - 1) + 1);
				numbersArray.push(createNumbers);
			}
		}

		return numbersArray.join(',');
	};

	return <Text>{createNumbers()}</Text>;
};

export default geradorDeNumeros;
