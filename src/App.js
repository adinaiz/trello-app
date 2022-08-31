import LoginPage from "./components/LoginPage/LoginPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MyMainPage/MainPage";
import PageNotFound from "./components/NotFound/PageNotFound";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/homepage" element={<MainPage />} />
            <Route path="*" element={<PageNotFound />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
