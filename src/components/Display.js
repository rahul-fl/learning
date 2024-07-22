import { useSelector } from "react-redux";

function Display(){
    const amount = useSelector(state => state.amount); 
    return(
        <div>
            <h1>Balance Display</h1>
            <div>Balance: {amount}$</div>
        </div>
    );
}

export default Display;