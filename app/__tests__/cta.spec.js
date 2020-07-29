import React from 'react'
import {mount} from 'enzyme'
import CTA from '../src/components/CTA/index'

describe('Components', () => {
  describe('CTA', () => {
    it('CTA should render without any errors', function () {
      const wrap = mount(<CTA text="Test" />)
      expect(wrap.contains('Test')).toBe(true);
    })
  })  
})