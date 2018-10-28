import * as React from 'react';

export interface IHTMLFormatterProps {
	text: string;
}

class HTMLFormatter extends React.Component<IHTMLFormatterProps, any> {

	public render() {
		return (
			<div dangerouslySetInnerHTML={this.createMarkup()} />
		);
	}

	public createMarkup = () => { 
		return {__html: this.props.text}; 
	};
}

export default HTMLFormatter;