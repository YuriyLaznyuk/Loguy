import React, {ReactElement} from 'react';
import './app.scss';
import Header from './components/Header/Header';
import Support from './components/Supprot/Support';
import Founder from './components/Founder/Founder';

const App = (): ReactElement => {
	return (
		<div className='app'>
			<Header />
			<Support />
			<Founder />
		</div>
	);
};

export default App;
