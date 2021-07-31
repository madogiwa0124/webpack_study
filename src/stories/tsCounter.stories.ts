import tsCounter from "@js/components/tsCounter.vue";

export default {
  title: "tsCounter",
  component: tsCounter,
};

const Template = (args: unknown) => ({
  components: { tsCounter },
  setup() {
    return { args };
  },
  template: '<ts-counter  v-bind="args" />',
});

export const Default = Template.bind({});
