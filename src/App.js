import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import NumerosAApostar from './components/geradorDeAposta';
import NumerosGerados from './components/geradorDeNumeros';
import Styles from './styles/App';

const App = () => {
	const [numbers, setNumbers] = useState(null);

	const gerarNumeros = (numbers) => {
		setNumbers(numbers);
	};

	return (
		<SafeAreaView style={Styles.view}>
			<NumerosAApostar gerarNumeros={gerarNumeros} />
			<NumerosGerados numbers={numbers} />
		</SafeAreaView>
	);
};

export default App;
