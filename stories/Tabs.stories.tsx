import { Meta } from '@storybook/react';
import { Tabs } from '../src/components/Tabs/Tabs';

const meta: Meta = {
  title: 'Tabs',
  component: Tabs,
};

export default meta;

const Default = (args) => <Tabs {...args} />;

export const Tab = Default.bind({});

const tabList = [
  {
    to: '/home',
    name: 'Home',
    color: 'red',
  },
  {
    to: '/about',
    name: 'About',
    color: 'green',
  },
  {
    to: '/shop',
    name: 'Shop',
    color: 'pink',
  },
  {
    to: '/contact',
    name: 'Contact Us',
    color: 'blue',
  },
  {
    to: '/news',
    name: 'News',
    color: 'yellow',
  },
];

Tab.args = {
  navList: tabList,
  color: 'black',
};
