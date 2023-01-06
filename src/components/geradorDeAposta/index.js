import React, { useState, useEffect } from 'react';
import { Text, Button, TextInput } from 'react-native';
import Styles from '../../styles/geradorDeAposta';

const geradorDeAposta = ({ gerarNumeros }) => {
	const [numbers, setNumbers] = useState(null);
	const [warning, setWarning] = useState(null);

	useEffect(() => {
		if (numbers === null || 6 <= numbers || numbers === '') {
			setWarning(null);
			if (6 <= numbers) {
				gerarNumeros(numbers);
			}
		} else if (numbers < 6) {
			setWarning('Deve conter no minimo 6 números');
		}
	}, [numbers]);

	return (
		<>
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
				onPress={() => {
					console.warn(numbers, warning);
				}}
				style={Styles.button}
			/>
		</>
	);
};

export default geradorDeAposta;
