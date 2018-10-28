import * as React from 'react';

const Loader = () => (
	<div className="a-loader">
		<div className="a-loader__container">
			<div className="a-loader__corner--top"/>
			<div className="a-loader__corner--bottom"/>
		</div>
		<div className="a-loader__square"/>
	</div>
);

export default Loader;
