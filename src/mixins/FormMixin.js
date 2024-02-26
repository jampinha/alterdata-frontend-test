const FormMixin = {
  data: () => ({
    payload: {},
  }),
  methods: {
    onBeforeFormSubmit() {
      console.log("onBeforeFormSubmit()");
      return true
    },
    onFormSubmit() {
      console.log("onFormSubmit()");
      this.onAfterFormSubmit();
    },
    onAfterFormSubmit() {
      console.log("onAfterFormSubmit()");
      return true
    },
    submit() {
      return this.onBeforeFormSubmit()
        && this.onFormSubmit()
        && this.onAfterFormSubmit()
    }
  },
};

export default FormMixin;
