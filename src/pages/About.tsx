import { useNavigate } from "react-router-dom";
function About() {
	const navigate = useNavigate();
	async function start() {
		await navigate("/");
		const startButton: any = document.querySelector("button.start");
		if (startButton != null) {
			startButton.click();
		}
	}
	return (
		<div className="about px-2">
			<img
				className="d-block mx-auto my-4 mt-2"
				src="/opensourcestarterlogo.svg"
				alt="OpenSourceStarterLogo"
			/>
			<h1 className=" fw-bold text-body-emphasis">About </h1>
			<div className="col-lg-8 mx-auto">
				<p className="lead mb-4 text-start">
					<strong>Open Source Starter</strong> is a platform designed to make it
					easy for beginner developers to dive into the world of open source.
					<br /> <strong>Our mission</strong> is to bridge the gap between
					aspiring contributors and exciting open source projects by providing a
					curated list of repositories with beginner-friendly issues.
					<br />
				</p>
				<section className="my-4">
					<h4 className="fw-bold">What is Open Source?</h4>
					<p className="text-start">
						Open source software is software whose source code is made freely
						available for modification and distribution. This collaborative
						approach fosters innovation, problem-solving, and community
						building. By contributing to open source projects, you're not just
						writing code; you're becoming part of a global network of developers
						who share a passion for creating better software.
					</p>
				</section>
				<section className="my-4">
					<h4 className="fw-bold">Hacktoberfest: A Month of Open Source</h4>
					<p className="text-start">
						Hacktoberfest is a month-long celebration of open source software.
						It's a global event that encourages developers of all levels to
						contribute to open source projects and learn new skills. Whether
						you're a seasoned developer or just starting out, Hacktoberfest is a
						great opportunity to get involved and make a positive impact on the
						open source community. Learn more about getting involved in
						Hacktoberfest{" "}
						<a
							className="text-primary"
							href="https://hacktoberfest.com/"
							target="_blank"
							rel="noreferrer"
						>
							here
						</a>
						.
					</p>
				</section>
				<section className="my-4">
					<h4 className="fw-bold">How Open Source Starter Can Help You</h4>
					<ul className="text-start">
						<li>
							<strong>Find Beginner-Friendly Repositories: </strong> We curate a
							list of open source projects that have issues specifically marked
							as "good first issue," making it easier for beginners to get
							started.
						</li>
						<li>
							<strong>Filter by Programming Language: </strong>Choose the
							programming language you're most comfortable with, and we'll
							provide tailored recommendations of Open Source projects you can
							start contributing to right away.
						</li>
						<li>
							<strong>Learn and Grow: </strong> Contributing to open source
							projects is a fantastic way to learn new skills, improve your
							coding abilities, and build your portfolio.
						</li>
					</ul>
				</section>
				<section>
					Whether you're a seasoned developer or just starting out,{" "}
					<strong>Open Source Starter</strong> is here to help you take your
					first steps into the world of open source. Join us on this exciting
					journey and become part of a vibrant community of developers who are
					passionate about building a better future together. <br />
					<h4 className="fw-bold py-2">
						Let's Start Your Open Source Journey Today!
					</h4>
					<button
						type="button"
						className="btn btn-primary btn-lg px-4 my-2"
						onClick={start}
					>
						Get Started
					</button>
				</section>
				<br />
				<small className="text-center w-100 d-block">
					Built for Hacktoberfest 2024 by{" "}
					<a
						href="https://github.com/olamilly"
						target="_blank"
						rel="noreferrer"
					>
						Mustapha Olamide
					</a>
				</small>
			</div>
		</div>
	);
}

export default About;
