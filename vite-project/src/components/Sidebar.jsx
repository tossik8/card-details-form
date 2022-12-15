import mobileBackgroud from "./../assets/images/bg-main-mobile.png";
import desktopBackground from "./../assets/images/bg-main-desktop.png";
import "./Sidebar.css";
const Sidebar = () => {
    return (
        <aside>
            <picture>
            <source srcSet={mobileBackgroud} media="375px"/>
            <img src={desktopBackground} alt="background"/>
            </picture>
      </aside>
     );
}
export default Sidebar;
