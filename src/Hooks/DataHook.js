import { useContext } from "react";
import { AllDataBase } from "../Context/Context";

const useDataContext = () => {
  const ctx = useContext(AllDataBase);
  return [ctx.data, ctx.setData];
};

export default useDataContext;