import {action, observable, computed} from 'mobx';
import apiGetShowService from '../services/apiGetShowService';
import { TV_SHOW, EMBED } from '../constants/constants';
import { ShowInfoModel } from '../models/ShowInfoModel';


export class ShowInfoStore {

	@observable
	// tslint:disable-next-line:variable-name
	private _hasError: boolean = false;

	@observable
	// tslint:disable-next-line:variable-name
	private _show: ShowInfoModel;

	@computed
	get show():ShowInfoModel {
		if (!this._show) {
			this._getShow()
		}
		return this._show;
	}

	@action
	private _getShow():void {
		apiGetShowService(TV_SHOW, EMBED).then((show: ShowInfoModel) => {
			this._setShow(show);
		}).catch(() => {
			this._setHasError(true);
		});
	}

	@action
	private _setShow(show: ShowInfoModel):void {
		this._show = show;
	}

	@action
	private _setHasError(hasError: boolean):void {
		this._hasError = hasError;
	}

	@computed
	public get hasError():boolean {
		return this._hasError;
	}
};