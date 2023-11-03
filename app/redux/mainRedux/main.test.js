import {getCommaSeparatedValue} from '../../utils';
import Actions, {INITIAL_STATE, reducer} from './mainRedux';
describe('mainRedux', () => {
  test('homeContentRequest', () => {
    const state = reducer(INITIAL_STATE, Actions.homeContentRequest());
    expect(!!state.homeList?.data?.length).toBe(true);
    expect(state.homeList?.isLoading).toBe(false);
  });

  test('timeLineContentRequest', () => {
    const state = reducer(INITIAL_STATE, Actions.timeLineContentRequest());
    expect(!!state.timeLineList?.data?.length).toBe(true);
    expect(state.timeLineList?.isLoading).toBe(false);
  });

  test('addNewEntry', () => {
    const payload = {
      meterReading: getCommaSeparatedValue('1500'),
      gas: getCommaSeparatedValue('1500'),
      gasType: 'Regular',
      price: getCommaSeparatedValue('1500'),
      cost: getCommaSeparatedValue('1500'),
      date: 'Friday ,21',
      time: 'test',
    };

    const state = reducer(INITIAL_STATE, Actions.addEntryRequest(payload));
    const newLyAddedItem = state.timeLineList?.data?.[0];

    expect(newLyAddedItem.meterReading).toBe(payload.meterReading);
    expect(newLyAddedItem.gas).toBe(payload.gas);
    expect(newLyAddedItem.gasType).toBe(payload.gasType);
    expect(newLyAddedItem.price).toBe(payload.price);
    expect(newLyAddedItem.cost).toBe(payload.cost);
    expect(newLyAddedItem.date).toBe(payload.date);
  });
});
