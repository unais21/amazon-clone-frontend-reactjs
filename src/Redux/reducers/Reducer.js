const initialState = JSON.parse(localStorage.getItem("basket"));

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (JSON.parse(localStorage.getItem("basket")) != null) {
        state = JSON.parse(localStorage.getItem("basket"));
        state.push(action.product);
        localStorage.setItem("basket", JSON.stringify(state));
        return state;
        break;
      }
      localStorage.setItem("basket", JSON.stringify([action.product]));
      state = JSON.parse(localStorage.getItem("basket"));
      return state;
      break;

    case "DECREMENT":
        let tempState = JSON.parse(localStorage.getItem("basket"));
        let test = tempState.filter(it=>{
          return it.productIndex != action.product 
        })

        localStorage.setItem("basket", JSON.stringify(test));
        state = JSON.parse(localStorage.getItem("basket"));
        return state;
        break;
    default:
      return state;
      
  }
};

export default Reducer;
