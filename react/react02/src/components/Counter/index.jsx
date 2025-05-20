import { useDispatch, useSelector } from "../../core/hook";
function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch({
      type: "counter/increase",
      payload: 10,
    });
  };
  const handleDecrease = () => {
    dispatch({
      type: "counter/decrease",
      payload: 1,
    });
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex gap-x-[20px] text-2xl">
        Counter: <span>{count}</span>
      </div>
      <div className="flex gap-x-[20px]">
        <button
          className="w-[50px] h-[20px] bg-orange-500 rounded flex justify-center items-center text-lg font-bold text-white"
          onClick={handleDecrease}
        >
          -
        </button>
        <button
          className="w-[50px] h-[20px] bg-orange-500 rounded flex justify-center items-center text-lg font-bold text-white"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
