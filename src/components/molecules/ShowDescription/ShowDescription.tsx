import * as React from 'react';
import { ShowInfoModel } from '../../../models/ShowInfoModel';
import HTMLFormatter from '../../atoms/HTMLFormatter/HTMLFormatter';
import Image from '../../atoms/Image/Image';

export interface IShowDescriptionProps {
	show: ShowInfoModel
}

class ShowDescription extends React.Component<IShowDescriptionProps, any> {

	public render() {
		const { title, coverImg, description } = this.props.show;
		return (
			<div className="m-showDescription">
				<div className="row">
					<div className="col-md-4">
						<div className="m-showDescription__img">
							{coverImg && <Image src={coverImg.medium} alt={title} />}
						</div>
					</div>
					<div className="col-md-8">
						<div className="m-showDescription__info">
							<h1>{title}</h1>
							<HTMLFormatter text={description} />
						</div>
					</div>	
					
				</div>

			</div>
		);
	}
}

export default ShowDescription;