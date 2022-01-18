import { Meta } from '@storybook/react';
import { Image } from '../src/Image/Image';

const meta: Meta = {
  title: 'Image',
  component: Image,
};

export default meta;

const Default = (args) => <Image {...args} />;

export const ResponsiveImage = Default.bind({});

ResponsiveImage.args = {
  imageURL:
    'https://images.unsplash.com/photo-1642490830096-107e6f26e172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  alt: 'snow image',
};

export const RoundedImage = Default.bind({});

RoundedImage.args = {
  imageURL:
    'https://images.unsplash.com/photo-1642490830096-107e6f26e172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  alt: 'snow image',
  rounded: true,
};
