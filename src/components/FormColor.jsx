import { useState } from "react";
import Values from "values.js";

const FormColor = ({ setList }) => {

    const [color, setColor] = useState("blue");
    const [error, setError] = useState(false);

    const handleGenerator = event => {
        event.preventDefault();
        try {
            let colors = new Values(color).all(10);
            setList(colors);
            setError(false);
            console.log(colors);
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }

    return (
        <div className="form-color">
            <h1>Color Palete Generator</h1>
            <form onSubmit={handleGenerator}>
                <input
                    type="text"
                    placeholder="Insert color"
                    onChange={event => setColor(event.target.value)}
                />

                <input
                    type="submit"
                    value="Create"
                />
            </form>

            {
                error ? <p className="error">No color exists</p> : null
            }
        </div>
    )
}

export default FormColor;