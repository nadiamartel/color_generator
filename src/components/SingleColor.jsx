import clip from "../assets/clip.png";
import { useState } from "react";

const SingleColor = ({ hexColor }) =>{

    const [copy, setCopy] = useState(false);

    const handleCopy = (color) => () =>{
        const colorNew = `#${color}`;
        navigator.clipboard.writeText(colorNew);
        setCopy(true);
        setTimeout(() => {
            setCopy(false)
        }, 2000);
    }
    //funcion que devuelve fn, por eso recibe 2parametros


    return(
        <div className="single-card" style={{ backgroundColor: `#${hexColor}` }}>
            <div className="content">
                <p>#{ hexColor }</p>
                <button onClick={ handleCopy(hexColor) }>
                    <img src={clip} alt="copy" />
                </button>
            </div>
            {
                copy ? <p className="copy-alert">Copied to clipboard</p> : null
            }
        </div>
    )
}

export default SingleColor;