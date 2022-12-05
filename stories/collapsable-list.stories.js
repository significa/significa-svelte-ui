import CollapsableList from '../src/lib/components/CollapsableList.svelte';

export default {
	title: 'Collapsable List',
	component: CollapsableList
};

const Template = (args) => ({
	Component: CollapsableList,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	items: ['1', '2', '3', '4', '5'],
	title: 'Collapsable List'
};
