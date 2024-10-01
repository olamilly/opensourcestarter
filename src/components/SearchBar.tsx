import { Languages } from "../languages";
import { useState } from "react";

function SearchBar(props: any) {
	const [filteredLanguages, setFilteredLanguages] = useState<any[]>([]);
	const filterLanguages = (query: String) => {
		if (query == "") {
			setFilteredLanguages([]);
		} else {
			setFilteredLanguages(
				Languages.filter(function (str) {
					return str.toLowerCase().includes(query.toLowerCase());
				})
			);
		}
	};
	return (
		<div className="searchBar d-flex justify-content-center mb-3">
			<div
				className={
					"dropdown-menu d-block position-static pt-0 mx-0 rounded-3 shadow overflow-hidden " +
					(filteredLanguages.length > 0 ? "" : "pb-0")
				}
				data-bs-theme="light"
			>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className={
						"p-2 bg-body-tertiary border-bottom d-flex align-tiems-center " +
						(filteredLanguages.length > 0 ? "mb-2" : "")
					}
				>
					<i className="bx bxl-github"></i>
					<input
						type="search"
						className="form-control"
						autoComplete="false"
						placeholder="Search your language..."
						onChange={(e) => {
							filterLanguages(e.target.value);
						}}
					/>
				</form>
				{filteredLanguages.length > 0 && (
					<ul className="list-unstyled mb-0">
						{filteredLanguages.map((language) => (
							<li
								key={language}
								onClick={() => {
									props.selectLanguage(language);
									setFilteredLanguages([]);
									const inputBox = document.querySelector("input");
									if (inputBox != null) {
										inputBox.value = language;
									}
								}}
							>
								<p className="dropdown-item d-flex align-items-center gap-2 py-2">
									<span className="d-inline-block bg-primary rounded-circle p-1"></span>
									{language}
								</p>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default SearchBar;
