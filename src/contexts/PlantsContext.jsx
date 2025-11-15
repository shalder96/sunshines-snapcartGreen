import { createContext, useState } from "react";
import { plants } from "../data/plants";

export const PlantsContext = createContext();

const PlantsContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const value = { plants, currency, delivery_fee, 
    search, setSearch, showSearch, setShowSearch
   };

  return (
    <PlantsContext.Provider value={value}>
      {props.children}
    </PlantsContext.Provider>
  );
};

export default PlantsContextProvider;
