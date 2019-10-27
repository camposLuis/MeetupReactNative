import { Alert } from 'react-native';
import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import api from '~/services/api';

import {
  createSubscriptionSuccess,
  createSubscriptionFailure,
} from './actions';

export function* createSubscription({ payload }) {
  try {
    const profileId = yield select(state => state.user.profile.id);

    const responseSubscriptions = yield call(
      api.get,
      `meetups/${payload.id}/subscriptions`
    );

    const checkSubscription = responseSubscriptions.data.map(
      sub => sub.participant_id === profileId && sub.meetup_id === payload.id
    );

    if (checkSubscription[0] === true) {
      Alert.alert('Aviso', 'Você já possui inscrição neste meetup');
      yield put(createSubscriptionFailure());
    } else {
      const response = yield call(api.post, `subscriptions/${payload.id}`);

      Alert.alert(
        'Inscrição realizada',
        'Sua inscrição foi realizada com sucesso'
      );

      yield put(createSubscriptionSuccess(response.data));
    }
  } catch (err) {
    Alert.alert(
      'Falha na inscrição',
      'Houve uma falha ao realizar sua inscrição, verifique se já não realizou a inscrição nesta meetup'
    );
    yield put(createSubscriptionFailure());
  }
}

export default all([
  takeLatest('@subscription/CREATE_SUBSCRIPTION_REQUEST', createSubscription),
]);
