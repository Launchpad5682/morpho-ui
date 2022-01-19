import { Meta } from '@storybook/react';
import { Card } from '../src/Card/Card';

const meta: Meta = {
  title: 'Card',
  component: Card,
};

export default meta;

const Default = (args) => <Card {...args} />;

export const CardWithTextOverlay = Default.bind({});

CardWithTextOverlay.args = {
  children: 'This is so cool',
  type: 'dismiss',
  imageURL:
    'https://images.unsplash.com/photo-1642490830096-107e6f26e172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  title: 'This is title',
  shadow: true,
};
