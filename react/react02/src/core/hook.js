// Custom hook
// Hook luôn bắt đầu băng từ khóa use

import { useContext } from "react";
import { ProviderContext } from "./Provider";

// Hook đọc state từ global
export const useSelector = (callback) => {
  const { state } = useContext(ProviderContext);
  return callback(state);
};

// Hook đọc dispatch từ global
export const useDispatch = () => {
  const { dispatch } = useContext(ProviderContext);
  return dispatch;
};
