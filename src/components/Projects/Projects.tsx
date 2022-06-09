import React from 'react';
import pr1 from '../../../public/img/pr1.png';
import pr2 from '../../../public/img/pr2.png';
import pr3 from '../../../public/img/pr3.png';
import eagle from '../../../public/img/eagle.png';
import './projects.scss';

const Projects = () => {
	return (
		<div className='projects'>
			<div className='projects__title'>Наші проекти</div>
			<div className='projects__block'>
				<div className='projects__block-item'>
					<img className='projects__block-item-img' src={pr1} alt='img' />
					<div className='projects__block-item-text'>
						<p>Гуманітарна </p>
						<p>допомога</p>
					</div>
				</div>
				<div className='projects__block-item'>
					<img className='projects__block-item-img' src={pr2} alt='img' />
					<div className='projects__block-item-text'>
						<p>Допомога</p>
						<p>армії та ЗСУ</p>
					</div>
				</div>
				<div className='projects__block-item'>
					<img className='projects__block-item-img' src={pr3} alt='img' />
					<div className='projects__block-item-text'>
						<p>Відбудова</p>
						<p>зруйнованих міст</p>
					</div>
				</div>
			</div>
			<div className='projects__eagle'>
				<img className='projects__eagle-img' src={eagle} alt='img' />
			</div>
			<div className='projects__bottom'>
				<div className='projects__bottom-text'>ЗБЕРЕЖИ СВІТ.</div>
				<div className='projects__bottom-text'>ПІДТРИМАЙ УКРАЇНУ</div>
				<div className='projects__bottom-button'>
					<button className='projects__bottom-button-btn'>Підтримати</button>
				</div>
			</div>
		</div>
	);
};

export default Projects;
