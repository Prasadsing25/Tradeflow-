import React, { useState, useEffect, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { Link } from 'react-router-dom';
import { watchlist } from "../data/data";
import axios from 'axios';

import "./SellActionWindow.css";

const SellActionWindows = ({ uid }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    const { closeSellWindow } = useContext(GeneralContext);

    useEffect(() => {
        const selectedStock = watchlist.find((item) => item.name === uid);
        if (selectedStock) {
            setStockPrice(selectedStock.price);
        }
    }, [uid]);

    const handleSellClick = () => {
        axios.post('https://tradeflowvista.onrender.com/newOrder', {
            name: uid,
            qty: stockQuantity,
            price: stockPrice,
            mode: "SELL"
        });
        closeSellWindow();
    }

    return (
        <div className="container" id="sell-window" draggable="true">
            <div className="regular-order">
                {/* Visual indicator of which stock is being bought */}
                <div className="header">
                    <h3 style={{color: "#41322dff"}}>Sell {uid}</h3>
                </div>
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            onChange={(e) => setStockQuantity(Number(e.target.value))}
                            value={stockQuantity}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            onChange={(e) => setStockPrice(Number(e.target.value))}
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin gained ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
                <div>
                    <Link className="btn btn-orange" onClick={handleSellClick}>
                        Sell
                    </Link>
                    <Link to="" className="btn btn-grey" onClick={() => closeSellWindow()}>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SellActionWindows;