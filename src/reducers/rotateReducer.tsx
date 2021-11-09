// eslint-disable-next-line import/no-anonymous-default-export
export default (state:any, action:any) => {
    switch (action.type) {
      case "rotate":
        return {
          rotating: action.payload
        };
      default:
        return state;
    }
  };