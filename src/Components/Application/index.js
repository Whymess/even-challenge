import React, { Component } from "react";

// local dependencies
import {
	Header,
	TextInput,
	Stars,
	LicenseInput,
	ForkedCheckedBox,
	SearchButton,
	Footer,
	Loader,
	Content
} from "../../Components/";
import "./index.css";
import { validate } from "../Helpers/";

export default class Application extends Component {
	state = {
		stars: {
			range: [],
			exact: "",
			atLeast: ""
		},
		repoName: "",
		IncludeFork: "",
		lisenceAgreement: "",
		isLoading: false,
		data: "",
		errorMessage: "",
		errors: {
			ErrorForRange: false,
			ErrorForRepoName: false,
			ErrorForLicenseInput: false
		}
	};

	handleChange = e => {
		let { value, name } = e.target;
		this.setState({
			[name]: value
		});
	};

	handleOnFocus = field => evt => {
		this.setState({
			errors: { ...this.state.errors, [field]: false }
		});
	};

	handleStarChange = index => e => {
		let { name, value } = e.target;
		if (name === "range") {
			const range = Array.from(this.state.stars.range);
			range[index] = value;
			this.setState({
				stars: { ...this.state.stars, range }
			});
		} else {
			this.setState({
				stars: { ...this.state.stars, [name]: value }
			});
		}
	};

	handleChangeForkedCheckedBox = name => event => {
		this.setState({ [name]: event.target.checked });
	};

	handleSubmit = evt => {
		let resultFromCanBeSubmitted = this.canBeSubmitted();
		let { isDisabled } = resultFromCanBeSubmitted;
		let { LisenceAgreement, repoName, range } = resultFromCanBeSubmitted.errors;

		if (isDisabled) {
			this.setState({
				errors: {
					...this.state.errors,
					ErrorForLicenseInput: LisenceAgreement,
					ErrorForRepoName: repoName,
					ErrorForRange: range
				}
			});
			return false;
		} else {
			this.prepQueryStringWithCorrectParams();
		}
	};

	canBeSubmitted = () => {
		let { repoName, lisenceAgreement } = this.state;
		let { range } = this.state.stars;
		let errors = validate(repoName, lisenceAgreement, range);
		let isDisabled = Object.keys(errors).some(x => errors[x]);
		return { isDisabled, errors };
	};

	prepQueryStringWithCorrectParams = () => {
		let { stars, repoName, IncludeFork, lisenceAgreement } = this.state;
		for (let key in stars) {
			if (stars[key]) {
				if (key === "exact") {
					var formattedStars = stars[key];
				}
				if (key === "atLeast") {
					formattedStars = `>=${stars[key]}`;
				}
				if (key === "range") {
					formattedStars = `${stars[key][0]}..${stars[key][1]}`;
				}
			}
		}
		const baseUrl = "https://api.github.com/search/repositories";
		let queryWithFork = `?q=${repoName}+stars:${formattedStars}+license:${lisenceAgreement}+fork:true`;
		let queryWithOutFork = `?q=${repoName}+stars:${formattedStars}+license:${lisenceAgreement}`;
		const fullURLFork = baseUrl + queryWithFork;
		const fullUrl = baseUrl + queryWithOutFork;
		if (IncludeFork) {
			this.fetchRepos(fullURLFork);
		} else {
			this.fetchRepos(fullUrl);
		}
	};

	fetchRepos = url => {
		this.setState({
			isLoading: true
		});
		fetch(url)
			.then(response => {
				if (response.ok) {
					return response;
				}
				// By default, an error response status (4xx, 5xx) does NOT cause the promise to reject!
				throw Error(response.statusText);
			})
			.then(response => {
				return response.json();
			})
			.then(json => {
				this.setState({
					data: json,
					isLoading: false
				});
			})
			.catch(error => {
				let { message } = error;
				this.setState({
					isLoading: false,
					errorMessage: message
				});
			});
	};

	renderContentBoxes = () => {
		let { items } = this.state.data;
		if (items.length === 0) {
			return <div> No content found! Try another name :) </div>;
		}
		return (
			items &&
			items.map((el, i) => {
				return <Content {...el} key={i} />;
			})
		);
	};

	render() {
		let { data, isLoading, IncludeFork, errorMessage } = this.state;
		let {
			ErrorForRepoName,
			ErrorForLicenseInput,
			ErrorForRange
		} = this.state.errors;
		let { range, atLeast, exact } = this.state.stars;
		return (
			<>
				<div className="main">
					<Header />
					<div className="container form mt-4 d-flex justify-content-center">
						<div className="row ">
							<div className="col-lg-12 col-md-12 col-sm-12">
								<h1 className="title">
									Even Financial Github Repository Search
								</h1>
							</div>
						</div>
					</div>
					<div className="container form mt-4">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-6 mt-1">
								<TextInput
									onFocus={this.handleOnFocus("ErrorForRepoName")}
									errorMessage="Please fill in the text name"
									error={ErrorForRepoName}
									handleChange={this.handleChange}
									title="Text"
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6 mt-1">
								<Stars
									onFocus={this.handleOnFocus("ErrorForRange")}
									error={ErrorForRange}
									exact={exact}
									range={range}
									atLeast={atLeast}
									handleStarChange={this.handleStarChange}
								/>
							</div>
						</div>
						<div className="row mt-2">
							<div className="col-lg-6 col-md-6 col-sm-6 mt-1">
								<LicenseInput
									error={ErrorForLicenseInput}
									errorMessage="Please select a Lisence"
									onFocus={this.handleOnFocus("ErrorForLicenseInput")}
									handleChange={this.handleChange}
									title="License"
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6 mt-1">
								<ForkedCheckedBox
									checked={IncludeFork}
									handleChangeForkedCheckedBox={
										this.handleChangeForkedCheckedBox
									}
									title="Include Forked"
								/>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row ">
							<div className="col">
								<SearchButton
									isLoading={isLoading}
									handleSubmit={this.handleSubmit}
									title="Search"
								/>
							</div>
						</div>
					</div>

					<div className="container search-results mt-5">
						<div className="row border-top">
							<div className="col">
								<div className="instructions mt-4">
									{data === "" ? (
										"Please enter query and click Search button above, results appear here"
									) : (
										<div>
											SEARCH results
											{this.renderContentBoxes()}
										</div>
									)}
								</div>
							</div>
						</div>
					</div>

					{isLoading ? <Loader /> : ""}
					{errorMessage ? (
						<h1 style={{ color: "firebrick", textAlign: "center" }}>
							ERROR: {errorMessage}. Please try again{" "}
						</h1>
					) : (
						""
					)}
				</div>
				<Footer title="2017 Even Financial, Inc - CONFIDENTIAL" />
			</>
		);
	}
}
