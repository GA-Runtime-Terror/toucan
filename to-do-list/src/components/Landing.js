import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import LandingHeader from './LandingHeader';
import List from './List';

const Landing = () => {
	const [randomQuote, setRandomQuote] = useState([]);

	const api_url =
		'https://zenquotes.io/api/random/a8d087f3df39b78ba4412d5c810d601af7cc7969';

	async function getapi(url) {
		const response = await fetch(url);
		let data = await response.json();
		setRandomQuote(data);
	}

	useEffect(() => {
		getapi(api_url);
	}, []);

	const quoteHTML = randomQuote.map((quote, index) => {
		return (
			<p key={index}>
				"{quote.q}" - {quote.a}
			</p>
		);
	});

	return (
		<div className='App'>
			<LandingHeader />

			<div className='body-div'>
				<div id='quote-div'>{quoteHTML}</div>
				<h2 className='toucan-doit'>Toucan do it! </h2>
				<List />
			</div>

			<Footer />
		</div>
	);
};

export default Landing;
