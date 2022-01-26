import { Meta } from '@storybook/react';
import { Chips } from '../src/components/Chips/Chips';

const meta: Meta = {
  title: 'Chips',
  component: Chips,
};

export default meta;

const Default = (args) => <Chips {...args} />;

export const Basic = Default.bind({});

export const Stacked = Default.bind({});

const arr: {
  id: string;
  text: string;
  color: 'red' | 'green' | 'yellow' | 'blue' | 'pink' | 'black' | 'gray';
}[] = [
  { id: '12a', text: 'Mango', color: 'yellow' },
  { id: '12b', text: 'Apple', color: 'red' },
  { id: '12c', text: 'Strawberry', color: 'pink' },
  { id: '12d', text: 'Pears', color: 'green' },
  { id: '12e', text: 'Indigo', color: 'blue' },
  { id: '12f', text: 'Grapes', color: 'black' },
  { id: '12g', text: 'Beetle', color: 'gray' },
];

Basic.args = {
  title: 'Basic Chips',
  chips: arr,
};

Stacked.args = {
  chips: arr,
  variant: 'stacked',
  title: 'Stacked Chips',
};
