import Link from '../src/lib/components/Link.svelte';

export default {
	title: 'Link',
	component: Link,
	argTypes: {
		href: { control: 'text' },
		variant: { control: 'select', options: ['subtle', 'accent'] }
	}
};

const Template = (args) => ({
	Component: Link,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	href: 'https://www.google.com',
	variant: 'subtle'
};
