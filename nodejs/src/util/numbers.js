function transformToNumber(value) {
	if (isNaN(value) || typeof value === "object") return NaN;
	return +value;
}

exports.transformToNumber = transformToNumber;
