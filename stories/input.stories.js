import Input from '../src/lib/components/Input.svelte';

export default {
	title: 'Input',
	component: Input,
	argTypes: {
		disabled: { control: 'boolean' },
		error: { control: 'text' },
		icon: { control: 'text' },
		label: { control: 'text' },
		name: { control: 'text' }
	}
};

const Template = (args) => ({
	Component: Input,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	disabled: false,
	label: 'Name',
	icon: undefined,
	name: 'name'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	disabled: false,
	icon: 'sun',
	label: 'Name',
	name: 'name'
};
