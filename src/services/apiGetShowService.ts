import apiCallSettings from '../utils/apiUtils';
import { ShowInfoModel } from '../models/ShowInfoModel';

export default async function apiGetShowService(show, info) {
	return apiCallSettings(
		(responseData) => {
			// DTO + functionality Model
			return new ShowInfoModel(responseData.id, responseData.name, responseData.summary, responseData.image, responseData._embedded.episodes);
		},
		{
			method: 'GET',
			path: 'http://api.tvmaze.com/singlesearch/shows',
			queryParameters: {
				q: show,
				embed: info
			}
		}
	);
}