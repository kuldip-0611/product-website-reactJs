import React from 'react';
import { NavLink } from 'reactstrap';

const PageNotFound= () =>(
	
	<div>
		<h1 className='text-center mt-5'>404 Error</h1>
		<h1 className='text-center mt-5'>Page Not Found</h1>
		<NavLink to='/products'>
			<button className='bg-secondary' id='home'>Home</button>
		</NavLink>
	</div>
)

export default PageNotFound;