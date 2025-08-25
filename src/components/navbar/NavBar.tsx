import { useState } from "react";
import "./NavBar.css";

import { LogOut } from "../../pages/public/Login/LogOut";

const NavBar = () => {

	return (
		<nav className="navbar">
			{/* Logo */}
			<div className="navbar-left">
				<img src="logo.png" alt="Logo" className="logo" />
				<a href="#">Mercado</a>
				<a href="#">Spot</a>
				<a href="#">Contratos</a>

				{/* Menú Copy Trading */}
				<div className="dropdown">
					<button className="dropdown-btn">Copy Trading</button>
					<div className="dropdown-content">
						<a href="#">Copy Trading</a>
						<a href="#">Tabla de clasificación</a>
						<a href="#">Reclutamiento</a>
					</div>
				</div>
			</div>

			{/* Barra de búsqueda */}
			<div className="navbar-center">
				<input type="text" placeholder="Buscar..." />
			</div>
			
			{/* Perfil */}
			<div className="navbar-right">
				<div className="dropdown">
					<button className="dropdown-btn">
					  👤 Perfil
					</button>
					<div className="dropdown-content">
						<a href="#">Ver mi perfil</a>
						<a href="#">Suscripciones</a>
						<LogOut />
					</div>
				</div>
			</div>
			</nav>
	);
};

export default NavBar;