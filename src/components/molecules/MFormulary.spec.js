import { mount } from "@vue/test-utils"
import MFormulary from './MFormulary.vue'

describe('MFormulary.vue', () => {
  it('should renders the component', () => {
    const wrapper = mount(MFormulary)
    expect(wrapper.exists()).toBe(true)
  })
})