import React from 'react';
import "./Counter.css"

function Counter() {

    const [counter, setCounter] = React.useState(0);



    function incrementCounter(add) {
        setCounter(counter + add)
    }

    function decrementCounter(sub) {
        setCounter(counter - sub)
    }

    function resetCounter() {
        setCounter(0);
    }

    return (

        <div className="counter">

            <div>
                <button
                    className="counterButton"
                    onClick={() => (incrementCounter(1))}>+1
                </button>

                <button
                    className="counterButton"
                    onClick={() => (decrementCounter(1))}>-1
                </button>
            </div>

            <div>
                <button
                    className="counterButton"
                    onClick={() => (incrementCounter(3))}>+3
                </button>

                <button
                    className="counterButton"
                    onClick={() => (decrementCounter(3))}>-3
                </button>
            </div>

            <div>
                <button
                    className="counterButton"
                    onClick={() => (incrementCounter(5))}>+5
                </button>

                <button
                    className="counterButton"
                    onClick={() => (decrementCounter(5))}>-5
                </button>
            </div>
            <span className="count">{counter}</span>

            <div>
                <button
                    className="resetButton"
                    onClick={() => resetCounter()}>RESET
                </button>

            </div>
        </div>
    )
}

export default Counter;