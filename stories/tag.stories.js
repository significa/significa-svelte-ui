import Tag from './components/tag.story.svelte';

export default {
	title: 'Tag',
	component: Tag,
	argTypes: {
		href: { control: 'text' }
	}
};

const Template = (args) => ({
	Component: Tag,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	href: 'https://www.google.com'
};
