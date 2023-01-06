import React from 'react';
import { SafeAreaView } from 'react-native';
import Mega from './components/geradorDeAposta';
import Styles from './styles/App';

const App = () => {
	return (
		<SafeAreaView style={Styles.view}>
			<Mega />
		</SafeAreaView>
	);
};

export default App;
