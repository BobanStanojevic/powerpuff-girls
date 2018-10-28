import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ShowInfoApp from './ShowInfoApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShowInfoApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
