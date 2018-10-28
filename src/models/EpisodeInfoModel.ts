import { observable } from 'mobx';
import { IShowImage } from '../models/ShowInfoModel';

export class EpisodeInfoModel {

	@observable
	public title: string;

	@observable
	public summary: string;

	@observable
	public image: IShowImage;

	constructor(title: string, summary: string, image: IShowImage) {
		this.title = title;
		this.summary = summary;
		this.image = image;
	}
}
