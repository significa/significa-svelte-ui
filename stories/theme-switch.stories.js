import ThemeSwitch from '../src/lib/components/ThemeSwitch.svelte';

export default {
	title: 'ThemeSwitch',
	component: ThemeSwitch,
	argTypes: {
		checked: { control: 'boolean' }
	}
};

const Template = (args) => ({
	Component: ThemeSwitch,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	checked: false
};
