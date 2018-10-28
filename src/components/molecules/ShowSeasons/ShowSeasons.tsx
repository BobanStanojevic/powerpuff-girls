import * as React from 'react';

export interface IShowSeasons {
	showBySeason: any;
	showId: number;
}

class ShowSeasons extends React.Component<IShowSeasons, any> {

	public render() {
		const { showId, showBySeason } = this.props;
		return (
			<div className="m-showSeasons row">
				{Object.keys(this.props.showBySeason).map((season, index) => {
					return (
						<div key={index} className="m-showSeasons__season col-md-4">
							<h3 >Season {season}</h3>
							{showBySeason[season].map((episode, i) => <a key={i} className="m-showSeasons__link" href={`${showId}/${season}/${episode.number}`}>{episode.name}</a> )}
						</div>
					);

				})}
			</div>
		);
	}
}

export default ShowSeasons;