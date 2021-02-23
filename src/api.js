//url
const base_url = "https://api.rawg.io/api/";
//variables de las consultas 
const getCurrentMonth = ()=>{
	const month = new Date().getMonth()+1;
	if(month<10){
		//retornara el mes con un cero delante ejemplo
		//septiembre sera igual 09
		return `0${month}`;
	}else{
		return month;
	}

}

const getCurrentDay = ()=>{
	const day = new Date().getDay();
	if(day<10){
		//retornara el dia con un cero delante ejemplo si el dia 
		//es menor a 10
		return `0${day}`;
	}else{
		return day;
	}

}

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
//juegos populares

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=9`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=9`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-realease`
//funcion con que retrona la url juegos populares
export const popularGamesUrl =()=>`${base_url}${popular_games}`;

export const upcomingGamesUrl=()=>`${base_url}${upcoming_games}`;

export const newGamesUrl = ()=> `${base_url}${newGames}`;

export const gameDetailUrl = (game_id)=> `${base_url}games/${game_id}`;

export const gameScreenShotsUrl = (game_id)=> `${base_url}games/${game_id}/screenshots`;

export const searchGameUrl = (game_name)=> `${base_url}games?search=${game_name}&page_size=9`;
