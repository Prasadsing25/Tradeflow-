import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Orders = () => {
    const [allOrders, setAllOrders] = useState([]);

    //fetch orders from dashboard
    useEffect(() => {
        axios.get("http://localhost:3000/addOrders").then((res) => {
            setAllOrders(res.data);
        }).catch((err) => {
            console.error("Axios Error:", err);
            // Optionally set an error state here to show a message to the user
        });
    }, []);
    return (
        <div className="orders">
            {allOrders.length === 0 ? (
                <div className="no-orders">
                    <p>You haven't placed any orders today.</p>
                    <Link to={"/"} className="btn">
                        Get Started
                    </Link>
                </div>

            ) : (
                <div className="order-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Instruments</th>
                                <th>Qty.</th>
                                <th>Price</th>
                                <th>Mode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allOrders.map((order, index) => {
                                const isBuy = order.mode === "BUY";
                                return (
                                    <tr key={index}>
                                        <td>{order.name}</td>
                                        <td>{order.qty}</td>
                                        <td className={isBuy ? "order-buy" : "order-sell"}>{order.price.toFixed(2)}</td>
                                        <td className={isBuy ? "buy" : "sell"}>{order.mode}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    );
}

export default Orders;