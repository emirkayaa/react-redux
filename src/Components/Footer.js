import { useSelector, useDispatch } from "react-redux"
import { changeLanguage } from "../stores/site"

    function Footer() {
        const dispatch = useDispatch()
        const theme = useSelector(state => state.site)
        const languages = ['tr', 'en']

        const handleLanguage = (language) => {
            dispatch(changeLanguage(language))
        }
        return (
            <div>
                <h1>Theme</h1>
                <div>
                    {
                        languages.map((language, index) => (
                            <button key={index} onClick={() => handleLanguage(language)}>{language}</button>
                        ))
                    }
                </div>
                <h2>{theme.dark ? 'Dark' : 'Light'}</h2>
            </div>
        )
    }

    export default Footer   ;