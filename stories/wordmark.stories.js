import Wordmark from '../src/lib/components/Wordmark.svelte';

export default {
	title: 'Brand/Wordmark',
	component: Wordmark
};

const Template = (args) => ({
	Component: Wordmark,
	props: args
});

export const Default = Template.bind({});
