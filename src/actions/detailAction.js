import axios from 'axios';
import {gameDetailUrl, gameScreenShotsUrl} from '../api';

const loadDetail =(id) =>async(dispatch)=>{
	dispatch({
		type:"LOADING_DETAIL",
	})

	const detailData = await axios.get(gameDetailUrl(id));
	const screenShotData = await axios.get(gameScreenShotsUrl(id));



	dispatch({
		type:"GET_DETAIL",
		payload:{
			game:detailData.data,
			screen:screenShotData.data,
		}
	})

}

export default loadDetail;
