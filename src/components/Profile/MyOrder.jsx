import React from "react";

const orders = [
  {
    id: "ORD-1001",
    date: "2025-12-06",
    status: "Delivered",
    total: 120,
  },
  {
    id: "ORD-1002",
    date: "2025-12-04",
    status: "Shipped",
    total: 80,
  },
  {
    id: "ORD-1003",
    date: "2025-12-01",
    status: "Processing",
    total: 200,
  },
];

export const MyOrders = () => {
  return (
    <div className="max-w-[1400px] mt-[50px] lg:mt-[92px] p-3 md:px-4 px-2 mx-auto">
      <h2 className="text-xl font-semibold px-3 p-2 rounded bg-white mb-3">
        My Orders
      </h2>

      <div className="bg-white min-h-screen shadow rounded overflow-x-auto">
        <table className="divide-y divide-gray-200 table-auto w-full whitespace-nowrap">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 lg:px-3 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-2 lg:px-3 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Date
              </th>
              <th className="px-2 lg:px-3 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-2 lg:px-3 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Total ($)
              </th>
              <th className="px-2 lg:px-3 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-2 lg:px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.id}
                </td>
                <td className=" lg:px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.date}
                </td>
                <td className=" lg:px-3 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 ml-2 lg:ml-0 font-semibold rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.total}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
