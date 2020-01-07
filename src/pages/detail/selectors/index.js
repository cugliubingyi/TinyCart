export const getProductInfo = state => state.getIn(["detail", "productInfo"]);

export const getCount = state => state.getIn(["detail", "count"]);

export const getCouldSubmit = state => state.getIn(["detail", "couldSubmit"]);

export const getShow = state => state.getIn(["popup", "show"]);
