import { useState } from "react";
import Values from "values.js";
import s from "./FormColor.module.css";

const FormColor = ({ setList }) => {

    const [color, setColor] = useState("blue");
    const [error, setError] = useState(false);

    const handleGenerator = (event) =>{
        event.preventDefault();
        try {
            let colors = new Values(color).all(10);
            setList(colors);
            setError(false);
        } catch (error) {
            alert(error);
            setError(true)
        }
    }

    return (
        <div className={s.content}>
            <h1>Color Palete Generator</h1>
            <form onSubmit={handleGenerator}>
                <input
                    type="text"
                    placeholder="Insert color"
                    onChange={event => setColor(event.target.value)}
                />

                <input type="submit" value="Generator" />
            </form>

            {
                error ? <p className={s.error}>No color exists</p> : null
            }
        </div>
    )
}

export default FormColor;