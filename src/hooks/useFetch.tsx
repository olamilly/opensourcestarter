import { useState } from "react";

// Octokit is Github's SDK
import { Octokit } from "octokit";

const octokit = new Octokit({
	auth: process.env.REACT_APP_GITHUB_SECRET,
});

const useFetch = () => {
	const [data, setData] = useState<any[]>([]);
	const [isPending, setIsPending] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [showRepos, setShowRepos] = useState(false);
	async function getRepos(language: String) {
		setIsPending(true);
		setErrorMessage("");
		setShowRepos(false);
		try {
			await octokit
				.request(
					`GET /search/repositories?q=good+first+issue+language:${language}`,
					{
						headers: {
							"X-GitHub-Api-Version": "2022-11-28",
						},
					}
				)
				.then((response: any) => {
					// console.log(response.data);
					setIsPending(false);
					setData(response.data.items);
					setShowRepos(true);
				});
		} catch (error) {
			console.error(error);
			setIsPending(false);
			setErrorMessage("Error connecting to Github. Check your Internet and ");
		}
	}

	return {
		data,
		isPending,
		errorMessage,
		getRepos,
		showRepos,
		setErrorMessage,
	};
};

export default useFetch;
