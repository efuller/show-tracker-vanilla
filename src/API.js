import axios from 'axios';
import { API_URL_ROOT, API_KEY } from './config';

export const getShows = show =>
	axios.get(`${API_URL_ROOT}/search/tv?api_key=${API_KEY}&language=en-US&query=${show}&page=1`);

export const getShowDetails = showID =>
	axios.get(`${API_URL_ROOT}/tv/${showID}?api_key=${API_KEY}&language=en-US`);
