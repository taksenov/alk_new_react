import * as React from 'react';
import ListItems from './ListItems';
import { BrowserRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';

const list = [
  {
    comment: 'Timothy Aksenov (taksenov@gmail.com)',
    dateActive: '2019-03-05T09:40:08+03:00',
    dateCreate: '2019-03-05T09:40:03+03:00',
    dateFinish: null,
    dateFirst: null,
    host: 'localhost:8080',
    id: 3083,
    phone: '+79222049227',
    status: 'active',
  },
  {
    comment: 'Timothy Aksenov (taksenov@gmail.com)',
    dateActive: '2019-03-05T09:40:08+03:00',
    dateCreate: '2019-03-05T09:40:03+03:00',
    dateFinish: null,
    dateFirst: null,
    host: 'localhost:8080',
    id: 3084,
    phone: '+79222049227',
    status: 'active',
  },
  {
    comment: 'Timothy Aksenov (taksenov@gmail.com)',
    dateActive: '2019-03-05T09:40:08+03:00',
    dateCreate: '2019-03-05T09:40:03+03:00',
    dateFinish: null,
    dateFirst: null,
    host: 'localhost:8080',
    id: 3085,
    phone: '+79222049227',
    status: 'active',
  },
  {
    comment: 'Timothy Aksenov (taksenov@gmail.com)',
    dateActive: '2019-03-05T09:40:08+03:00',
    dateCreate: '2019-03-05T09:40:03+03:00',
    dateFinish: null,
    dateFirst: null,
    host: 'localhost:8080',
    id: 3086,
    phone: '+79222049227',
    status: 'active',
  },
  {
    comment: 'Timothy Aksenov (taksenov@gmail.com)',
    dateActive: '2019-03-05T09:40:08+03:00',
    dateCreate: '2019-03-05T09:40:03+03:00',
    dateFinish: null,
    dateFirst: null,
    host: 'localhost:8080',
    id: 3087,
    phone: '+79222049227',
    status: 'active',
  },
];

const stories = storiesOf('MySites', module);

stories.addDecorator(withKnobs);

stories.add('ListItems', () => {
  return (
    <div
      style={{
        width: '100%',
        borderRight: '1px solid #c1c1c1',
        borderBottom: '1px solid #c1c1c1',
      }}
    >
      <ListItems list={list} />
    </div>
  );
});
