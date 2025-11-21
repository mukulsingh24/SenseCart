import React,{useEffect,useState} from "react";
import axios from 'axios'

function AdminDashboard(){
    const[orders,setOrders] = useState([])
    useEffect(()=>{
        const fetch = async() =>{
            const response = await axios.get("http://localhost:5000/api/v1/orders/all")
            setOrders(response.data.get)
        }
        fetch()
    },[])
    return(
        <div>
            <h2>Admin Dashboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>User Email</th>
                        <th>Total Price</th>
                        <th>Paid Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.user?.email || "Unknown User"}</td>
                            <td>${order.totalPrice}</td>
                            <td>{order.isPaid ? "Paid" : "Pending"}</td>
                            <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminDashboard
