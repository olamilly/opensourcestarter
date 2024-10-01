// import {  } from ""
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="d-flex flex-wrap justify-content-between py-3 px-2 pb-0 border-bottom">
			<NavLink
				to="/"
				className="d-flex align-items-center mb-1 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
			>
				<img
					className="bi mr-auto"
					width="40"
					height="32"
					src="/opensourcestarterlogo.svg"
					alt="open source starter logo"
				/>
			</NavLink>
			<ul className="nav nav-pills">
				<li className="nav-item px-2">
					<NavLink
						to="/"
						className={({ isActive }) =>
							["link_nav", isActive ? "currentLink" : null]
								.filter(Boolean)
								.join(" ")
						}
						end
					>
						Home
					</NavLink>
				</li>
				<li className="nav-item px-2">
					<NavLink
						to="/about"
						className={({ isActive }) =>
							["link_nav", isActive ? "currentLink" : null]
								.filter(Boolean)
								.join(" ")
						}
						end
					>
						About
					</NavLink>
				</li>
			</ul>
		</header>
	);
}

export default Header;
