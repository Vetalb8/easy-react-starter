export const USER_SWITCH_LOCALE = 'user/switch_locale';

export function userSwitchLocale(locale) {
    return {
        type: USER_SWITCH_LOCALE,
        payload: locale
    };
}
