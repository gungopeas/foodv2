import React, { Fragment } from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Meals from './pages/Meals';
import Search from'./components/Search'
import Favorites from './components/Favorites';
import MealDetail from './pages/MealDetail';
// import store from './store'
// import {Provider} from 'react-redux';
import { Switch, Route, useLocation } from 'react-router';
import './App.scss';
import { ScrollUp } from './components/ScrollUp';
import ModalWrapper from './components/ModalWrapper';
import Filtered from './pages/Filtered';

function App() {

  let location = useLocation()
  console.log(location)

  let background = location.state && location.state.background;

  return (
    // <Provider store={store}>
    <Fragment>
      <ScrollUp/>
      <Navbar/>
      <Search/>
      <Switch location={background || location}>
        <Route exact path='/' children={<Home/>}/>
        <Route exact path='/meals' children={<Meals/>}/>
        <Route exact path='/search' children={<Filtered/>}/>
        <Route exact path='/meals/:mealId' children={<MealDetail/>}/>
        <Route export path='/favorites' children={<Favorites/>}/>
      </Switch>
			{background && <Route path='/meals/:mealId' children={<ModalWrapper />} />}
    {/* </Provider> */}
    </Fragment>
  );
}

export default App;
