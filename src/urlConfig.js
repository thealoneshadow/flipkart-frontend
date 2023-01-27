/** @format */

export const api = "https://flipkart-backend.netlify.app/.netlify/functions/api";
export const generatePublicUrl = (fileName) => {
	return `http://localhost:2000/public/${fileName}`;
};
