import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { uiSliceActions } from "../../store/uiSlice";

const Li = styled.li`
   padding: 5px;
   margin-bottom: 10px;
   font-size: 15px;
   width: 260px;
   background: white;
   color: black;
   border-radius: 4px;
   list-style: none;
   cursor: pointer;
   &:hover {
      transition: 0.5s;
      background: silver;
   }
`;

function TrelloCardItem({ todos }) {
   const dispatch = useDispatch();
   const showModalHandler = () => {
      dispatch(uiSliceActions.toogle());
   };
   return (
      <ul>
         {todos.map((el) => (
            <Li onClick={showModalHandler} key={el.id}>
               {el.item}
            </Li>
         ))}
      </ul>
   );
}

export default TrelloCardItem;
