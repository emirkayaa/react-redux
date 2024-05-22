import { useDispatch } from 'react-redux';
import { incremenet,decrement,incrementByAmount } from '../stores/counterSlice';
    function CounterActions() {
        const dispatch = useDispatch();
        return (
            <div>
                <button onClick={() => dispatch(incremenet())}>
                    arttır
                </button>
                <button onClick={() => dispatch(decrement())}>
                    azalt
                </button>
                <button onClick={() => dispatch(incrementByAmount(4))}>
                4 arttır
                </button>
            </div>
        )
    }

    export default CounterActions;