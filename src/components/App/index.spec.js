import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe("A suite", () => {
    it("contains spec with an expectation", () => {
        expect(shallow(<App />).contains(<div/>)).toBe(true);
    });
});
