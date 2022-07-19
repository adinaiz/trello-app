import LoginPage from "./components/LoginPage/LoginPage";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MyMainPage/MainPage";
import PageNotFound from "./components/NotFound/PageNotFound";
import { Suspense } from "react";


function App() {
   return (
      <BrowserRouter>
         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               <Route path="/" element={<Navigate replace to="/login" />} />
               <Route path="/login" element={<LoginPage />}></Route>
               <Route path="/homepage" element={<MainPage />}></Route>
               <Route path='*' element={<PageNotFound/>}/>
            </Routes>
         </Suspense>
      </BrowserRouter>
   );
}

export default App;
