import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';

// metadata
const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

// variations of the story
export const Default = () => <Button variant="primary">Click Me</Button>;

export const Secondary = () => <Button variant='secondary'>Click Me</Button>
