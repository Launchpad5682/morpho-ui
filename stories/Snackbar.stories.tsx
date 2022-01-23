import { Meta } from '@storybook/react';
import { SnackBar } from '../src/components/SnackBar/SnackBar';

const meta: Meta = {
  title: 'Snackbar',
  component: SnackBar,
};

export default meta;

const Default = (args) => <SnackBar {...args} />;

// export const Baseline = Default.bind({});
// export const Leading = Default.bind({});
// export const Stacked = Default.bind({});

export const Baseline = () => (
  <div style={{ height: '100vh' }}>
    <SnackBar
      variant="baseline"
      color="red"
      message="Can't send photo. Retry in 5 seconds"
      buttonText="RETRY"
    />
  </div>
);

export const Leading = () => (
  <div style={{ height: '100vh' }}>
    <SnackBar
      variant="leading"
      color="blue"
      message="Can't send photo. Retry in 5 seconds"
      buttonText="RETRY"
    />
  </div>
);

export const Stacked = () => (
  <div style={{ height: '100vh' }}>
    <SnackBar
      variant="stacked"
      color="yellow"
      message="Can't send photo. Retry in 5 seconds"
      buttonText="RETRY"
    />
  </div>
);
