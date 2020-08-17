import { DECREMENT } from "../actions";
const decrease = (store) => (next) => (action) => {
  if (action.type === DECREMENT) {
    return next({
      ...action,
      meta: { await: true },
    });
  } else {
    return next(action);
  }
};

export default decrease;
