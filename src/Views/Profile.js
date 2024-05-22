import { logout } from "../stores/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
    function Profile() {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const logOut = () => {
            dispatch(logout());
            navigate('/login');
        }

        return (
            <div>
                <h1>Profile</h1>
                <button onClick={logOut}>Logout</button>
            </div>
        );
    }

    export default Profile;