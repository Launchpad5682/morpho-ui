import { Meta } from '@storybook/react';
import { Alert } from '../src/Alert/Alert';

const meta: Meta = {
  title: 'Alert',
  component: Alert,
};

export default meta;

const Default = (args) => (
  <Alert {...args}>This is an alert message</Alert>
);

export const SmallAlert = Default.bind({});
export const MediumAlert = Default.bind({});
export const LargeAlert = Default.bind({});

SmallAlert.args = {
  color: 'green',
  size: 'sm',
};

MediumAlert.args = {
  color: 'yellow',
  size: 'md',
};

LargeAlert.args = {
  color: 'blue',
  size: 'lg',
};
