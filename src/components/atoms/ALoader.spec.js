import { mount } from '@vue/test-utils'
import ALoaderVue from './ALoader.vue'

describe('ALoader.vue', () => {
  it('should renders the component', () => {
    const wrapper = mount(ALoaderVue)
    expect(wrapper.exists()).toBe(true)
  })
})