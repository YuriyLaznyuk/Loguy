import React, {useState} from 'react';
import './support.scss';
import OnceModal from './ModalSupport/OnceModal';

const Support = () => {
	const [modal, setModal] = useState({
		once: false,
		ukr: false,
		usd: false,
		crypto: false,
	});

	return (
		<div className='support'>
			{modal.once && (
				<OnceModal
					method={() =>
						setModal({once: false, ukr: false, usd: false, crypto: false})
					}
				/>
			)}
			<div className='support__title'>Підтримати</div>
			<div
				className={
					modal.once ? 'support__item support__opacity' : 'support__item'
				}>
				<span className={modal.once ? 'support__item-border' : ''}></span>
				<span
					className='app__pointer'
					onClick={() =>
						setModal({once: true, ukr: false, usd: false, crypto: false})
					}>
					Разова допомога
				</span>
			</div>
			<div className='support__item'>
				<span className='app__pointer'>Українські реквізити</span>
			</div>
			<div className='support__item'>
				<span className='app__pointer'>Долари США (USD/840)</span>
			</div>
			<div className='support__item'>
				<span className='app__pointer'>Криптовалюта</span>
			</div>
		</div>
	);
};

export default Support;
