import Checkbox from '../src/lib/components/Checkbox.svelte';

export default {
	title: 'Checkbox',
	component: Checkbox,
	argTypes: {
		label: { control: 'text' },
		checked: { control: 'boolean' }
	}
};

const Template = (args) => ({
	Component: Checkbox,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	checked: false
};
