# even-challenge

To start project --
npm install
npm Start

Build a Github repository search UI, using the following endpoint from the Github API: https://developer.github.com/v3/search/#search-repositories.

The UI should consist of two elements:

-   a form for specifying search parameters
-   results from the latest search

There are visual mocks for desktop and mobile versions of the UI in `assets.zip`. The UI should be responsive, and should match these mocks as closely as possible. The mocks reference an image which can also be found in `assets.zip`.

You can use any library or framework with the exception of Github SDKs or API clients (i.e., your code should construct HTTP requests directly). Your application should not include a server component.

Treat this as if you were releasing a product to users, aim for code you would want to be in production. Ex: follow good scalability and maintenance practices, test responsively on multiple browsers, catch and handle errors, ensure all requirements are functional etc.

## Details

### Form

The form should include the following fields:

-   **Text** - a text box for full-text search queries, maps to the `q` query parameter
-   **Stars** - a text box that maps to the `stars` qualifier and supports the syntax specified [here](https://help.github.com/articles/searching-repositories/#search-based-on-the-number-of-stars-a-repository-has). If the syntax of the text is invalid upon blur, an inline error message should be displayed.
-   **License** - a dropdown that maps to the `license` qualifier, and includes the MIT, ISC, Apache and GPL license types (using details listed [here](https://help.github.com/articles/licensing-a-repository/#searching-github-by-license-type))
-   **Include Forked** - a checkbox that sets the `fork` qualifier to "true"

Fields should be validated in a user friendly manner.
A search should only be initiated when the user submits the form with valid field entries.

### Results

Each result should include the following data:

-   Repo name
-   Repo owner's name
-   URL to the repo
-   Description
-   Number of stars
-   License
-   Whether or not the repo is forked

While results are loading from the API, all buttons and links in the UI should be disabled and a loading indicator should be displayed. If a search returns no results, that should be explicitly indicated in the results section.

Please be prepared to describe other functionality and how you would address it.

### Query Parameters

The UI should support setting form fields and the current page via query parameters. Also, whenever the user searches or clicks, the URL should be updated with the appropriate query parameters.

### Testing

Please demonstrate your knowledge of unit testing by covering any significant logic or services.
