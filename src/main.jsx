import ReactDOM from 'react-dom';
import { App } from './App';
import './Styles/index.css';
import './Styles/normalize.css';

const app = <App />;
const container = document.getElementById('root');

ReactDOM.render(app, container);
