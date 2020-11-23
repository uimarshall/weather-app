import './main.scss';
import {fetchResults,showResults} from './app/app';
import './app/alertService';
import { render } from './app/componentService';

render();
fetchResults().then(data=>showResults(data))
