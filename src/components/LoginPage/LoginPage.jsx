import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import leftIcon from "../../assets/leftLarge.svg";
import rightIcon from "../../assets/rightLarge.svg";

const LoginPage = () => {
   const navigate = useNavigate();
   const [values, setValues] = useState({
      email: "",
      password: "",
   });

   const inputsChangeHandler = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
      console.log(values);
   };

   const loginHandler = (e) => {
      e.preventDefault();

      if (values.email !== "" && values.password !== "") {
         return navigate("./homepage");
      }
   };
   return (
      <Fragment>
         <LeftBackImage>
            <img src={leftIcon} alt="" />
         </LeftBackImage>
         <FormControl>
            <TitleDiv>
               <img
                  src="http://assets.stickpng.com/images/58482beecef1014c0b5e4a36.png"
                  alt=""
               />
               <h1>Trello</h1>
            </TitleDiv>
         </FormControl>
         <LoginControl>
            <section>
               <div>
                  <h1>Вход в Trello</h1>
                  <div>
                     <form onSubmit={loginHandler}>
                        <div>
                           <input
                              value={values.email}
                              onChange={inputsChangeHandler}
                              type="email"
                              name="email"
                              placeholder="Укажите адрес электронной почты"
                           />
                        </div>
                        <div>
                           <input
                              value={values.password}
                              onChange={inputsChangeHandler}
                              type="password"
                              name="password"
                              placeholder="Введите пароль"
                           />
                        </div>
                     </form>

                     <button type="submit" value="Войти" onClick={loginHandler}>
                        Войти
                     </button>
                  </div>
               </div>

               <div>
                  <p>ИЛИ</p>
                  <AuthDiv>
                     <img
                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                        alt=""
                     />
                     <span>Войти через Google</span>
                  </AuthDiv>
                  <AuthDiv>
                     <img
                        src="https://img.icons8.com/color/48/000000/microsoft.png"
                        alt=""
                     />
                     <span>Войти через Microsoft</span>
                  </AuthDiv>
                  <AuthDiv>
                     <img
                        src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
                        alt=""
                     />
                     <span>Войти через Apple</span>
                  </AuthDiv>
                  <AuthDiv>
                     <img
                        src="https://ty.ie/wp-content/uploads/2019/10/slack.png"
                        alt=""
                     />
                     <span>Войти через Slack</span>
                  </AuthDiv>
               </div>
               <hr />
               <StyledFoot>
                  <a href="/">Не удается войти?</a>
                  <span>•</span>
                  <a href="/">Зарегистрировать аккаунт</a>
               </StyledFoot>
            </section>
         </LoginControl>
         <RightBackImage>
            <img src={rightIcon} alt="" />
         </RightBackImage>
      </Fragment>
   );
};

const AuthDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 320px;
   height: 48px;
   border-radius: 3px;
   box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
   font-family: "Raleway", sans-serif;
   color: #505f79;
   font-weight: 700;
   margin-bottom: 15px;
   cursor: pointer;
   &:hover {
      background-color: #fafbfc;
   }
   img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
   }
   span {
      font-size: 13px;
      padding-top: 3px;
   }
`;
const LeftBackImage = styled.div`
   position: absolute;
   width: 400px;
   bottom: 0;
   left: 0;
   z-index: -999;
   max-width: 30%;
`;
const RightBackImage = styled.div`
   position: absolute;
   width: 400px;
   bottom: 0;
   right: 0;
   z-index: -999;
   max-width: 30%;
`;
const FormControl = styled.div`
   margin: 0;
   box-shadow: 5px;

   & img {
      display: block;
      height: 43px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 40px;
      margin-bottom: 40px;
   }
`;
const TitleDiv = styled.div`
   margin: 40px auto;
   width: 200px;
   height: 43px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-family: "Raleway", sans-serif;
   h1 {
      font-size: 50px;
      color: #253858;
      padding-top: 2px;
   }
`;
const LoginControl = styled.div`
   margin: 0;
   background-attachment: fixed;
   background-repeat: no-repeat;
   background-size: cover;
   & section {
      margin: 0 auto;
      max-width: 400px;
      padding: 0px;
      overflow: visible;
      margin-bottom: 30px;
      background-color: #ffffff;
      border-radius: 8px;
      padding: 25px 40px;
      box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
   }
   & h1 {
      text-align: center;
      color: #5e6c84;
      font-size: 16px;
      line-height: 28px;
      margin-top: 10px;
      margin-bottom: 25px;
   }
   & hr {
      display: block;
      height: 1px;
      border: 0;
      border-bottom: 1px solid hsl(0, 0%, 80%);
      margin: 1em 0;
      padding: 13px 0;
   }

   & input {
      font-size: 14px;
      background-color: #fafbfc;
      border: 2px solid #dfe1e6;
      box-sizing: border-box;
      border-radius: 3px;
      height: 44px;
      width: 320px;
      margin: 0 0 1.2em;
      padding: 8px;
      outline: none;
   }
   & input:focus {
      transition: 0.5s;
      border: 2px solid #4c9aff;
   }
   & button {
      font-size: 14px;
      background: #5aac44;
      height: 35px;
      width: 320px;
      color: #ffffff;
      font-weight: bold;
      border: none;
      border-radius: 3px;
      cursor: pointer;
   }
   & button:hover {
      outline: none;
      background-color: #7ebc6d;
   }
   & p {
      text-align: center;
      font-size: 12px;
      margin-top: 16px;
      margin: 16px;
   }

   & a {
      text-decoration: none;
      color: #0052cc;
      color: hsl(202, 40%, 55%);
      font-size: 14px;
      cursor: pointer;
   }
   & a:hover {
      text-decoration: underline;
      color: blue;
   }
`;

const StyledFoot = styled.div`
   padding: 20px 0 30px;
`;

export default LoginPage;
