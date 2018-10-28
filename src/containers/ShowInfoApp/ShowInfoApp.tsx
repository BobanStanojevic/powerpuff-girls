import * as React from 'react';
import { inject, observer } from "mobx-react";
import { STORE_SHOW_INFO } from '../../constants/stores';
import { ShowInfoStore } from '../../stores/ShowInfoStore';
import ShowDescription from '../../components/molecules/ShowDescription/ShowDescription';
import ShowSeasons from '../../components/molecules/ShowSeasons/ShowSeasons';
import Loader from 'src/components/atoms/Loader/Loader';
import ErrorMessage from 'src/components/molecules/ErrorMessage/ErrorMessage';

@inject(STORE_SHOW_INFO)
@observer
class ShowInfoApp extends React.Component {
	private showInfoStore: ShowInfoStore;

	constructor(props) {
		super(props);
		this.showInfoStore = this.props[STORE_SHOW_INFO] as ShowInfoStore;
	}

	public render() {

		if (!this.showInfoStore.show && !this.showInfoStore.hasError) {
			return <Loader />;
		}

		if (this.showInfoStore.hasError) {
			return <ErrorMessage />;
		}

		const { show } = this.showInfoStore;
		const showBySeason = show.showBySeason;

		return (

			<div className="c-showInfoApp">
				<ShowDescription show={show} />
				<ShowSeasons showId={show.id} showBySeason={showBySeason} />
			</div>

		);
	}
}

export default ShowInfoApp;
