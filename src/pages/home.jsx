import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/movie';
import Loader from '../components/loader';

const mapIntoObject = (arr) => {
	return arr.reduce((acc, cur) => {
		acc[cur.id] = cur;
		return acc;
	}, {});
};

const fetchMoviesData = async () => {
	try {
		const { data: response } = await axios.get('https://yts.mx/api/v2/list_movies.json?quality=3D');
		return response.data.movies;
	} catch (e) {
		console.error(e);
	}
};

function Home() {
	const [movieData, setMovieData] = useState();

	useEffect(() => {
		(async () => {
			const data = await fetchMoviesData();
			setTimeout(() => {
				setMovieData((previousData) => ({ ...previousData, ...mapIntoObject(data) }));
			}, 1000);
		})();
	}, []);

	if (!movieData) {
		return (
			<div className="App">
				<Loader />
			</div>
		);
	}

	return (
		<div className="App">
			{Object.values(movieData)
				.sort((x, y) => y.year - x.year)
				.map((movie) => (
					<Movie
						key={movie.id}
						id={movie.id}
						image={movie.large_cover_image}
						title={movie.title}
						year={movie.year}
					/>
				))}
		</div>
	);
}

export default Home;
