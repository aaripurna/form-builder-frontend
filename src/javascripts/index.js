import './utils/sidebar';
import axios from 'axios';
import './fields';
import { csrf_token } from './utils/config';

axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf_token;
