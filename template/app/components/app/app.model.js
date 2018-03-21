import { Model, React, Component } from 'geassjs';

import AppView from './app.view';

@Model({
  namespace: 'app',
  template: AppView,
  mapStateToProps: (state) => {
    return {
      greet: state.app.greet,
    };
  },
})
export default class AppModel extends Component {
  state = {
    greet: '',
  };

  reducers = {
    sayHello(state) {
      return {
        ...state,
        greet: 'Hello Geass!',
      };
    },
  };

  sagas = {
    *asyncSayHello(action, { delay, call, put }) {
      yield call(delay, 1000);
      yield put({ type: 'app/sayHello' });
    },
  };
}