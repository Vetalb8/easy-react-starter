import { Route } from 'react-router';
import { store } from '../../app.root';

export default class AuthenticatedRoute extends Route {
    static propsTypes = Route.propTypes;

    static defaultProps = {
        onEnter(nextState, replace, callback) {
            const state = store.getState();

            console.log(nextState);

            if (state.user) {
                return callback();
            }
        }
    };
}
