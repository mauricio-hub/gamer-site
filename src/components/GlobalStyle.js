import {createGlobalStyle} from 'styled-components';


const GlobalStyles = createGlobalStyle`
	*{
		margin:0;
		padding:0;
		box-sizing:border-box;
	}

	html{
		&::-webkit-scrollbar{
			width:0.5rem;
		}
		&::-webkit-scrollbar-thumb{
			background-color:darkgrey;
		}
		&::-webkit-scrollbar-track{
		background:white;
	}

		body{
			font-family: 'Roboto', sans-serif;
			width : 100%;
			background:#f4f9f9;
		
		}

		h1{
			margin-top:20px;
			text-align:center;	
			font-size:4rem;
			font-family: 'Big Shoulders Inline Display', cursive;
			color:rgb(228, 71, 82);
			font-weight:900;
			letter-spacing: 5px;

		}
		h2{
			font-size:3rem;
			font-family: 'Montserrat', sans-serif;
			color:#333;
			font-weight:300;

		}
		h3{
			font-size:1.3rem;
			color:#333;
			padding:1.5rem 0rem;
		}
		p{
			font-size:1.2rem;
			line-height:200%;
			color:#696969;
		}
		a{
			text-decoration:none;
			color:#333;
		}

		img{
			display:block;
		}
	}

	input{
		width:30%;
		font-size:1.5rem;
		padding:0.5rem;
		border:none;
		margin-top:1rem;
		box-shadow:0px 0px 30px rgba(0,0,0,0.4);
		outline:none;
		font-weight:bold;
		font-family: 'Roboto', sans-serif;
	}

` 

export default  GlobalStyles;
