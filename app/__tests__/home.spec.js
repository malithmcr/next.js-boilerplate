import React from 'react'
import {mount} from 'enzyme'
import HomePage from '../src/pages/[lang]/index'

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<HomePage/>)
      expect(wrap.find('div').text()).toBe('Economic Recovery')
    })
  })  
})