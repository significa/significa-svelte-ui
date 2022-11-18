import NavLink from '../src/lib/components/NavLink.svelte';

export default {
	title: 'NavLink',
	component: NavLink,
	argTypes: {
		label: { control: 'text' },
		href: { control: 'text' }
	}
};

const Template = (args) => ({
	Component: NavLink,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	label: 'This is a link',
	href: 'https://www.google.com'
};
