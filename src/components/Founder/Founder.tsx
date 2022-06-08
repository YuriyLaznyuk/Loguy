import React from 'react';
import loguy from '../../../public/img/image 3.png';
import logo from '../../../public/img/logo_1.png';
import lp from '../../../public/img/_.png';
import gloru from '../../../public/img/glory.png';
import './founder.scss';

const Founder = () => {
	return (
		<div className='founder'>
			<div className='founder__left'>
				<img src={loguy} alt='loguy' />
				<img className='founder__left-logo' src={logo} alt='logo' />
			</div>
			<div className='founder__right'>
				<div className='founder__right-title'>Логай Рустам</div>
				<div className='founder__right-text'>
					Засновник благодійної організації Жити так, щоб кожного дня змінювати
					світ на краще!
				</div>
				<div className='founder__right-text'>
					<img className='founder__right-text-img' src={lp} alt='' />
					<strong className='founder__right-text-strong'>
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						"Війна до перемоги і крапка."
					</strong>
				</div>
				<div className='founder__right-text'>
					- життєве кредо Рустама Руслановича, слова Карла Фон Клаузевіца, які
					викарбовані на стіні його робочого офісу, стали, як ніколи,
					абсолютними і буквальними. В нашу країну прийшла біда, війна,
					вторгнення росії на наші землі. Логай Рустам будучи рятувальником за
					фахом, маючи багаторічний досвід роботи у ООН, є власником
					девелоперської компанії, багато років будував міста та робив неабиякий
					внесок у розвиток міст, взяв у руки зброю та вступив у лави ЗСУ для
					оборони нашої землі від ворога.
				</div>
				<div className='founder__right-text'>
					Створив благодійний фонд з метою глобалізації допомоги та підтримки
					держави. Завдяки Логай Рустаму люди отримують гуманітарну допомогу у
					містах, які не мають забезпечення найнеобхіднішим, армія отримує
					необхідну амуніцію та провізію, а як закінчиться служба та війна,
					відбудує разом зі своїми побратимами усі міста України.
				</div>
				<div className='founder__right-text'>
					<img src={gloru} alt='glory' />
				</div>
			</div>
		</div>
	);
};

export default Founder;
