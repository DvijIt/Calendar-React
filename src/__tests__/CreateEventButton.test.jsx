import React from 'react'
import { shallow } from 'enzyme'
import CreateEventButton from '../Header/CreateEventButton'

describe('<CreateEventButton />', () => {
  it('should render create button', () => {
    const wrappedComponent = shallow(<CreateEventButton />)
    expect(wrappedComponent).toMatchSnapshot()
  })

  it('should open modal on click button', () => {
    const mockOpenPopup = jest.fn()
    const wrappedComponent = shallow(<CreateEventButton openPopup={mockOpenPopup} />)
    wrappedComponent.find('.create-btn').simulate('click')
    expect(mockOpenPopup).toBeCalled()
  });
})