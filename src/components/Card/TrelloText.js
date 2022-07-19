import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import StyledButton from "../UI/Button";
import ClearIcon from "@material-ui/icons/Clear";
import { taskSliceActions } from "../../store/mytodo-slice";

const TextArea = styled.textarea`
   font-family: sans-serif;
   margin: 10px auto;
   padding: 5px;
   font-size: 15px;
   border-radius: 3px;
   box-shadow: 0 2px 6px rgb(0, 0, 0, 0.26);
   max-width: 270px;
   max-height: 80px;
   min-height: 80px;
   min-width: 270px;
`;
const Container = styled.div`
   display: flex;
   align-items: center;
   width: 175px;
   justify-content: space-between;
   cursor: pointer;
   & button {
      width: 143px;
      height: 32px;
      background: #0079bf;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      color: #ebecf0;
   }
`;
const StyledCard = styled.div`
   margin: 0;
   width: 275px;
   display: flex;
   justify-content: space-between;
   padding: 5px;
   cursor: pointer;
   button {
      width: 228px;
      height: 28px;
      color: #5e6c84;
      cursor: pointer;
      border: none;
      border-radius: 3px;
      background: none;
      &:hover {
         background: #c0c0c0;
      }
   }
   img {
      width: 25px;
      cursor: pointer;
      border-radius: 4px;
      opacity: 0.7;
      &:hover {
         opacity: 0.9;
      }
   }
`;

const TrelloText = (props) => {
   const [show, setShow] = useState(false);
   const [inputValue, setInputValue] = useState("");
   const dispatch = useDispatch();

   const inputChangeHandler = (e) => {
      setInputValue(e.target.value);
   };
   const submitHandler = (e, id) => {
      e.preventDefault();
      if (inputValue.trim().length > 0) {
         const data = {
            item: inputValue,
            id: Math.random().toString(),
         };
         dispatch(taskSliceActions.addItem({ data, id }));
      }
      setInputValue("");
   };

   return (
      <div>
         {show ? (
            <div>
               <TextArea
                  onChange={(e) => inputChangeHandler(e)}
                  value={inputValue}
                  placeholder="Ввести название карточки"
               />
               <Container>
                  <StyledButton onClick={(e) => submitHandler(e, props.id)}>
                     Добавить карточку
                  </StyledButton>
                  <ClearIcon onClick={() => setShow(false)} />
               </Container>
            </div>
         ) : (
            <StyledCard>
               <button onClick={(e) => setShow(true)} id={props.id}>
                  + Добавить карточку
               </button>
               <img src="https://img.icons8.com/external-others-iconmarket/64/000000/external-galery-navigation-others-iconmarket-3.png" />
            </StyledCard>
         )}
      </div>
   );
};

export default TrelloText;
