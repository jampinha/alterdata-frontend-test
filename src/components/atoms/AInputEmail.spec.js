import { mount } from "@vue/test-utils";
import AInputEmail from "./AInputEmail.vue";

describe("AInputEmail", () => {
  it("should renders the component", () => {
    const wrapper = mount(AInputEmail);
    expect(wrapper.exists()).toBe(true)
  });
});
