import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersRequest } from "../store/reducers/ordersSlice";

export const useOrder = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state: any) => state.orders);

  useEffect(() => {
    dispatch(getOrdersRequest());
  }, [dispatch]);

  return { orders, loading, error };
};
