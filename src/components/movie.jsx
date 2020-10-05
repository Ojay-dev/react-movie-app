import React from 'react';
import { Link } from 'react-router-dom';

const truncateTitle = (input) => input.length > 20 ? `${input.substring(0, 18)}...` : input;

export default function Movie(props) {
	const { id, image, title, year } = props;

	return (
		<div className="movie">
			<Link to={`/Movie-info/${id}`} className="movie__link">
				<div className="movie__image-cropper">
					<img src={image} alt="" className="movie__image" />
				</div>
				<div className="movie__text-section">
					<h2 className="movie__title">{truncateTitle(title)}</h2>
					<span className="movie__year">{year}</span>
				</div>
			</Link>
		</div>
	);
}
