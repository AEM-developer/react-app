import React from 'react';
import SiteLogo from '../SiteLogo/SiteLogo';

export default function Header() {
	return (
		<header>
			<SiteLogo />
			<img
				className='concord-img vlv-creative'
				src='https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/a5a7610f-d18d-4971-90c1-a4b3d85b3d7a/BY-ru-20210607-popsignuptwoweeks-perspective_alpha_website_small.jpg'
				alt=''
			/>

			<h1>FIND YOUR MOVIE</h1>
		</header>
	);
}
