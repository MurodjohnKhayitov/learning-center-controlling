import { useContext } from "react";
import { Context } from "../Context/Context";

const useDataContext = () => {
  const ctx = useContext(Context);
  return [ctx.data, ctx.setData];
};

export default useDataContext;