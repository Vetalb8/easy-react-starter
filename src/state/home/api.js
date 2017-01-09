import axios from 'axios';

import apiRoutes from '../../constants/api-routes';

export function getHomeData(onSuccess, onError) {
    return axios.get(apiRoutes.getHomeData)
        .then(res => {
            onSuccess && onSuccess(res);
        })
        .catch(error => {
            onError && onError(error);
        });
}
