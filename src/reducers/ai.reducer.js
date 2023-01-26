/** @format */

import { productConstants } from "../actions/constants";

const initialState = {
	response: "Hi there! How can I help you?",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case productConstants.TALK_TO_BOT_REQUEST:
			state = {
				...state,
				loading: true,
			};
			break;
		case productConstants.TALK_TO_BOT_SUCCESS:
			state = {
				...state,
				loading: false,
				response: action.payload.response,
			};
			break;
		case productConstants.TALK_TO_BOT_FAILURE:
			state = {
				...state,
				loading: false,
			};
			break;
	}
	return state;
};
