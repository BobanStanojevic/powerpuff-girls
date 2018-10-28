import { observable, computed } from 'mobx';
import { groupBy } from '../utils/utils';

export interface IShowImage {
	medium: string,
	original: string
}
export interface IEpisode {
	id: number;
	airdate: string;
	airstamp: string;
	airtime: string;
	image: IShowImage;
	number: number;
	runtime: number;
	season: number;
	summary: string;
	url: string;
	name: string;
	_link: any;
}

export class ShowInfoModel {
	@observable
	public id: number;

	@observable
	public title: string;

	@observable
	public description: string;

	@observable
	public coverImg: IShowImage;

	@observable
	public episodes: IEpisode[];

	constructor(id: number, title: string, description: string, coverImg: IShowImage, episodes: IEpisode[]) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.coverImg = coverImg;
		this.episodes = episodes;
	}

	@computed
	public get showBySeason() {
		return groupBy(this.episodes, (episode) => episode.season);
	}
}
