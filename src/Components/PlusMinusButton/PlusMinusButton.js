import "./plusMinusButton.scss"

const PlusMinusButton = () => {
    let [count, setCount] = [0, 0];

    function incrementCount() {
      count = count + 1;
      setCount(count);
    }
    function decrementCount() {
      count = count - 1;
      setCount(count);
    }
    return (
      <div className="button--plusminus">
        <span className="minus" onClick={decrementCount}>-</span>
        <span className="counter">{count}</span>
        <span className="plus" onClick={incrementCount}>+</span>
      </div>
    );
}

export default PlusMinusButton;