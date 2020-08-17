import { INCREMENT } from "../actions";
const increase = (store) => (next) => (action) => {
  if (action.type === INCREMENT) {
    return next({
      ...action,
      meta: { await: true },
    });
  } else {
    return next(action);
  }
};

export default increase;
