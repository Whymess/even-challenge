function validate(repoName, lisenceAgreement, range) {
	return {
		lisenceAgreement: lisenceAgreement.length === 0,
		repoName: repoName.length === 0,
		range: checkRangeOrder(range)
	};
}

function checkArray(range) {
	if (range.filter(item => item !== "").length === 0) {
		return false;
	} else {
		return true;
	}
}

function checkRangeOrder(range) {
	if (range[0] < range[1]) {
		return true;
	} else {
		return false;
	}
}

export { validate, checkArray, checkRangeOrder };
