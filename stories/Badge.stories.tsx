import { Meta } from '@storybook/react';
import { BiMessage } from 'react-icons/bi';
import { Avatar } from '../src/Avatar/Avatar';
import { Badge } from '../src/Badge/Badge';

const meta: Meta = {
  title: 'Badge',
  component: Badge,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

const Default = (args) => <Badge {...args} />;

export const IconBadge = Default.bind({});

IconBadge.args = {
  children: <BiMessage />,
  variant: 'icon',
  number: 2,
};

export const AvatarBadge = Default.bind({});

AvatarBadge.args = {
  children: <Avatar size="sm-avatar" />,
  variant: 'avatar',
  mode: 'online',
};