import { Meta } from '@storybook/react';
import { Avatar } from '../src/Avatar/Avatar';

const meta: Meta = {
  title: 'Avatar',
  component: Avatar,
};

export default meta;

const Default = (args) => <Avatar {...args} />;

export const Round = Default.bind({});

export const Square = Default.bind({});

Round.args = {
  type: 'round',
  size: 'md-avatar',
};

Square.args = {
  type: 'square',
  size: 'sm-avatar',
};
