import { useState } from "react";
import SearchBar from "../components/SearchBar";
import useFetch from "../hooks/useFetch";
import RepoBox from "../components/RepoBox";
import { Link } from "react-router-dom";
function Home() {
	const [showStartButtons, setShowStartButtons] = useState(true);
	const [showSearchBar, setShowSearchBar] = useState(false);
	const [selectedLanguage, setselectedLanguage] = useState<String>("");
	const {
		data: repos,
		isPending,
		errorMessage,
		getRepos,
		showRepos,
		setErrorMessage,
	} = useFetch();
	return (
		<div className="hero px-4 py-5 my-5 text-center ">
			<img
				className="d-block mx-auto mb-4"
				src="/opensourcestarterlogo.svg"
				alt="OpenSourceStarterLogo"
			/>
			<h1 className="display-5 fw-bold text-body-emphasis">
				Open Source Starter{" "}
			</h1>
			<div className="col-lg-8 mx-auto">
				<p className="lead mb-4">
					Open Source Starter is a tool to help beginner developers get started
					on contributing to Open Source Projects on Github by providing repos
					with beginner friendly issues based on their preferred programming
					language.
				</p>
			</div>
			{showStartButtons && (
				<div className="d-flex justify-content-center">
					<button
						type="button"
						className="btn btn-primary btn-lg px-4 mx-2 start "
						onClick={() => {
							setShowStartButtons(false);
							setShowSearchBar(true);
						}}
					>
						Get Started
					</button>
					<Link to="/about">
						<button
							type="button"
							className="btn btn-outline-primary btn-lg px-4 mx-2"
						>
							Learn More
						</button>
					</Link>
				</div>
			)}
			{showSearchBar && (
				<div>
					<h4 className="fw-normal">
						Find some Open Source projects that might need your help.
					</h4>
					<SearchBar
						selectLanguage={(language: String) => {
							getRepos(language);
							setselectedLanguage(language);
						}}
					/>
				</div>
			)}
			{isPending && (
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			)}
			{errorMessage && (
				<p className="error">
					{errorMessage}
					<span
						onClick={() => {
							setErrorMessage("");
							const inputBox = document.querySelector("input");
							if (inputBox != null) {
								inputBox.focus();
								inputBox.value = "";
							}
						}}
					>
						try again
					</span>
				</p>
			)}
			{showRepos &&
				(repos.length > 0 ? (
					<div>
						<div className="row row-eq-height justify-content-evenly align-items-center">
							{repos.map((repo: any) => (
								<RepoBox repository={repo} />
							))}
						</div>
						<p>
							Find more {selectedLanguage} issues on{" "}
							<a
								className="text-primary"
								href={`https://www.codetriage.com/?language=${selectedLanguage}`}
								target="_blank"
								rel="noreferrer"
							>
								CodeTriage
							</a>{" "}
						</p>
					</div>
				) : (
					<p>
						😔 It looks like we couldn't find any beginner friendly issues on
						any Github repositories that use {selectedLanguage}.<br />
						<br /> However, there are a lot of {selectedLanguage} repos with
						tons of issues. Check them out on{" "}
						<a
							className="text-primary"
							href={`https://www.codetriage.com/?language=${selectedLanguage}`}
							target="_blank"
							rel="noreferrer"
						>
							CodeTriage
						</a>{" "}
						and see which one you can help solve or try searching another
						programming language.
					</p>
				))}
		</div>
	);
}

export default Home;
