import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.scss';
import { rootStores } from './stores';
import { Route, Router, Switch } from "react-router";
import { Provider } from "mobx-react";
import ShowInfoApp from './containers/ShowInfoApp/ShowInfoApp';
import registerServiceWorker from './registerServiceWorker';
import Root from './containers/Root/Root';
import { STORE_ROUTER } from './constants/stores';
import EpisodeInfoApp from './containers/EpisodeInfoApp/EpisodeInfoApp';
import NotFoundApp from './containers/NotFoundApp/NotFoundApp';

function App() {
	const rootPath = "/";
	const episodePath = "/:id/:season/:episode/";

	return (
		<Router history={rootStores[STORE_ROUTER].history}>
			<Root>
				<Switch>
					<Route exact path={rootPath} component={ShowInfoApp} />
					<Route path={episodePath} component={EpisodeInfoApp} />
					<Route path="*" component={NotFoundApp} />
				</Switch>	
			</Root>
		</Router>
	)
}

function reactRender(el: React.ReactElement<any>) {
	ReactDOM.render(
			<Provider {...rootStores}>
				{el}
			</Provider>,
		document.getElementById('root') as HTMLElement
	);
}

reactRender(App());
registerServiceWorker();
