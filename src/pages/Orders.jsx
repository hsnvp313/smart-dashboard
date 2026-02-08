function Orders() {
  const orders = [
    { id: 1001, customer: "Ahmed", status: "Completed", total: 320 },
    { id: 1002, customer: "Sarah", status: "Pending", total: 180 },
    { id: 1003, customer: "Mohammed", status: "Cancelled", total: 540 },
  ];

  const statusConfig = {
    Completed: { class: 'status-completed', label: 'Completed' },
    Pending: { class: 'status-pending', label: 'Pending' },
    Cancelled: { class: 'status-cancelled', label: 'Cancelled' },
  };

  return (
    <div className="page-content">
      <h2 className="page-title">Orders</h2>
      <div className="orders-table-wrap glass-panel">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total (AED)</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="orders-row">
                <td>
                  <span className="order-id">#{order.id}</span>
                </td>
                <td>{order.customer}</td>
                <td>
                  <span className={`status-pill ${statusConfig[order.status]?.class ?? ''}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <span className="order-total">AED {order.total}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
