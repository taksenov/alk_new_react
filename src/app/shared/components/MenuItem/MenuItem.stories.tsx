import * as React from 'react';
import MenuItem from './MenuItem';
import { BrowserRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';

const stories = storiesOf('Menu', module);

stories.addDecorator(withKnobs);

stories.add('MenuItem', () => {
  const linksSelector = select(
    'LinkName:',
    { back: 'Back', forward: 'Next', byName: 'Ссылка в пустоту' },
    'Ссылка простая',
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
      <BrowserRouter>
        <MenuItem linkTo="/somewere" name={linksSelector} />
      </BrowserRouter>
    </div>
  );
});
