import React from 'react'
import {mount} from 'enzyme'
import Search from '../src/components/Search/index'

describe('Components', () => {
  describe('Search', () => {
    it('Search should render without any errors', function () {
      const wrap = mount(<Search isSticky={false}/>)
      expect(wrap.contains(<input type="search" placeholder="Search" minLength="3" />)).toBe(true);
    })
    it('Search Icon should render without any errors', function () {
      const wrap = mount(<Search isSticky={false}/>)
      expect(wrap.contains(<img src="/images/search.svg" />)).toBe(true);
    })
  })  
})