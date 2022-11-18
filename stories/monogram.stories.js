import Monogram from '../src/lib/components/Monogram.svelte';

export default {
	title: 'Brand/Monogram',
	component: Monogram
};

const Template = (args) => ({
	Component: Monogram,
	props: args
});

export const Default = Template.bind({});
