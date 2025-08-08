import "./NavBar.css";
 

import estus from "../../assets/img/estus.png";
import estusMagic from "../../assets/img/estus_magic.png";
import solaire from "../../assets/img/solaire2.png";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

const NavBar = () => {
	
	const { user } = useAuth();
  console.log("DATOS DEL USUARIO:___"+user?.userName+"___"+user?.role+"___"+user?.id);
	
	 useEffect(() => {
    const menuButton = document.querySelector(".menu") as HTMLElement | null;
    const menuList = document.querySelector(".navbar-left ul") as HTMLElement | null;

    if (!menuButton || !menuList) return;

    const handleMenuClick = () => {
      if (window.innerWidth <= 670) {
        const isVisible = menuList.style.display === "flex";
        menuList.style.display = isVisible ? "none" : "flex";

        if (!isVisible) {
          menuList.style.flexDirection = "column";
          menuList.style.position = "absolute";
          menuList.style.top = "70px";
          menuList.style.left = "0";
          menuList.style.backgroundColor = "#13151a";
          menuList.style.width = "100%";
          menuList.style.padding = "10px";
        } else {
          resetStyles(menuList);
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 670) {
        menuList.style.display = "flex";
        resetStyles(menuList);
      } else {
        menuList.style.display = "none";
      }
    };

    const resetStyles = (el: HTMLElement) => {
      el.style.flexDirection = "";
      el.style.position = "";
      el.style.top = "";
      el.style.left = "";
      el.style.backgroundColor = "";
      el.style.width = "";
      el.style.padding = "";
    };

    menuButton.addEventListener("click", handleMenuClick);
    window.addEventListener("resize", handleResize);

    return () => {
      menuButton.removeEventListener("click", handleMenuClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    return(
		<>
			<nav>
				<img className="menu" src={solaire} alt="menu"/>
				<div className="navbar-left">
					<img src={estus} alt="logo" className="logo"/>
					<ul>
					{/* 	<li><a href="/">dark</a></li>
						<li><a  href="/">souls</a></li>
						<li><a href="/">ElectronicS</a></li>
						<li><a href="/">FurnitureS</a></li>
						<li><a href="/">ToyS</a></li> */}
						<li><a href="/">{user?.userName}</a></li>
            <li><a href="/">{user?.role}</a></li>
            <li><a href="/">{user?.id}</a></li>
            <li><a href="/">{user?.email}</a></li>
					</ul>
				</div>
				<div className="navbar-right">
					 <ul>
					 	<li className="navbar-shopping-cart">
					 	<li className="navbar-email">{user?.userName}</li>
					 		<img style={{maxHeight: "60px"}} className="" src={estusMagic} alt="shopping cart" />
					 		<div>2</div>
					 	</li>
					 </ul>
				</div>
			</nav>
		</>
		

	)

	}
		
			
				export default NavBar;