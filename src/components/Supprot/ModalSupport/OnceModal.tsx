import React from 'react';
import './onceModal.scss';
type Props = {
	method: () => void;
};
const OnceModal = ({method}: Props) => {
	return (
		<div className='onceModal'>
			<span className='onceModal__close' onClick={() => method()}>
				&#215;
			</span>
			<div className='onceModal__title'>Разова допомога</div>
			<div className='onceModal__input'>
				<div className='onceModal__input-item'>
					<div className='onceModal__input-item-text'>
						Your email<span className='app__red'>*</span>
					</div>
					<input
						className='onceModal__input-item-inp'
						type='text'
						placeholder='Please enter your email'
					/>
					<div className='onceModal__input-item-text'>
						First and last name<span className='app__red'>*</span>
					</div>
					<input
						className='onceModal__input-item-inp'
						type='text'
						placeholder='Enter your email'
					/>
					<div className='onceModal__input-item-text'>
						First and last name<span className='app__red'>*</span>
					</div>
					<input
						className='onceModal__input-item-inp'
						type='text'
						placeholder='Enter your email'
					/>
					<div className='onceModal__input-item-text'>
						First and last name<span className='app__red'>*</span>
					</div>
					<input
						className='onceModal__input-item-inp'
						type='text'
						placeholder='Enter your email'
					/>
					<div className='onceModal__input-item-text'>
						Card<span className='app__red'>*</span>
					</div>
					<input
						className='onceModal__input-item-inp'
						type='text'
						placeholder='Enter card number'
					/>
				</div>
				<div className='onceModal__input-item'>
					<div className='onceModal__input-item-text'>
						Your email<span className='app__red'>*</span>
					</div>
					<input
						className='onceModal__input-item-inp'
						type='text'
						placeholder='Please enter your email'
					/>
					<div className='onceModal__input-item-text'>
						First and last name<span className='app__red'>*</span>
					</div>
					<input
						className='onceModal__input-item-inp'
						type='text'
						placeholder='Enter your email'
					/>
					<div className='onceModal__input-item-text'>
						First and last name<span className='app__red'>*</span>
					</div>
					<input
						className='onceModal__input-item-inp'
						type='text'
						placeholder='Enter your email'
					/>
					<div className='onceModal__input-item-text'>
						First and last name<span className='app__red'>*</span>
					</div>
					<input
						className='onceModal__input-item-inp'
						type='text'
						placeholder='Enter your email'
					/>
					<div className='onceModal__input-item-text'>
						Card<span className='app__red'>*</span>
					</div>
					<input
						className='onceModal__input-item-inp'
						type='text'
						placeholder='Enter card number'
					/>
				</div>
			</div>
			<div className='onceModal__button'>
				<button className='onceModal__button-btn'>Підтримати</button>
			</div>
		</div>
	);
};

export default OnceModal;
