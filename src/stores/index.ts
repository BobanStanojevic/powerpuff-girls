// ROOT store pattern used
import { createBrowserHistory } from 'history';
import { STORE_ROUTER, STORE_SHOW_INFO, STORE_EPISODE_INFO} from '../constants/stores';
import RouterStore from './RouterStore';
import { ShowInfoStore } from './ShowInfoStore';
import { EpisodeInfoStore } from './EpisodeInfoStore';

let routerStore;
let showInfoStore;
let episodeInfoStore;

const history = createBrowserHistory();
routerStore = new RouterStore(history);
showInfoStore = new ShowInfoStore();
episodeInfoStore = new EpisodeInfoStore(routerStore);

const rootStores = {
	[STORE_ROUTER]: routerStore,
	[STORE_SHOW_INFO]: showInfoStore,
	[STORE_EPISODE_INFO]: episodeInfoStore
}

export { rootStores };