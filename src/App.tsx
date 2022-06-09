import React, {ReactElement} from 'react';
import './app.scss';
import Header from './components/Header/Header';
import Support from './components/Supprot/Support';
import Founder from './components/Founder/Founder';
import Mission from './components/Mission/Mission';
import Projects from './components/Projects/Projects';

const App = (): ReactElement => {
	return (
		<div className='app'>
			<Header />
			<Support />
			<Founder />
			<Mission />
			<Projects />
		</div>
	);
};

export default App;
