import * as React from 'react';
import Preloader from './Preloader';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';

const stories = storiesOf('Shared', module);

stories.addDecorator(withKnobs);

stories.add('Preloader', () => {
  const sizeSelector = select(
    'Size:',
    {
      _1x: 1,
      _2x: 2,
      _3x: 3,
      _4x: 4,
      _5x: 5,
      _6x: 6,
      _7x: 7,
      _8x: 8,
      _9x: 9,
      _10x: 10,
    },
    10,
  );

  return (
    <div
      style={{
        width: '800px',
        borderRight: '1px solid #c1c1c1',
        borderBottom: '1px solid #c1c1c1',
        padding: '20px',
      }}
    >
      <Preloader size={sizeSelector} />
    </div>
  );
});
