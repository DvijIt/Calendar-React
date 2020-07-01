import React from 'react'
import { shallow } from 'enzyme'
import Event from '../Main/Event'

describe('<Event />', () => {
  it('should display Calendar', () => {
    const props = {
      id: '1',
      title: 'title 1',
      timeStart: '20:00',
      timeEnd: '21:00',
      description: 'descr',
      color: '#fff',
      checkDelete: jest.fn()
    }
    const wrappedComponent = shallow(<Event {...props} />)
    expect(wrappedComponent).toMatchSnapshot()
  })
})
