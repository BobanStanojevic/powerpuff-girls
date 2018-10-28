import { RouterStore } from './RouterStore';
import { observable, action, computed } from 'mobx';
import { IEpisode } from '../models/ShowInfoModel';
import apiGetEpisodeService from '../services/apiGetEpisodeService';

export class EpisodeInfoStore {

	@observable
	public route: RouterStore;

	@observable
	// tslint:disable-next-line:variable-name
	public _hasError: boolean = false;

	@observable
	// tslint:disable-next-line:variable-name
	private _episode: IEpisode;

	constructor(route: RouterStore) {
		this.route = route;
	}

	// provides lazy load whenever the method is called
	@computed
	public get episode():IEpisode {
		if (!this._episode) {
			this._getEpisode()
		}

		return this._episode;
	}

	@action
	private _getEpisode():void {
		const episodePath = this.route.location.pathname.substr(1).split('/');

		apiGetEpisodeService(episodePath[0], episodePath[1], episodePath[2]).then((episode: IEpisode) => {
			this._setEpisode(episode);
		}).catch(() => {
			this._setHasError(true);
		});
	}

	@action
	private _setEpisode(episode):void {
		this._episode = episode;
	}
	
	@action
	private _setHasError(hasError: boolean):void {
		this._hasError = hasError;
	}

	@computed
	public get hasError():boolean {
		return this._hasError;
	}

}