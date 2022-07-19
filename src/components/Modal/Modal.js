import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import styled from "styled-components";
import Button from "../UI/Button";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { uiSliceActions } from "../../store/uiSlice";

const StyledBackdrop = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   z-index: 10;
   background: rgba(0, 0, 0, 0.75);
`;
const Container = styled.div`
   z-index: 100;
   top: 150px;
   left: 460px;
   width: 550px;
   height: 240px;
   background-color: #ebecf0;
   box-shadow: 0 2px 8px rgb(0, 0, 0, 0.26);
   padding: 25px;
   position: fixed;
   border-radius: 6px;
`;
const Description = styled.div`
   margin: 10px;
   display: flex;
   width: 130px;
   justify-content: space-between;
`;
const Textarea = styled.textarea`
   width: 460px;
   padding: 10px;
   margin-left: 20px;
   height: 90px;
   border-radius: 5px;
`;
const Save = styled.div`
   margin: 10px 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   && div {
      display: flex;
      align-items: center;
	  cursor: pointer;

   }
   && span {
      background: #bdc2c4;
      border-radius: 3px;
      padding: 10px;
	  cursor: pointer;
   }
`;

function Backdrop({ onConfirm }) {
   return <StyledBackdrop onClick={onConfirm}></StyledBackdrop>;
}
function ModalOverly({ onConfirm }) {
   return (
      <Container>
            <Description>
               <h3>Описание</h3>
            </Description>
            <Textarea />
            <Save>
               <div>
                  <Button>Сохранить</Button>
                  <ClearIcon onClick={onConfirm} />
               </div>
               <span>Помощь в форматировании</span>
            </Save>
      </Container>
   );
}

const Modal = ({ todos }) => {
   const dispatch = useDispatch();
   const cancelHandler = () => {
      dispatch(uiSliceActions.cancel());
   };
   return (
      <>
         {ReactDOM.createPortal(
            <Backdrop onConfirm={cancelHandler} />,
            document.getElementById("backdrop")
         )}
         {ReactDOM.createPortal(
            <ModalOverly onConfirm={cancelHandler} todos={todos} />,
            document.getElementById("modal-root")
         )}
      </>
   );
};

export default Modal;
