export const INCREMENT = "INCREMENT";

export function increase() {
  return {
    type: INCREMENT,
  };
}

export const DECREMENT = "DECREMENT";

export function decrease() {
  return {
    type: DECREMENT,
  };
}

export const IS_LOADING = "IS_LOADING";

export function loading(status) {
  return {
    type: IS_LOADING,
    payload: {
      loading: status,
    },
  };
}
