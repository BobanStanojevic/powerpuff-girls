import * as React from 'react';

export interface IImageProps {
	src: string;
	alt: string
}

class Image extends React.Component<IImageProps, any> {

	public render() {
		const { src, alt } = this.props;
		return <img src={src} alt={alt}  className="a-image"/>
	}

}

export default Image;