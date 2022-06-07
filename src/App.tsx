import React, {ReactElement} from 'react';
import './app.scss';
import Header from './components/Header/Header';
import Support from './components/Supprot/Support';

const App = (): ReactElement => {
	return (
		<div className='app'>
			<Header />
			<Support />
		</div>
	);
};

export default App;
