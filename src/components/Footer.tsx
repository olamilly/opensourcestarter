function Footer() {
	return (
		<div className="footer">
			<footer className="d-flex flex-wrap justify-content-between align-items-center py-1 pt-2 my-1 border-top">
				<p className="col-md-4 mb-0 text-body-secondary pl-2">
					&copy; 2024 Olamilly
				</p>

				<ul className="nav col-md-4 justify-content-end">
					<li className="nav-item">
						<a
							href="https://github.com/olamilly"
							target="_blank"
							rel="noreferrer"
							className="nav-link px-2 text-body-secondary"
						>
							<i className="bx bxl-github"></i>
						</a>
					</li>
					<li className="nav-item">
						<a
							href="https://www.linkedin.com/in/olamide-mustapha/"
							target="_blank"
							rel="noreferrer"
							className="nav-link px-2 text-body-secondary"
						>
							<i className="bx bxl-linkedin-square"></i>
						</a>
					</li>
					<li className="nav-item">
						<a
							href="mailto:tmustaphaismail@gmail.com"
							target="_blank"
							rel="noreferrer"
							className="nav-link px-2 text-body-secondary"
						>
							<i className="bx bxs-envelope"></i>
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}

export default Footer;
