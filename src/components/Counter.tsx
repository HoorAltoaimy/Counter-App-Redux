import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, reset} from './counterSlice';
import { RootState } from './store';
 

const Counter = () => {
    const count = useSelector((state: RootState) => state.counterR.count);
    const dispatch = useDispatch();
    
    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleReset = () => {
        dispatch(reset());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}

export default Counter;
