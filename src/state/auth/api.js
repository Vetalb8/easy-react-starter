import axios from 'axios';
import apiRoutes from '../../constants/api-routes';

export function loginUser(credentials) {
    return axios.post(apiRoutes.loginUrl, credentials);
}

export function logoutUser() {
    return axios.post(apiRoutes.logoutUrl);
}
