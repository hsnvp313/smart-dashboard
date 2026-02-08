function Orders(){
    const orders=[
        {id:1001,customer: "Ahmed", status:"Completed"},
        {id:1002,customer: "Mohamed", status:"Pending"},
        {id:1003,customer: "Ali", status:"Cancelled"},
    ];
    return(
        <div>
            <h2>Orders</h2>

            <table style={StyleSheet.table}>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) =>
                            (<tr key={order.id}>
                            <td>#{order.id}</td>
                            <td>{order.customer}</td>
                            <td style={{
                                color:
                                    order.status === "Completed" ? "green" :
                                    order.status === "Pending" ? "orange" :
                                    order.status === "Cancelled" ? "red" : "inherit"
                            }}>
                                    {order.status}
                            </td>
                        </tr>
                            ))}
                    </tbody>
            </table>
        </div>
    );
}

const styles={
    table:{
        width:"100%",
        berderCollapse:"collapse"
    }
};

export default Orders