import React from 'react';
import SignInModal from "../components/modals/SignInModal";
import {useDispatch, useSelector} from "react-redux";

const Main = () => {

const mymodal = useSelector(state => state.modal);
const dispatch = useDispatch()


console.log(mymodal);

    return (
        <div>
            <button onClick = {()=> {
                dispatch({
                    type: "TOOGLE"
                })
            }}>Tıkla</button>
        </div>
    )
}

export default Main
