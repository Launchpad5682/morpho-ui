import { Meta } from '@storybook/react';
import { SnackBar } from '../src/SnackBar/SnackBar';

const meta: Meta = {
  title: 'Snackbar',
  component: SnackBar,
};

export default meta;

const Default = (args) => <SnackBar {...args} />;

export const Baseline = Default.bind({});
export const Leading = Default.bind({});
export const Stacked = Default.bind({});

Baseline.args = {
  variant: 'baseline',
  color: 'red',
  message: "Can't send photo. Retry in 5 seconds",
  buttonText: 'RETRY',
};

Leading.args = {
  variant: 'leading',
  color: 'green',
  message: "Can't send photo. Retry in 5 seconds",
  buttonText: 'RETRY',
};

Stacked.args = {
  variant: 'stacked',
  color: 'blue',
  message: "Can't send photo. Retry in 5 seconds",
  buttonText: 'RETRY',
};
