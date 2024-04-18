
import "./CSS/Admin.css";
import AppHeader from '../Compenat/Admin/ComponentsAdmin/AppHeader';
import PageContent from "../Compenat/Admin/ComponentsAdmin/PageContent";
import SideMenu from "../Compenat/Admin/ComponentsAdmin/SideMenu";

function Adminnada() {
  return (
    <div className="Admin">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
     
    </div>
  );
}
export default Adminnada;
