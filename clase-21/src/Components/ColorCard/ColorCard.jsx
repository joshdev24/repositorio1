import React from "react";
import "./ColorCard.css";



const ColorCard = (props) => {
    return (
        <div className="card">
            <div className="Color-Card" style={{ backgroundColor: props.firstColor }}></div>
            <div className="Color-Card" style={{ backgroundColor: props.secondColor }}></div>
            <div className="Color-Card" style={{ backgroundColor: props.thirdColor }}></div>
            <div className="Color-Card" style={{ backgroundColor: props.forthColor }}></div>

            <div className="card-info">
                <div className="button">
                    <button className="likes">
                        {props.likes}
                    </button>
                </div>
                <div className="dates">
                    <span className="date">{props.date}</span>
                </div>
            </div>
        </div>
    )


    
}

export default ColorCard




