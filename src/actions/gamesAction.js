import axios from  'axios';
import {popularGamesUrl,upcomingGamesUrl,newGamesUrl,searchGameUrl} from '../api';

export const loadGames = () => async(dispatch)=>{
	//se importo la funcion popularGamesUrla que retorna url y se le pasa a axios
	//se hace la consulta
	const popularData = await axios.get(popularGamesUrl());
	const newGamesData = await axios.get(upcomingGamesUrl());
	const upcomingGamesData = await axios.get(newGamesUrl());
	//se diapara la consulta al reducer
	dispatch({
		type:"FETCH_GAMES",
		payload:{
			popular: popularData.data.results,
			newGames : newGamesData.data.results,
			upcoming : upcomingGamesData.data.results,
		}
	})
}


export const fetchSearch = (game_name) => async(dispatch)=>{
	const searchGamesData = await axios.get(searchGameUrl(game_name));

	dispatch({
		type:"FETCH_SEARCHED",
		payload:{
			searched: searchGamesData.data.results
		}
	})
}