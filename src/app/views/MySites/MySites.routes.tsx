import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ContentPageLayout } from '../../shared/layouts';
import ListItems from './components/ListItems';

import { StoreTypes } from '../../core/reducers/types';
// Actions
import { getMySitesRequest } from '../../states/mysites/duck';
// Selectors
import { getIsFetchingMySites, getMySitesData } from '../../states/mysites/selectors';

import styles from './MySites.module.scss';

// FIXME: this is mock, fix when API is done
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

// Dispatcher interface
export interface IDispatch {
  getMySitesRequest: (params: any) => void;
}

// Store interface
interface IStore {
  isFetching: boolean;
  mySitesData: any;
}

interface IProps {
  user: {
    token: {
      someShit: string;
      uniple?: string;
    };
    uid: {
      someShit: string;
      uniple?: string;
    };
  };
}

const mapStateToProps = (store: StoreTypes): IStore => ({
  isFetching: getIsFetchingMySites(store),
  mySitesData: getMySitesData(store),
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatch =>
  bindActionCreators(
    {
      getMySitesRequest,
    },
    dispatch,
  );

type ITypes = IDispatch & IStore & IProps;

class MySites extends React.Component<ITypes> {
  componentDidMount() {
    const oldLK = document.getElementById('root');
    oldLK!.style.display = 'none';

    const { getMySitesRequest, user } = this.props;
    // const { pk } = params;

    // TODO: get data by ramda and use checking someShit or uniple tokens store in cookie
    getMySitesRequest({
      userID: user.uid.someShit,
      userToken: user.token.someShit,
    });

    console.log('CDM MySites this.props=', this.props);
  }

  componentDidUpdate(prevProps: any) {
    console.log('CDU MySites this.props=', this.props);
    console.log('CDU MySites prevProps=', prevProps);
  }

  render() {
    console.log('RENDER MySites this.props=', this.props);

    return (
      <div className={styles.container}>
        <ContentPageLayout.Content>
          {/* TODO: add card header here */}
          <div>Header</div>
          {/* List Items */}
          <ListItems list={list} />
        </ContentPageLayout.Content>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MySites);
