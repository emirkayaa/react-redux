import { login } from "../stores/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
    function Login(){

        const dispatch = useDispatch();
        const navigate = useNavigate();
        const handleLogin = () => {
                const data = {
                    id: 1,
                    name: 'Mehmet',
                    token: 'asdaqDEWFR3D3FD'
                } 
                dispatch(login(data));
                navigate('/profile');
        };
        return (
            <div>
                <h1>Giriş yap</h1>
                <button onClick={handleLogin}>Giriş yap</button>
            </div>
        )
    }

    export default Login;