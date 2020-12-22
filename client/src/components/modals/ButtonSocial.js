import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, } from "@fortawesome/free-solid-svg-icons";

const ButtonSocial = (props) => {
    const {color, onClick, text} = props;
  return (
    <Button outline color = {color} onClick={onClick} className= "mb-2" size="sm" block>
        <FontAwesomeIcon icon={faAt} /> {text}
    </Button>
  );
};


export default ButtonSocial;