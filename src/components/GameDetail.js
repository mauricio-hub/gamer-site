import React from 'react'
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'
import {smallImage} from '../util';
//iconos
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import startEmpty from '../img/star-empty.png';
import startFull from '../img/star-full.png';
const GameDetail = ({pathId}) => {

	const history = useHistory();
	const {screen,game,isLoading}= useSelector((state)=>state.detail);
	const exitDetail=(e)=>{
		const element = e.target;
		if (element.classList.contains('shadow')) {

			document.body.style.overflow='auto';
			history.push('/')

		}
	}

	const getPlatform =(platform)=>{
		switch (platform) {
			case "PlayStation 4":
				return playstation;
			case "Xbox one":
				return xbox;
			case "PC":
				return steam;
			case "Nintendo Switch":
				return nintendo;
			case "iOS":
				return apple;		

			default:
				return gamepad;
		}
	}

	const getStars =()=>{
		const stars = [];
		const rating =Math.floor( game.rating);
	
		for(let i=1; i<=5;i++){
			if (i<=rating) {
			stars.push(<img key={i} src={startFull} alt="star"/>)
			}else{
				stars.push(<img key={i} src={startEmpty} alt="star"/>)
			}
		}		
		return stars
	}	


	return (
		<>
		{!isLoading && (
		<CardShadow className="shadow" onClick={ exitDetail}>
			<Detail  LayoutId={pathId}>
				<Stats>
					<div className="rating">
						<h2>{game.name}</h2>
						<p>Rating:{game.rating}</p>
						 <p>{getStars()}</p>  
					</div>
					<Info >
						<h3>Plataformas</h3>
						
						<Platforms>
							{game.platforms.map(data =>(
							<img alt={data.platform.name} key={data.platform.id} src={getPlatform(data.platform.name)}></img>
								))}
						</Platforms>

					</Info>
					
				</Stats>

				<Media>
						<img src={smallImage(game.background_image,1280)} alt={game.background_image}/>
				</Media>

				<Description>
					<p>{game.description_raw}</p>
				</Description>
				
				<div className="gallery">
					{screen.results.map(screen=>(
							<img src={
							smallImage(screen.image,1280)} 
							key={screen.id} 
							alt={screen.image}/>
						))}
				</div>
				
			</Detail>
		</CardShadow>
			)}	
		</>
	)
}

const CardShadow = styled(motion.div)`
	width:100%;
	min-height:100vh;
	overflow-y:scroll;
	background:#f4f9f9;
	background:rgba(0,0,0,0.5);
	position:fixed;
	top:0;
	left:0;
	z-index:5;
	&::-webkit-scrollbar{
		width:0.5rem;
	}
	&::-webkit-scrollbar-thumb{
		background-color:#ff7676;
	}
	&::-webkit-scrollbar-track{
		background:white;
	}
`
const Detail =styled(motion.div)`
	width:80%;
	border-radius:1rem;
	padding:2rem 5rem;
	background:white;
	position:absolute;
	left:10%;
	color:black;
	z-index:10;
	img{
		width:100%;
	}

`
const Stats = styled(motion.div)`
	display:flex;
	align-item:center;
	justify-content:space-between;
	img{
		width:2rem;
		height:2rem;
		display:inline;
	}
`

const Info = styled(motion.div)`
	text-align:center;
`
const Platforms = styled(motion.div)`
	display:flex;
	justify-content:space-evenly;
	img{
		margin-left:3rem;
	}
`

const Media = styled(motion.div)`
	margin-top:5rem;

	img{
		width:100%;
		
	}
`
const Description = styled(motion.div)`
	margin:5rem 0rem;
`

export default GameDetail