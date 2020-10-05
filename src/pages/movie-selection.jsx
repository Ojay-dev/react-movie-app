import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Loader from '../components/loader';

const fetchMovieData = async (movie_id) => {
	try {
		const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${movie_id}`);
		return response.data;
	} catch (e) {
		console.error(e);
	}
};

export default function ({ match }) {
	const movie_id = match.params.id;
	const [movieDetails, setMovieDetails] = useState();

	useEffect(() => {
		try {
			(async () => {
				const { data } = await fetchMovieData(movie_id);
				setMovieDetails((previousData) => ({ ...previousData, ...data.movie }));
			})();
		} catch (e) {
			console.error(e);
		}
	}, [movie_id]);

	if (!movieDetails) {
		return (
			<div className="App">
				<Loader />
			</div>
		);
	}
	return (
		<div className="movie-info">
			<div className="movie-info__image-cropper">
				<img src={movieDetails.large_cover_image} alt="movie poster" className="movie-info__image" />
			</div>
			<div className="movie-info__text-section">
				<h2 className="movie-info__title">{movieDetails.title}</h2>
				<span className="movie-info__year">{movieDetails.year}</span>
				<p className="movie-info__genre">({movieDetails.genres.slice(0, 3).join('/')})</p>

				<article className="movie-info__write-up">{movieDetails.description_full}</article>
			</div>
		</div>
	);
}
