import {routeNames} from '../../navigator';
import Actions, {INITIAL_STATE, reducer} from './navigationRedux';

describe('navigationRedux', () => {
  test('homePressed', () => {
    const state = reducer(
      INITIAL_STATE,
      Actions.changeTabScreen(routeNames.home),
    );
    expect(state.selectedTabScreen).toBe(routeNames.home);
  });

  test('timeLinePressed', () => {
    const state = reducer(
      INITIAL_STATE,
      Actions.changeTabScreen(routeNames.timeLine),
    );
    expect(state.selectedTabScreen).toBe(routeNames.timeLine);
  });
});
