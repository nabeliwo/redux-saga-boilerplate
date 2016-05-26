import { delay, takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { increment, incrementAsync } from '../actions/counter';

export function* delayIncrement() {
  yield call(delay, 1000);
  yield put(increment());
}

export default function* rootSaga() {
  yield* takeEvery(`${incrementAsync}`, delayIncrement);
}
