import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  it('should display Calendar', () => {
    const wrappedComponent = shallow(<App />);
    expect(wrappedComponent.find('Calendar').exists()).toBeTruthy();
  });
});
