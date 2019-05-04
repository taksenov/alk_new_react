import * as React from 'react';
const Loadable = require('react-loadable');

import Preloader from '../../shared/components/Preloader';
import { ContentPageLayout } from '../../shared/layouts';

const Loading = () => (
  <ContentPageLayout.FullPage>
    <Preloader size={10} />
  </ContentPageLayout.FullPage>
);

export default Loadable({
  loader: () => import('./MySites.routes'),
  loading: Loading,
  delay: 500,
});
