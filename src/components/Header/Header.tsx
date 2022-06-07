import React from 'react';
import './header.scss';
import bg from '../../../public/img/header.png';
import logo from '../../../public/img/logo.png';

const Header = () => {
	return (
		<div className='header' style={{backgroundImage: `url(${bg})`}}>
			<div className='header__top'>
				<div className='header__top-logo'>
					<img src={logo} alt='logo' />
				</div>
				<div className='header__top-menu'>
					<div className='header__top-menu-item'>Про ФОНД</div>
					<div className='header__top-menu-item'>Проекти</div>
					<div className='header__top-menu-item'>Реквізити</div>
					<div className='header__top-menu-item'>Галерея</div>
					<div className='header__top-menu-item'>UA</div>
				</div>
			</div>
			<div className='header__title'>
				<div className='header__title-item'>ЗБЕРЕЖИ СВІТ.</div>
				<div className='header__title-item'>ПІДТРИМАЙ УКРАЇНУ</div>
			</div>
			<div className='header__name'>Благодійний Фонд Логай Рустама</div>
			<div className='header__btn'>
				<button className='header__btn-button'>Підтримати</button>
			</div>
			<div className='header__partner'>
				<div className='header__partner-item'>Наші партнери:</div>
				{/*<div className='header__partner-item'></div>*/}
				{/*<div className='header__partner-item'></div>*/}
			</div>
		</div>
	);
};

export default Header;
