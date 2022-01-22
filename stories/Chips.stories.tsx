import { Meta } from '@storybook/react';
import { Chips } from '../src/Chips/Chips';

const meta: Meta = {
  title: 'Chips',
  component: Chips,
};

export default meta;

const Default = (args) => <Chips {...args} />;

export const Basic = Default.bind({});

export const Stacked = Default.bind({});

const arr: { text: string; color: string }[] = [
  { text: 'Mango', color: 'yellow' },
  { text: 'Apple', color: 'red' },
  { text: 'Strawberry', color: 'pink' },
  { text: 'Pears', color: 'green' },
  { text: 'Indigo', color: 'blue' },
  { text: 'Grapes', color: 'black' },
  { text: 'Beetal', color: 'gray' },
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
