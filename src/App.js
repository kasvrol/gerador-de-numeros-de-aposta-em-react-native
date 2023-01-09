import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import NumerosAApostar from './components/gerarAposta';
import NumerosGerados from './components/geradorDeNumeros';
import Styles from './styles/App';

const App = () => {
	const [numbers, setNumbers] = useState(null);
	const [view, setView] = useState(false);

	const gerarNumeros = (numbers) => {
		setNumbers(numbers);
	};

	const clearView = (boolean) => {
		setView(boolean);
	};

	return (
		<SafeAreaView style={Styles.view}>
			<NumerosAApostar
				gerarNumeros={gerarNumeros}
				clearView={clearView}
			/>
			<NumerosGerados numbers={numbers} clearView={view} />
		</SafeAreaView>
	);
};

export default App;
