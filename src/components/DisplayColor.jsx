import SingleColor from "./SingleColor";

const DisplayColor = ({ list }) => {
    return (
        <div className="colors-box">
            {
                list.map((color, index) => {
                    return (
                        <SingleColor
                            key={index}
                            hexColor={color.hex} //esto es por como aparece el obj
                        />
                    )
                })
            }
        </div>
    )
}

export default DisplayColor;