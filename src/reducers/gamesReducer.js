const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.new,
        upcoming: action.payload.upcoming,
      };
      break;

    default:
      return { ...state };
      break;
  }
};

export default gamesReducer;
