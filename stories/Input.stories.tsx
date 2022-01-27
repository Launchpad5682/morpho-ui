import { Meta } from '@storybook/react';
import { AiFillWarning } from 'react-icons/ai';
import { MdOutlineDone } from 'react-icons/md';
import { Typography } from '../src';
import { Input } from '../src/components/Input/Input';

const meta: Meta = {
  title: 'Input',
  component: Input,
};

export default meta;

const Default = (args) => <Input {...args} />;

export const InputField = Default.bind({});
export const WarningField = Default.bind({});
export const SuccessField = Default.bind({});

InputField.args = {
  labelText: 'Name',
  type: 'text',
  color: 'blue',
};

WarningField.args = {
  labelText: 'Password',
  type: 'password',
  color: 'red',
  statusText: (
    <>
      <Typography variant="subtitle1" textColor="red">
        <AiFillWarning />
        You're password need to be more than 8 characters
      </Typography>
    </>
  ),
};

SuccessField.args = {
  labelText: 'Password',
  type: 'password',
  color: 'green',
  statusText: (
    <>
      <Typography variant="subtitle1" textColor="green">
        <MdOutlineDone />
        You're password is strong
      </Typography>
    </>
  ),
};
