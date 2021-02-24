/**
 * 
 * @param {RequestInfo} input 
 * @param {RequestInit} init 
 */
export const _fetch = async (input, init) => {
	const fetchResult = await fetch(input, init);
	const result = await fetchResult.json();

	if (fetchResult.ok) {
		return result;
	}

	const responseError = {
		type: "Error",
		message: result.message || "Что-то пошло не так",
		data: result.data || "",
		code: result.code || "",
	};

	throw { ...new Error(), ...responseError };
};
