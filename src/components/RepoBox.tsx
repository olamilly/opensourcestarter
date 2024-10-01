// import {} from "";

function RepoBox(props: any) {
	return (
		<div className="repoBox col-lg-4 col-md-5 col-sm-11 ">
			<div className="card mb-4 rounded-3 shadow-sm">
				<div className="card-header py-3">
					<h4 className="my-0 ">{props.repository.name}</h4>
				</div>
				<div className="card-body">
					<p className="fullName text-primary">{props.repository.full_name}</p>
					{props.repository.description ? (
						<div>
							{props.repository.description.length <= 60 && (
								<p className="description">{props.repository.description}</p>
							)}
							{props.repository.description.length > 60 && (
								<p className="description">
									{props.repository.description
										.split(" ")
										.slice(0, 59)
										.join(" ")}
									<span> </span>
									<br />
									<a
										className="text-primary"
										href={props.repository.html_url}
										target="_blank"
										rel="noreferrer"
									>
										{" "}
										Read More...
									</a>
								</p>
							)}
						</div>
					) : (
						""
					)}

					<div>
						<span className="badge p-2 text-bg-success rounded-pill">
							{props.repository.language}
						</span>
						{props.repository.stargazers_count > 0 && (
							<div className="repoData">
								<i className="bx bxs-star"></i>
								<span className="mx-1 stars">
									{props.repository.stargazers_count}
								</span>
								<span> stars</span>
							</div>
						)}
					</div>
					{props.repository.open_issues_count > 0 && (
						<div className="repoData">
							<i className="bx bx-bug"></i>
							<span className="mx-1 issues">
								{props.repository.open_issues_count}
							</span>
							<span> Issues</span>
						</div>
					)}
					<div className="repoLinks">
						<a
							href={props.repository.html_url}
							target="_blank"
							rel="noreferrer"
							className="px-2"
						>
							Go to Repo
						</a>
						<a
							href={`${props.repository.html_url}/issues`}
							target="_blank"
							rel="noreferrer"
							className="px-2"
						>
							View Issues
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RepoBox;
