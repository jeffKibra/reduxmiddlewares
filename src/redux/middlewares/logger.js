const logger = (store) => (next) => (action) => {
  //console.log({ store, next, action });
  action = { ...action, logged: true };
  return next(action);
};

export default logger;
