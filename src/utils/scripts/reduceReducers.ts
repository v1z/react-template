export const reduceReducers = (...reducersArray: any) =>
  (previousState: any, currentAction: any) => {
    const reducerFunction = (accumulator: any, currentReducer: any) => currentReducer(accumulator, currentAction);

    return reducersArray.reduce(reducerFunction, previousState);
  };
