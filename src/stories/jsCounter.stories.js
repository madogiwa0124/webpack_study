import jsCounter from "@js/components/jsCounter.vue";

export default {
  title: "jsCounter",
  component: jsCounter,
};

const Template = (args) => ({
  components: { jsCounter },
  setup() {
    return { args };
  },
  template: '<js-counter  v-bind="args" />',
});

export const Default = Template.bind({});
