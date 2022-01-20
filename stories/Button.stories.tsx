import { Meta, Story } from '@storybook/react';
import { Button } from '../src/Button/Button';
import { BiAddToQueue, BiAlarm } from 'react-icons/bi';
// metadata
const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

// variations of the story
const Default = (args) => <Button {...args}></Button>;

export const Solid = Default.bind({});
export const Outline = Default.bind({});
export const Icon = Default.bind({});
export const FloatingAction = Default.bind({});

Default.args = {
  color: 'green',
};

Solid.args = {
  variant: 'solid',
  children: 'Click Me',
};

Outline.args = {
  variant: 'outline',
  children: 'Click Me',
};

Icon.args = {
  variant: 'icon',
  icon: <BiAlarm />,
  children: 'Alarm',
};

FloatingAction.args = {
  variant: 'floating',
  icon: <BiAddToQueue />,
  children: null,
};
