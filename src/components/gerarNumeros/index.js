import React, { useState, useEffect } from 'react';
import { Text, FlatList, SafeAreaView, View } from 'react-native';
import Styles from '../../styles/gerarNumeros';
import Sortnumbers from '../numerosGerados';

const geradorDeNumeros = ({ numbers, clearView }) => {
	const [view, setView] = useState(false);

	useEffect(() => {
		if (clearView) {
			setView(clearView);
		} else {
			setView(false);
		}
	}, [clearView]);

	const sortnumber = () => {
		return parseInt(Math.random() * (60 - 1) + 1);
	};

	const hasDuplicates = (array) => {
		for (let index = 0; index < array.length; index++) {
			for (let i = 0; i < array.length; i++) {
				if (array[index] === array[i] && index !== i) {
					array[i] = parseInt(sortnumber());
				}
			}
		}

		array.sort((a, b) => {
			return a - b;
		});

		return array;
	};

	const createNumbers = () => {
		let changeNumber = parseInt(numbers);
		let numbersArray = [];
		if (typeof changeNumber === 'number') {
			for (let index = 0; index < numbers; index++) {
				numbersArray.push(sortnumber());
			}
		}

		let verifyHasDuplicates = hasDuplicates(numbersArray);

		return verifyHasDuplicates;
	};

	return (
		<>
			{view ? (
				<View style={Styles.numberList}></View>
			) : (
				<FlatList
					data={createNumbers()}
					renderItem={Sortnumbers}
					keyExtractor={(item) => item}
					horizontal={false}
					numColumns={5}
					style={Styles.numberList}
				/>
			)}
		</>
	);
};

export default geradorDeNumeros;
