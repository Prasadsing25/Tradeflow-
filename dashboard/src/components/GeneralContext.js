import React, { useState } from "react";
import BuyActionWindows from "./BuyActionWindow.js";
import SellActionWindows from "./SellActionWindow.js";

const GeneralContext = React.createContext({
    openBuyWindow: (uid) => {}, //for buy
    closeBuyWindow: () => {},
    openSellWindow: (uid) => {}, //for sell
    closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockUID] = useState("");
    
    const handleOpenBuyWindow = (uid) =>{
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    }

    const handleCloseBuyWindow = () =>{
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    }

    const handleOpenSellWindow = (uid) =>{
        setIsSellWindowOpen(true);
        setSelectedStockUID(uid);
    }

    const handleCloseSellWindow = () => {
        setIsSellWindowOpen(false);
        setSelectedStockUID("");
    }

    return (
        <GeneralContext.Provider
        value={{
            openBuyWindow: handleOpenBuyWindow,
            closeBuyWindow: handleCloseBuyWindow,
            openSellWindow: handleOpenSellWindow,
            closeSellWindow: handleCloseSellWindow,
        }}
        >
            {props.children}
            {isBuyWindowOpen && <BuyActionWindows uid={selectedStockUID} />}
            {isSellWindowOpen && <SellActionWindows uid={selectedStockUID} />}
        </GeneralContext.Provider>
    )
}

export default GeneralContext;