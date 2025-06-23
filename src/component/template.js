import Header from "./header.js";
import Footer from "./footer.js";
import {Outlet} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
 
    const App = () => {

     
        const { t } = useTranslation();
        return(<div className="tt-magic-cursor">
             {/* Preloader Start */}
{/* <div className="preloader">
  <div className="loading-container">
    <div className="loading" />
    <div id="loading-icon"><img src="./assets/images/loader.svg" alt /></div>
  </div>
</div> */}
{/* Preloader End */}
 


         <Header/>   
         <Outlet/>
         <Footer/>
         

        </div>);

        
    }

    export default App;