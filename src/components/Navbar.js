import React, {useEffect} from 'react'
import {getFavs} from '../actions/mealActions';
import {useSelector} from'react-redux';
import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux';

const Navbar = () => {

    const dispatch = useDispatch()

    const favs = useSelector(state=> state.meals.favs)    

    useEffect(() => {
        dispatch(getFavs(favs))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])
    
    return (
        <nav id='navbar'>
            <div className='nav-links'>
            <NavLink to='/'>Home</NavLink>
            {/* <NavLink to='/meals'>Meals</NavLink> */}
                {favs && favs.length ? 
                    (<NavLink to='/favorites'>
                        Favorites
                    </NavLink>):null
                }
            </div>
        </nav>
    )
}

export default Navbar
    