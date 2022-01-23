import { Meta } from '@storybook/react';
import { Modal } from '../src/components/Modal/Modal';
import { Chips } from '../src/components/Chips/Chips';

const meta: Meta = {
  title: 'Modal',
  component: Modal,
};

export default meta;

const Default = (args) => <Modal {...args} />;

export const SimpleModal = Default.bind({});

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
  { id: '12g', text: 'Beetal', color: 'gray' },
];

SimpleModal.args = {
  children: <Chips chips={arr} variant="stacked" title="Stacked Chips" />,
  heading: 'Heading',
};
