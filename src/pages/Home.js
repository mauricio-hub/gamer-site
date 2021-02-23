import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {loadGames} from '../actions/gamesAction.js';
//component
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
import styled from 'styled-components';
import {motion,AnimatePresence,AnimateSharedLayout} from 'framer-motion';
import {useLocation} from 'react-router-dom';
const Home = ()=>{
      //useLocation permite obtener la ruta actula de la aplicacion
      const location = useLocation();
      //dividimos la ruta con la funcion split
      //y obtenemos los datos de ese id 
      const pathId = location.pathname.split("/")[2] 
      //console.log(pathId);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadGames())
	}, [dispatch])


	const{popular,newGames,upcoming,searched} = useSelector((state)=> state.games)
	//console.log(games)
	return(

		<GameList>
          
                  {pathId && <GameDetail  pathId={pathId}/>}

                  {searched.length? (
                  <div className= "searched">
                        <h2>Juegos Encontrados</h2>
                         <Games>
                        {searched.map(game =>(
                              <Game
                                    name={game.name}
                                    released={game.released}
                                    id={game.id}
                                    image={game.background_image}
                                    clip={game.clip}
                                    key={game.id}
                              />))}
                  </Games>
           
                  </div>
                  ): (
                  ""
                  )}
                 
      		<h2>Proximos Juegos</h2>
      		<Games>
      			{upcoming.map(game =>(
      				<Game
      					name={game.name}
      					released={game.released}
      					id={game.id}
      					image={game.background_image}
      					clip={game.clip}
      					key={game.id}
      				/>))}
      		</Games>
      		<h2>Juegos Populares</h2>
      		<Games>
      			{popular.map(game =>(
      				<Game
      					name={game.name}
      					released={game.released}
      					id={game.id}
      					image={game.background_image}
      					clip={game.clip}
      					key={game.id}
      				/>))}
      		</Games>
      		<h2>Juegos Nuevos</h2>
      		<Games>
      			{newGames.map(game =>(
      				<Game
      	
            				name={game.name}
      					released={game.released}
      					id={game.id}
      					image={game.background_image}
      					clip={game.clip}
      					key={game.id}
      				/>))}
      		</Games>
               
    	</GameList>

		)
}

export default Home;
const GameList = styled(motion.div)`
	
	padding : 0rem 5rem;

	h2{
		padding: 5rem 0rem;
	}

`
const Games = styled(motion.div)`
	minHeight : 80vh;
	display:grid;
	grid-template-columns: repeat( auto-fit, minmax(500px, 1fr) );
	grid-column-gap:3rem;
	grid-row-gap:5rem;


`




