import { createSelector } from 'reselect';

const getTitles = (state) => state.home.data.children.map(item => item.data.title);

export const getHomeTitles = createSelector(
    [getTitles],
    titles => titles
);
