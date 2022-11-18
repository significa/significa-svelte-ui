import Link from '../src/lib/components/Link.svelte';

export default {
	title: 'Link',
	component: Link,
	argTypes: {
		label: { control: 'text' },
		href: { control: 'text' }
	}
};

const Template = (args) => ({
	Component: Link,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	label: 'This is a link',
	href: 'https://www.google.com'
};
