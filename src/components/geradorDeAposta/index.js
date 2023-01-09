import React, { useState, useEffect } from 'react';
import { Text, Button, TextInput, View } from 'react-native';
import Styles from '../../styles/geradorDeAposta';

const geradorDeAposta = ({ gerarNumeros, clearView }) => {
	const [numbers, setNumbers] = useState(null);
	const [warning, setWarning] = useState(null);
	const [clear, setClear] = useState(false);

	useEffect(() => {
		if (
			numbers === null ||
			(6 <= numbers && numbers <= 15) ||
			numbers === ''
		) {
			setWarning(null);
			if (numbers === null || numbers === '') {
				return clearView(true);
			}
		} else if (numbers < 6) {
			setWarning('Deve conter no minimo 6 números');
			clearView(true);
		} else if (15 < numbers) {
			setWarning('Deve conter no máximo 15 números');
			clearView(true);
		}
	}, [numbers]);

	const gerarAposta = () => {
		if (6 <= numbers && numbers <= 15) {
			clearView(false);
			gerarNumeros(numbers);
		}
	};

	return (
		<View style={Styles.container}>
			<Text style={Styles.title}>Gerador de Aposta</Text>
			<TextInput
				placeholder="Quantidade de números a apostar"
				onChangeText={setNumbers}
				value={numbers}
				keyboardType="numeric"
				style={Styles.input}
			/>
			<Text style={Styles.warning}>{warning}</Text>
			<Button
				title="Gerar aposta"
				color="#000000"
				onPress={() => {
					gerarAposta();
				}}
			/>
		</View>
	);
};

export default geradorDeAposta;
