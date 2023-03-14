import React from "react";
import { useOrder } from "../../hooks/useOrder";
import { Order } from "../../types/Order";

const Home = () => {
  const { orders, loading, error } = useOrder();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow overflow-hidden rounded-md divide-y divide-gray-200">
        {loading && <div>Loading...</div>}
        {orders.map((order: Order) => (
          <div key={order.idenfication.order_id}>
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {order.idenfication.order_id}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                {order.idenfication.data_source}
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Valor</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    R${order.transaction.value}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {order.transaction.status}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
