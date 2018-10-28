import * as React from "react";
import Header from '../../components/molecules/Header/Header';
import Footer from '../../components/molecules/Footer/Footer';

class Root extends React.Component<any, any> {

	public render() {
		return (
			<div>
				<Header/>
				<div className="c-root">
					{this.props.children}
				</div>
				
				<Footer/>
			</div>
		);
	}
}

export default Root;
