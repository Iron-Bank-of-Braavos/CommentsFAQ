import React, {Component} from 'react';
import {render, shallow, mount} from 'enzyme';
import MyButton from '../../client/button.jsx';
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('basics of buttons', () => {

  it(`Should return a button with the "Share this project" text.`, ()=>{
    let wrapper = render(<MyButton />)
    expect(wrapper.find('p').text()).toEqual('Share this project');
  });

  it(`Should be clickable.`, () => {
    let counter = 0;
    let fn = ()=>{
        counter++
    }

    mount(<MyButton click={fn} ></MyButton>).simulate('click')
    expect(counter).toEqual(1);
    mount(<MyButton click={fn} ></MyButton>).simulate('click')
    expect(counter).toEqual(2);
  });

  it(`Should be styled appropriately.`, ()=>{
    let button = renderer.create(<MyButton></MyButton>).toJSON();
    expect(button).toMatchSnapshot()
    expect(button).toHaveStyleRule('background-color','rgba(0,0,0,0)');
    expect(button).toHaveStyleRule('border-bottom-color','rgb(61,61,102)');
    expect(button).toHaveStyleRule('border-bottom-left-radius','0px');
    expect(button).toHaveStyleRule('border-bottom-right-radius','0px');
    expect(button).toHaveStyleRule('border-bottom-style','solid');
    expect(button).toHaveStyleRule('border-bottom-width','1.98864px');
    expect(button).toHaveStyleRule('border-image-repeat','stretch');
    // expect(button).toHaveStyleRule('border-image-slice:','100%');
    // expect(button).toHaveStyleRule('border-image-width:','1');
    // expect(button).toHaveStyleRule('border-left-color:','rgb(61, 61, 102)');
    // expect(button).toHaveStyleRule('border-left-style:','solid');
    // expect(button).toHaveStyleRule('border-left-width:','1.98864px');
    // expect(button).toHaveStyleRule('border-right-color:','rgb(61, 61, 102)');
    // expect(button).toHaveStyleRule('border-right-style:','solid');
    // expect(button).toHaveStyleRule('border-right-width:','1.98864px;');
    // expect(button).toHaveStyleRule('border-top-right-radius:','0px');
    // expect(button).toHaveStyleRule('border-top-style:','solid');
    // expect(button).toHaveStyleRule('border-top-width:','1.98864px');
    // expect(button).toHaveStyleRule('box-sizing:','border-box');
    // expect(button).toHaveStyleRule('color:','rgb(61, 61, 102)');
    // expect(button).toHaveStyleRule('cursor:','pointer');
    // expect(button).toHaveStyleRule('display:','inline-block');
    // expect(button).toHaveStyleRule('font-size:','14px')
    // expect(button).toHaveStyleRule('font-stretch:','100%')
    // expect(button).toHaveStyleRule('font-style:','normal')
    // expect(button).toHaveStyleRule('font-variant-caps:','normal')
    // expect(button).toHaveStyleRule('font-variant-east-asian:','normal')
    // expect(button).toHaveStyleRule('font-variant-ligatures:','normal')
    // expect(button).toHaveStyleRule('font-variant-numeric:','normal')
    // expect(button).toHaveStyleRule('font-weight:','700')
    // expect(button).toHaveStyleRule('height:','37.6136px')
    // expect(button).toHaveStyleRule('padding-bottom:','10px')
    // expect(button).toHaveStyleRule('line-height:','8px')
    // expect(button).toHaveStyleRule('text-align:','center')
    // expect(button).toHaveStyleRule('transition-delay:','0s')
    // expect(button).toHaveStyleRule('transition-duration:','0.2s')
    // expect(button).toHaveStyleRule('transition-property:','all')
    // expect(button).toHaveStyleRule('transition-timing-function:','ease-in-out')
    // expect(button).toHaveStyleRule('vertical-align:','baseline')
    // expect(button).toHaveStyleRule('width:','158.452px')
  })
})
