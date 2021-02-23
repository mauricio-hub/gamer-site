import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useDispatch} from 'react-redux';
import loadDetail from '../actions/detailAction';
import {Link} from 'react-router-dom';
import {smallImage} from '../util';
const Game = ({name,released,image,id}) => {

	const stringPathId = id.toString(); 	
	const dispatch = useDispatch()

	const loadDetailHandler=()=>{
		document.body.style.overflow='hidden';
		dispatch(loadDetail(id));
	}


	return (
		<StyledGame LayoutId={stringPathId} onClick={loadDetailHandler}>
			<Link to={`/game/${id}`}>
				<h3>{name}</h3>
				<p>{released}</p>
				<motion.img 
				LayoutId={`image ${stringPathId}`} 
				src={smallImage(image,640)}
				alt={name}/>
			</Link>
		</StyledGame>
	)
}

export default Game

const StyledGame = styled(motion.div)`
	min-height:30vh;
	box-shadow:0px 5px 30px rgba(0,0,0,0.4);
	text-align:center;
	border-radius:1rem;
	cursor:pointer;
	overflow:hidden;
	img{
		width:100%;
		height:40vh;
		object-fit:cover;
	}
`