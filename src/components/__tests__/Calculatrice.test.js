import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '@/App.vue'

it('calculate() : 2 + 3 = 5', async () => {
    const wrapper = mount(App)
    wrapper.vm.result = '2+3'        
    await wrapper.vm.calculate()     
    expect(wrapper.vm.result).toBe(5)
  })

  it('calculate() : 5 - 3 = 2', async () => {
    const wrapper = mount(App)
    wrapper.vm.result = '5-3'        
    await wrapper.vm.calculate()     
    expect(wrapper.vm.result).toBe(2)
  })

    it('calculate() : 10 / 2 = 5', async () => {
    const wrapper = mount(App)
    wrapper.vm.result = '10/2'        
    await wrapper.vm.calculate()     
    expect(wrapper.vm.result).toBe(5)
  })

   it('calculate() : -5 - 2 = -7', async () => {
    const wrapper = mount(App)
    wrapper.vm.result = '-5-2'        
    await wrapper.vm.calculate()     
    expect(wrapper.vm.result).toBe(-7)
  })

  it('calculate() : -5 + 7 = 2', async () => {
    const wrapper = mount(App)
    wrapper.vm.result = '-5+7'        
    await wrapper.vm.calculate()     
    expect(wrapper.vm.result).toBe(2)
  })
   it('calculate() : -5 + -3 = -8', async () => {
    const wrapper = mount(App)
    wrapper.vm.result = '-5+-3'        
    await wrapper.vm.calculate()     
    expect(wrapper.vm.result).toBe(-8)
  })

  it('calculate() : 7.1 + 1.9 = 9', async () => {
    const wrapper = mount(App)
    wrapper.vm.result = '7.1+1.9'        
    await wrapper.vm.calculate()     
    expect(wrapper.vm.result).toBe(9)
  })
  it('calculate() : 9 - 1.9 = 7.1', async () => {
    const wrapper = mount(App)
    wrapper.vm.result = '9 - 1.9'        
    await wrapper.vm.calculate()     
    expect(wrapper.vm.result).toBe(7.1)
  })
  it('calculate() : 10 * 11 = 110', async () => {
    const wrapper = mount(App)
    wrapper.vm.result = '10*11'        
    await wrapper.vm.calculate()     
    expect(wrapper.vm.result).toBe(110)
  })
  it('calculate() : -10 * -11 = 110', async () => {
    const wrapper = mount(App)
    wrapper.vm.result = '-10*-11'        
    await wrapper.vm.calculate()     
    expect(wrapper.vm.result).toBe(110)
  })
  
  