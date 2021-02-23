import React ,{useEffect}from 'react';
import Home from './pages/Home'
import GlobalStyles from './components/GlobalStyle';
import {Route} from 'react-router-dom';
import Nav from './components/Nav';
function App() {
	

  return (
    <div className="App">
    <GlobalStyles/>
  
	{/*Rederiza siempre el home y el componente de detalles
	de juego cuando sea requerido por el usuario
	*/}
    <Route path={["/game/:id","/"]}>
      
      <Nav/>
     	<Home/>
    </Route>
    
    </div>
  );
}

export default App;
