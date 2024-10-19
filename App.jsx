import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Search from "./pages/Search";
import SearchbyName from "./pages/SearchbyName";
import Update from "./Pages/Update";
import EditData from "./Pages/Edit";
const App=()=>{
  return(
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>} >
  <Route index element={<Home/>} /> 
  <Route path="home" element={<Home/>} />
  <Route path="insert" element={<Insert/>} />
  <Route path="display" element={<Display/>} />
  <Route path="search" element={<Search/>} />
  <Route path="searchname" element={<SearchbyName/>} />
  <Route path="update" element={<Update/>} />
  <Route path="editrec/:myid" element={<EditData/>} />
  </Route>
</Routes>
</BrowserRouter>
    </>
  )
}
export default App;