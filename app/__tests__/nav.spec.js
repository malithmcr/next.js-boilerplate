import React from 'react'
import {mount} from 'enzyme'
import Nav from '../src/components/Nav/index'
import { NavMock } from '../src/utils/mocks/nav';

describe('Components', () => {
  describe('Nav', () => {
    it('Nav Items are loading corerctly', function () {
      const wrap = mount(<Nav isSticky={false} data={NavMock}/>)
      expect(wrap.find('li').length).toBe(10);
    })
   
  })  
})