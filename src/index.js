import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/index';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import WaimaiReducer from './reducers/WaimaiReducer';

const recuders = combineReducers({
	list: WaimaiReducer
})
const store = createStore(recuders, {});


function renderPage() {
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}

renderPage();

store.subscribe(renderPage);

registerServiceWorker();
