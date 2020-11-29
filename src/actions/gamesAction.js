import axios from "axios";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../api";

export const loadGames = () => async (dispatch) => {
  const popularGames = await axios.get(popularGamesUrl());
  const upcomingGames = await axios.get(upcomingGamesUrl());
  const newGames = await axios.get(newGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGames.data.results,
      upcoming: upcomingGames.data.results,
      new: newGames.data.results,
    },
  });
};
