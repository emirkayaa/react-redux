import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
    function Theme() {
        const theme = useSelector(state => state.site)
       
        return (
            <div>

            <nav>
                <NavLink  to="/">Home</NavLink>
                <NavLink  to="/about">About</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                
            </nav>

                <h1>Theme</h1>
                <h2>{theme.dark ? 'Dark' : 'Light'}</h2>
            </div>
        )
    }

    export default Theme;