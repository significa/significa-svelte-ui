import Button from '../src/lib/components/Button.svelte';
import Handbook from '../src/lib/components/Icons/Handbook.svelte';

export default {
	title: 'Button',
	component: Button,
	decorators: [],
	argTypes: {
		label: { control: 'text' },
		size: { control: 'select', options: ['sm', 'md', 'lg'] },
		variant: { control: 'select', options: ['solid', 'outline'] },
		tag: { control: 'select', options: ['button', 'a'] },
		loading: { control: 'boolean' },
		disabled: { control: 'boolean' },
		hasArrow: { control: 'boolean' }
	}
};

const Template = (args) => ({
	Component: Button,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	label: 'Button',
	size: 'md',
	variant: 'solid',
	loading: false,
	disabled: false,
	hasArrow: false,
	tag: 'button'
};

export const JustArrow = Template.bind({});
JustArrow.args = {
	size: 'md',
	variant: 'solid',
	loading: false,
	disabled: false,
	hasArrow: true,
	tag: 'button'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	label: 'Button',
	size: 'md',
	variant: 'solid',
	loading: false,
	disabled: false,
	hasArrow: true,
	tag: 'button',
	icon: Handbook
};

export const WithArrow = Template.bind({});
WithArrow.args = {
	label: 'Button',
	size: 'md',
	variant: 'solid',
	loading: false,
	disabled: false,
	hasArrow: true,
	tag: 'button'
};
