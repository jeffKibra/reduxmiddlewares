import { loading } from "../actions";

const timer = ({ dispatch }) => (next) => (action) => {
  if (!action.meta?.await) {
    return next(action);
  }
  dispatch(loading(true));
  //console.log({ store, next, action });
  setTimeout(() => {
    dispatch(loading(false));
    next(action);
  }, 2000);
};
export default timer;
