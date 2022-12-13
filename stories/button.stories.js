import Button from '../src/lib/components/Button.svelte';

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
		disabled: { control: 'boolean' }
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
	tag: 'button'
};

export const JustIcon = Template.bind({});
JustIcon.args = {
	size: 'md',
	variant: 'solid',
	loading: false,
	disabled: false,
	rightIcon: 'arrow-right',
	tag: 'button'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	label: 'Button',
	size: 'md',
	variant: 'solid',
	loading: false,
	disabled: false,
	rightIcon: 'arrow-right',
	tag: 'button',
	leftIcon: 'handbook'
};

export const WithArrow = Template.bind({});
WithArrow.args = {
	label: 'Button',
	size: 'md',
	variant: 'solid',
	loading: false,
	disabled: false,
	rightIcon: 'arrow-right',
	tag: 'button'
};
