import { types } from "./types";

export const initialState = {
  squares: [],
};

const reducers = (state, action) => {
  switch (action.type) {
    case types.addOneSquare: {
      let newSquare = state.products.find((product) => product.id === action.payload);
      let squareExist = state.cart.find((product) => product.id === action.payload);
      return {
        ...state,
        squares: [...state.squares, action.payload],
      };
    }

    case types.moveOneSquare: {
      // const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: item.price * (item.quantity + 1),
              }
            : item
        ),
        totalInCart: state.cart.map((item) => item.total),
      };
    }
    case types.resizeOneSquare: {
      // const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: item.price * (item.quantity + 1),
              }
            : item
        ),
        totalInCart: state.cart.map((item) => item.total),
      };
    }

    case types.removeOneSquare: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? item.quantity >= 1
                  ? {
                      ...item,
                      quantity: item.quantity - 1,
                      total: item.price * (item.quantity - 1),
                    }
                  : item
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart.filter((item) => item !== itemToDelete)],
          };
    }

    case types.removeAllSquares: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return {
        ...state,
        cart: [...state.cart.filter((item) => item !== itemToDelete)],
      };
    }

    case types.RESET_CART:
      return initialState;

    default:
      return state;
  }
};
export default reducers;
