import { Meta } from '@storybook/react';
import { Alert } from '../src/components/Alert/Alert';

const meta: Meta = {
  title: 'Alert',
  component: Alert,
};

export default meta;

const Default = (args) => <Alert {...args}>This is an alert message</Alert>;

export const RedAlert = Default.bind({});
export const GreenAlert = Default.bind({});
export const YellowAlert = Default.bind({});
export const BlueAlert = Default.bind({});
export const PinkAlert = Default.bind({});

RedAlert.args = {
  children: 'This is an alert',
  color: 'red',
};

GreenAlert.args = {
  children: 'This is an alert',
  color: 'green',
};

YellowAlert.args = {
  children: 'This is an alert',
  color: 'yellow',
};

BlueAlert.args = {
  children: 'This is an alert',
  color: 'blue',
};

PinkAlert.args = {
  children: 'This is an alert',
  color: 'pink',
};
