import * as React from "react";
import { inject, observer } from "mobx-react";
import { STORE_EPISODE_INFO } from '../../constants/stores';
import { EpisodeInfoStore } from '../../stores/EpisodeInfoStore';
import Episode from '../../components/molecules/Episode/Episode';
import Loader from "src/components/atoms/Loader/Loader";
import ErrorMessage from 'src/components/molecules/ErrorMessage/ErrorMessage';

@inject(STORE_EPISODE_INFO)
@observer
class EpisodeInfoApp extends React.Component<any, any> {
	public episodeInfoStore: EpisodeInfoStore;

	constructor(props) {
		super(props);
		this.episodeInfoStore = this.props[STORE_EPISODE_INFO] as EpisodeInfoStore;
	}

	public render() {
		if (!this.episodeInfoStore.episode && !this.episodeInfoStore.hasError) {
			return <Loader />;
		}

		if (this.episodeInfoStore.hasError) {
			return <ErrorMessage />;
		}

		return (
			<div className="c-episodeInfoApp">
				<Episode episode={this.episodeInfoStore.episode} />
			</div>
		);
	}
}

export default EpisodeInfoApp;