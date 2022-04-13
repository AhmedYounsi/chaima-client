

export const LoadingAction = (payload,dispatch)  => {
    dispatch({
      type: "SetLoading",
      payload: payload,
    });
  };