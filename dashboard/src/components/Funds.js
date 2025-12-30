import React from "react";
import { Link } from 'react-router-dom';

const Funds = () => {
    return ( 
        <>
        <div className="funds">
            <p>Instant, zero-cost fund transfer with UPI</p>
            <Link className="btn btn-green">Add funds</Link>
            <Link className="btn btn-blue">Withdraw</Link>
        </div>

        <div className="row">
            <div className="col">
                <span>
                    <p>Equity</p>
                </span>

                <div className="table">
                    <div className="data">
                        <p>Available margin</p>
                        <p className="imp colored">4,403.10</p>
                    </div>
                    <div className="data">
                        <p>Used margin</p>
                        <p className="imp colored">3,743.66</p>
                    </div>
                    <div className="data">
                        <p>Available cash</p>
                        <p className="imp colored">4,043.70</p>
                    </div>
                    <div className="data">
                        <p>Opening Balance</p>
                        <p className="imp colored">4,443.10</p>
                    </div><div className="data">
                        <p>Opening Balance</p>
                        <p className="imp colored">4,403.10</p>
                    </div><div className="data">
                        <p>Payin</p>
                        <p className="imp colored">4,464.10</p>
                    </div><div className="data">
                        <p>SPAN</p>
                        <p className="imp colored">4,403.10</p>
                    </div><div className="data">
                        <p>Delivery margin</p>
                        <p className="imp colored">0.03</p>
                    </div><div className="data">
                        <p>Exposure</p>
                        <p className="imp colored">0.03</p>
                    </div><div className="data">
                        <p>Options premium</p>
                        <p className="imp colored">0.03</p>
                    </div><div className="data">
                        <p>Collateral (Liquid funds)</p>
                        <p className="imp colored">0.10</p>
                    </div><div className="data">
                        <p>Collateral (Equity)</p>
                        <p className="imp colored">0.00</p>
                    </div><div className="data">
                        <p>Total Collateral</p>
                        <p className="imp colored">0.00</p>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="commodity">
                    <p>You don't have a commodity account</p>
                    <Link className="btn btn-blue">Open Account</Link>
                </div>
            </div>
        </div>
        </>
     );
}

export default Funds;