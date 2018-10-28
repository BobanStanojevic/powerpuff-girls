import * as React from 'react';
import { IEpisode}  from '../../../models/ShowInfoModel';
import HTMLFormatter from '../../atoms/HTMLFormatter/HTMLFormatter';
import Image from '../../atoms/Image/Image';

export interface IEpisodeProps {
	episode: IEpisode
}

class Episode extends React.Component<IEpisodeProps, any> {

	public render() {
		const { name, summary, image } = this.props.episode;
		return (
			<div className="m-episode">
				<div className="row">
					<div className="col-md-4">
						<div className="m-episode__img">
							{image && <Image src={image.original} alt={name}/> }
						</div>
					</div>
					<div className="col-md-8">
						<div className="m-episode__info">
							<h2>{name}</h2>
							<HTMLFormatter text={summary} />
						</div>	
					</div>
				
				
				</div>
					
				
			</div>
		);
	}
}

export default Episode;