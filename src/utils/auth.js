import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import intersection from 'lodash/intersection';
import includes from 'lodash/includes';

export function hasAllowed(userRoles, allowRoles) {
    let allowed = false;

    if (isArray(allowRoles)) {
        allowed = !!intersection(allowRoles, userRoles).length;
    } else if (isString(allowRoles)) {
        allowed = includes(userRoles, allowRoles);
    }

    return allowed;
}
