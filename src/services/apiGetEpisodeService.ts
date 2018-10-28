import apiCallSettings from '../utils/apiUtils';
import { EpisodeInfoModel } from '../models/EpisodeInfoModel';

export default async function apiGetEpisodeService(showId, season, episode) {
	return apiCallSettings(
		(responseData) => {
			// DTO model
			return new EpisodeInfoModel( responseData.name, responseData.summary, responseData.image);
		},
		{
			method: 'GET',
			path: 'http://api.tvmaze.com/shows/{showId}/episodebynumber',
			pathParameters: {
				showId
			},
			queryParameters: {
				season,
				number: episode
			}
		}
	);
}