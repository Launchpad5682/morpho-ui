import { Meta } from '@storybook/react';
import { Card } from '../src/components/Card/Card';
import { WiAlien, WiBarometer, WiCelsius } from 'react-icons/wi';
import './styles/Card.css';

const meta: Meta = {
  title: 'Card',
  component: Card,
};

export default meta;

const Default = (args) => <Card {...args} />;

export const CardWithTextOverlayVertical = Default.bind({});
export const CardWithTextOverlayHorizontal = Default.bind({});
export const CardWithTextOverlayAndDismissVertical = Default.bind({});
export const CardWithTextOverlayAndDismissHorizontal = Default.bind({});
export const CardWithOnlyText = Default.bind({});
export const CardWithOnlyTextAndDismiss = Default.bind({});

CardWithTextOverlayVertical.args = {
  children: (
    <div>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="bottom-bar">
        <WiCelsius className="icon-size" />
        <WiBarometer className="icon-size" />
        <WiAlien className="icon-size" />
      </div>
    </div>
  ),
  type: 'text-image',
  imageURL:
    'https://images.unsplash.com/photo-1642490830096-107e6f26e172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  title: 'This is title',
  subTitle: 'This is subtitle',
  shadow: true,
};

CardWithTextOverlayHorizontal.args = {
  children: (
    <div>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="bottom-bar">
        <WiCelsius className="icon-size" />
        <WiBarometer className="icon-size" />
        <WiAlien className="icon-size" />
      </div>
    </div>
  ),
  type: 'text-image',
  imageURL:
    'https://images.unsplash.com/photo-1642490830096-107e6f26e172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  title: 'This is title',
  subTitle: 'This is subtitle',
  shadow: true,
  align: 'horizontal',
};

CardWithTextOverlayAndDismissHorizontal.args = {
  children: (
    <div>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="bottom-bar">
        <WiCelsius className="icon-size" />
        <WiBarometer className="icon-size" />
        <WiAlien className="icon-size" />
      </div>
    </div>
  ),
  type: 'text-image',
  imageURL:
    'https://images.unsplash.com/photo-1642490830096-107e6f26e172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  title: 'This is title',
  subTitle: 'This is subtitle',
  shadow: true,
  align: 'horizontal',
  dismiss: true,
};

CardWithTextOverlayAndDismissVertical.args = {
  children: (
    <div>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="bottom-bar">
        <WiCelsius className="icon-size" />
        <WiBarometer className="icon-size" />
        <WiAlien className="icon-size" />
      </div>
    </div>
  ),
  type: 'text-image',
  imageURL:
    'https://images.unsplash.com/photo-1642490830096-107e6f26e172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  title: 'This is title',
  subTitle: 'This is subtitle',
  shadow: true,
  align: 'vertical',
  dismiss: true,
};

CardWithOnlyText.args = {
  children: (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="bottom-bar">
        <WiCelsius className="icon-size" />
        <WiBarometer className="icon-size" />
        <WiAlien className="icon-size" />
      </div>
    </div>
  ),
  title: 'This is title',
  subTitle: 'This is subtitle',
  shadow: true,
};

CardWithOnlyTextAndDismiss.args = {
    children: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <div className="bottom-bar">
          <WiCelsius className="icon-size" />
          <WiBarometer className="icon-size" />
          <WiAlien className="icon-size" />
        </div>
      </div>
    ),
    title: 'This is title',
    subTitle: 'This is subtitle',
    shadow: true,
    dismiss: true,
  };
  
