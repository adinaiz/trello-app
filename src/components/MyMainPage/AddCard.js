import Input from "../UI/Input";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { taskSliceActions } from "../../store/mytodo-slice";
import StyledButton from "../UI/Button";
import ClearIcon from "@material-ui/icons/Clear";

const Container = styled.div`
   margin: 0.2rem auto;
   margin-left: 16px;
   width: 300px;
`;
const Div = styled.div`
   width: 300px;
   height: 91px;
   border-radius: 5px;
   background-color: #ebecf0;
   padding: 5px;
   margin: 0.3rem auto;
   margin-left: 16px;
   width: 300px;
   border: 1px solid #c4c4c4;
   border-radius: 3px;
   && div {
      display: flex;
	  margin-top: 5px;
	  cursor: pointer;
      align-items: center;
      width: 165px;
      justify-content: space-between;
   }
   & input {
      margin: 0 auto;
      height: 33px;
      width: 285px;
      outline: none;
      border-radius: 3px;
   }
   & button {
      width: 133px;
      height: 32px;
      background: #0079bf;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      color: #ebecf0;
   }
`;
const Title = styled.div`
   margin: 0.4rem auto;
   width: 265px;
   display: flex;
   align-items: center;
   padding-left: 13px;
   height: 40px;
   background-color: #565958;
   opacity: 0.8;
   font-size: 16px;
   border-radius: 3px;
   color: white;
   &&:hover {
      background-color: rgb(141, 142, 143);
      cursor: pointer;
   }
`;

function AddCard() {
   const [inputValue, setInputValue] = useState("");
   const [showToogle, setShowToogle] = useState(false);
   const dispatch = useDispatch();

   const inputChangeHandler = (e) => {
      setInputValue(e.target.value);
   };

   const submitHandler = (e) => {
      e.preventDefault();
      if (inputValue.trim().length === 0) {
         return;
      }
      dispatch(
         taskSliceActions.addTask({
            task: inputValue,
            id: Math.random().toString(),
         })
      );
      setInputValue("");
   };

   return (
      <form onSubmit={submitHandler}>
         <Container>
            {showToogle ? (
               <Div>
                  <Input
                     placeholder="Ввести заголовок списка"
                     onChange={inputChangeHandler}
                     value={inputValue}
                  />
                  <div>
                     <StyledButton>Добавить список</StyledButton>
                     <ClearIcon onClick={() => setShowToogle(false)} />
                  </div>
               </Div>
            ) : (
               <Title onClick={() => setShowToogle(true)}>
                  + Добавить список
               </Title>
            )}
         </Container>
      </form>
   );
}

export default AddCard;
