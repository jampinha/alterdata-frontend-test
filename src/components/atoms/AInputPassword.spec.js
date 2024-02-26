import { shallowMount } from "@vue/test-utils";
import AInputPassword from "./AInputPassword.vue";

describe("AInputPassword", () => {
  it("should renders the component", () => {
    const wrapper = shallowMount(AInputPassword);
    expect(wrapper.exists()).toBe(true)
  });
});
