import { createContext } from "react";
import { plants } from "../data/plants";

export const PlantsContext = createContext();

const PlantsContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;

  const value = { plants, currency, delivery_fee };

  return (
    <PlantsContext.Provider value={value}>
      {props.children}
    </PlantsContext.Provider>
  );
};

export default PlantsContextProvider;
