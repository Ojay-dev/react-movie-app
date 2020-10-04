import React from 'react';
import { Link } from 'react-router-dom';

import './home.scss';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';
import image7 from '../images/image7.png';
import image8 from '../images/image8.png';

function Home() {
	return (
		<div className="App">
			<div className="movie">
				<Link to="#" className="movie__link">
					<img src={image1} alt="" className="movie__image" />
					<div className="movie__text-section">
						<h2 className="movie__title">Blade runner 2040</h2>
						<span className="movie__year">2020</span>
					</div>
				</Link>
			</div>

			<div className="movie">
				<Link to="#" className="movie__link">
					<img src={image2} alt="" className="movie__image" />
					<div className="movie__text-section">
						<h2 className="movie__title">Onward</h2>
						<span className="movie__year">2020</span>
					</div>
				</Link>
			</div>

			<div className="movie">
				<Link to="#" className="movie__link">
					<img src={image3} alt="" className="movie__image" />
					<div className="movie__text-section">
						<h2 className="movie__title">Black Widow</h2>
						<span className="movie__year">2020</span>
					</div>
				</Link>
			</div>

			<div className="movie">
				<Link to="#" className="movie__link">
					<img src={image4} alt="" className="movie__image" />
					<div className="movie__text-section">
						<h2 className="movie__title">Dora and The Lost...</h2>
						<span className="movie__year">2020</span>
					</div>
				</Link>
			</div>

			<div className="movie">
				<Link to="#" className="movie__link">
					<img src={image5} alt="" className="movie__image" />
					<div className="movie__text-section">
						<h2 className="movie__title">Black Panther</h2>
						<span className="movie__year">2020</span>
					</div>
				</Link>
			</div>

			<div className="movie">
				<Link to="#" className="movie__link">
					<img src={image6} alt="" className="movie__image" />
					<div className="movie__text-section">
						<h2 className="movie__title">Maleficent</h2>
						<span className="movie__year">2020</span>
					</div>
				</Link>
			</div>

			<div className="movie">
				<Link to="#" className="movie__link">
					<img src={image7} alt="" className="movie__image" />
					<div className="movie__text-section">
						<h2 className="movie__title">Captain Marvel</h2>
						<span className="movie__year">2020</span>
					</div>
				</Link>
			</div>

			<div className="movie">
				<Link to="#" className="movie__link">
					<img src={image8} alt="" className="movie__image" />
					<div className="movie__text-section">
						<h2 className="movie__title">Birds of prey</h2>
						<span className="movie__year">2020</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Home;
