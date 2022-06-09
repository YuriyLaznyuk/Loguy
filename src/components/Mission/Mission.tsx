import React from 'react';
import bg from '../../../public/img/13.png';
import './mission.scss';

const Mission = () => {
	return (
		<div className='mission'>
			<div className='mission__bg' style={{backgroundImage: `url(${bg})`}}>
				<div className='mission__bg-text'>
					<div className='mission__bg-text-title'>Наша місія</div>
					<div className='mission__bg-text-item'>
						<div className='mission__bg-text-item-img'></div>
						<div>
							<p>Забезпечити гуманітарною допомогою</p>
							<p>українців постраждалих під час війни</p>
						</div>
					</div>
					<div className='mission__bg-text-item'>
						<div className='mission__bg-text-item-img'></div>
						<p>Допомога та підтримка ТРО, армії та ЗСУ</p>
					</div>
					<div className='mission__bg-text-item'>
						<div className='mission__bg-text-item-img'></div>
						<div>
							<p>Відбудова зруйнованих, російським</p>
							<p>вторгненням, міст України</p>
						</div>
					</div>
					<div className='mission__bg-text-button'>
						<button className='mission__bg-text-button-btn'>Підтримати</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mission;
