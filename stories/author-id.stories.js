import AuthorId from '../src/lib/components/AuthorId.svelte';

export default {
	title: 'AuthorId',
	component: AuthorId,
	argTypes: {
		image: { control: 'text' },
		name: { control: 'text' },
		role: { control: 'text' }
	}
};

const Template = (args) => ({
	Component: AuthorId,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	image:
		'https://images.unsplash.com/photo-1517436073-3b1b1b1b1b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
	name: 'John Doe'
};

export const WithRole = Template.bind({});
WithRole.args = {
	image:
		'https://images.unsplash.com/photo-1517436073-3b1b1b1b1b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
	name: 'John Doe',
	role: 'Developer'
};
