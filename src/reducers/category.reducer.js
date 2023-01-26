/** @format */

import { categoryConstants } from "../actions/constants";

/* eslint-disable default-case */
const initState = {
	categories: [],
	loading: false,
	error: null,
};

const buildNewcategories = (parentId, categories, category) => {
	let myCategories = [];
	if (parentId === undefined) {
		return [
			...categories,
			{
				_id: category._id,
				name: category.name,
				slug: category.slug,
				children: [],
			},
		];
	} else {
		for (let cat of categories) {
			if (cat._id === parentId) {
				myCategories.push({
					...cat,
					children:
						cat.children && cat.children.length > 0
							? buildNewcategories(
									parentId,
									[
										...cat.children,
										{
											_id: category._id,
											name: category.name,
											slug: category.slug,
											parentId: category.parentId,
											children: category.children,
										},
									],
									category
							  )
							: [],
				});
			} else {
				myCategories.push({
					...cat,
					children:
						cat.children && cat.children.length > 0
							? buildNewcategories(parentId, cat.children, category)
							: [],
				});
			}
		}
		return myCategories;
	}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
	switch (action.type) {
		case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
			state = {
				...state,
				loading: false,
				categories: action.payload.categories,
			};
			break;
		case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
			state = {
				...state,
				loading: true,
			};
			break;
		case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
			const category = action.payload.category.data;

			const updateCategories = buildNewcategories(
				category.parentId,
				state.categories,
				action.payload.category.data
			);
			state = {
				...state,
				categories: updateCategories,
				loading: false,
			};
			break;
		case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
			state = {
				...state,
				loading: false,
			};
			break;
	}
	return state;
};
