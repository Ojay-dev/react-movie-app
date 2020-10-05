import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/movie';
import Loader from '../components/loader';

import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';
import image7 from '../images/image7.png';
import image8 from '../images/image8.png';

const movies = {
	1: { id: 1, image: image1, title: 'Blade runner 2040', year: '2020' },
	2: { id: 2, image: image2, title: 'Onward', year: '2020' },
	3: { id: 3, image: image3, title: 'Black Widow', year: '2020' },
	4: { id: 4, image: image4, title: 'Dora and The Lost...', year: '2020' },
	5: { id: 5, image: image5, title: 'Black Panther', year: '2020' },
	6: { id: 6, image: image6, title: 'Maleficent', year: '2020' },
	7: { id: 7, image: image7, title: 'Captain Marvel', year: '2020' },
	8: { id: 8, image: image8, title: 'Birds of prey', year: '2020' },
};

const mapIntoObject = (arr) => {
	return arr.reduce((acc, cur) => {
		acc[cur.id] = cur;
		return acc;
	}, {});
};

const fetchMovieData = async () => {
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
			const data = await fetchMovieData();
			// console.log(mapIntoObject(data));
			let timerID = setTimeout(() => {
				setMovieData(mapIntoObject(data));
			}, 1000);
    })();
  
	}, []);

	console.log(movieData);
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
					<Movie key={movie.id} image={movie.medium_cover_image} title={movie.title} year={movie.year} />
				))}
		</div>
	);
}

export default Home;
