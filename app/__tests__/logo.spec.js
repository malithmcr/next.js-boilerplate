import React from 'react'
import {mount} from 'enzyme'
import Logo from '../src/components/Logo/index'

describe('Components', () => {
  describe('Logo', () => {
    it('Svg logo should render without any errors', function () {
      const wrap = mount(<Logo isSticky={false}/>)
      expect(wrap.contains(<img src="/images/logo.svg"  className="logo-text" />)).toBe(true);
    })
    it('dots Icon should render without any errors', function () {
      const wrap = mount(<Logo isSticky={false}/>)
      expect(wrap.contains(<img src="/images/forum-dots.svg" />)).toBe(true);
    })
  })  
})