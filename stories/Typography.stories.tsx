import { Meta } from '@storybook/react';
import { Typography } from '../src/Typography/Typography';

const meta: Meta = {
  title: 'Typography',
  component: Typography,
};

export default meta;

const Default = (args) => <Typography {...args} />;

export const H1 = Default.bind({});
export const H2 = Default.bind({});
export const H3 = Default.bind({});
export const H4 = Default.bind({});
export const H5 = Default.bind({});
export const H6 = Default.bind({});
export const Subtitle1 = Default.bind({});
export const Subtitle2 = Default.bind({});
export const Body1 = Default.bind({});
export const Body2 = Default.bind({});
export const ButtonText = Default.bind({});
export const Caption = Default.bind({});
export const Overline = Default.bind({});

H1.args = { children: 'H1 Heading1', variant: 'h1' };
H2.args = { children: 'H2 Heading2', variant: 'h2' };
H3.args = { children: 'H3 Heading3', variant: 'h3' };
H4.args = { children: 'H4 Heading4', variant: 'h4' };
H5.args = { children: 'H5 Heading5', variant: 'h5' };
H6.args = { children: 'H6 Heading6', variant: 'h6' };
Subtitle1.args = { children: 'Subtitle1', variant: 'subtitle1' };
Subtitle2.args = { children: 'Subtitle2', variant: 'subtitle2' };
Body1.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  variant: 'body1',
};
Body2.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  variant: 'body2',
};
ButtonText.args = { children: 'button text', variant: 'button' };
Caption.args = { children: 'caption text', variant: 'caption' };
Overline.args = { children: 'overline text', variant: 'overline' };
