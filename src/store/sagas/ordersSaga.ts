import { call, put, takeLatest } from "redux-saga/effects";
import {
  getOrdersRequest,
  getOrdersSuccess,
  getOrdersFailure,
} from "../reducers/ordersSlice";
import { API_URL } from "../../api/api";
import axios, { AxiosResponse } from "axios";
import { Order } from "../../types/Order";

function* fetchOrders() {
  try {
    yield put(getOrdersRequest());
    const response: AxiosResponse<Order[]> = yield call(
      axios.get,
      `${API_URL}/orders`
    );
    yield put(getOrdersSuccess(response.data));
  } catch (error: any) {
    yield put(getOrdersFailure(error.message));
  }
}

export default function* ordersSaga() {
  yield takeLatest(getOrdersRequest.type, fetchOrders);
}
