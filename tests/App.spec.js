import { mount } from 'enzyme'
import React from 'react'
import App from '../src/App'

describe('App', () => {
  it('renders', () => {
    const wrapper = mount(<App />)

    expect(wrapper).toBeDefined()
  })
})
