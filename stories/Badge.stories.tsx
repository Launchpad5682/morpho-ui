import { Meta } from '@storybook/react';
import { BiMessage } from 'react-icons/bi';
import { Avatar } from '../src/components/Avatar/Avatar';
import { Badge } from '../src/components/Badge/Badge';

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
  number: 100,
};

export const AvatarBadge = Default.bind({});

AvatarBadge.args = {
  children: <Avatar size="sm-avatar" />,
  variant: 'avatar',
  mode: 'online',
};

export const AvatarBadgeOffline = Default.bind({});

AvatarBadgeOffline.args = {
  children: <Avatar size="sm-avatar" />,
  variant: 'avatar',
  mode: 'offline',
};
