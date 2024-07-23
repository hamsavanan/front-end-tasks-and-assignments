import { createBrowserRouter } from "react-router-dom";
import MySliderComp from "../Components/MySliderComp";
import MyImages from "../Components/MyImages";
import ParentComp from "../Components/ParentComp";
import PageNotFound from "../Components/PageNotFound";
// import HOCComp from "../Components/HOCComp";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseStateHookComp from "../Hooks/UseStateHookComp";
import UseEffectHookComp from "../Hooks/UseEffectHookComp";
import UseRefHookComp from "../Hooks/UseRefHookComp";
import MaindashboardComp from "../Layout/MaindashboardComp";
import VirtualDomComp from "../Components/VirtualDomComp";
import FormValComp from "../Components/FormValComp";
import ProductDashboardComp from "../CRUD/ProductDashboardComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductUpdateComp from "../CRUD/ProductUpdateComp";
import LoginComp from "../Layout/LoginComp";
import ProtectedRouting from "../routing/ProtectedRouting";


const router = createBrowserRouter([

  {path:"",element:<LoginComp />},
  {path:"login",element:<LoginComp />},

{path:"maindashboard",element:<ProtectedRouting Component={MaindashboardComp} />,children:[
  // default.routing
  {path:"",element:<MySliderComp />},

  // naming.routing
    {path:"myslider",element:<MySliderComp />},  
    {path:"myimages",element:<MyImages />}, 
    
  //   parameterized.routing
  {path:"parent/:id",element:<ParentComp />}, 
  {path:"parent",element:<ParentComp />}, 
  {path:"virtualdom",element:<VirtualDomComp />}, 
  {path:"formval",element:<FormValComp />}, 
  {path:"proddash",element:<ProductDashboardComp />}, 
  {path:"prodadd",element:<ProductAddComp />}, 
  {path:"produpdate/:id",element:<ProductUpdateComp />}, 
  
  // child routing
  {path:"reacthook",element:<ReactHooksComp />,children:[
    {path:"usestate",element:<UseStateHookComp />},
    {path:"useeffect",element:<UseEffectHookComp />},
    {path:"useref",element:<UseRefHookComp />},
  ]},
  
] },


// wild.routing
{path:"*",element:<PageNotFound/>}

])

export default router;