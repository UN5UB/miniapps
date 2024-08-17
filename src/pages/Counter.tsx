import type { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../redux/slices/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h2 className="font-semibold text-[32px]">Counter</h2>
      <div>
        <b className="flex justify-center font-bold text-[36px]">{count}</b>
        <div className="flex gap-5 mt-9">
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 text-white w-40 h-11 rounded-xl"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-yellow-500 text-white w-40 h-11 rounded-xl"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="bg-red-500 text-white w-40 h-11 rounded-xl"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
