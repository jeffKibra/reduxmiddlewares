import { IS_LOADING } from "./actions";

export default function loadingReducer(loading = false, action) {
  switch (action.type) {
    case IS_LOADING:
      return action.payload.loading;
    default:
      return loading;
  }
}
