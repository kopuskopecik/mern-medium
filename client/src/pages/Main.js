import React from 'react';
import SignInModal from "../components/modals/SignInModal";
import {useDispatch, useSelector} from "react-redux";

const Main = () => {

const mymodal = useSelector(state => state.modal);
const dispatch = useDispatch()


console.log(mymodal);

    return (
        <>


        <SignInModal />
        </>
    )
}

export default Main
