import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";


const Header = ({ contactData, backURL }) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/info/${contactData.id}`);
    }

    return (
        <div className="header " style={{ backgroundColor: contactData.color }}>
            <div className="left">
                {contactData.id && (
                    <Link to={backURL || "/"}><i className="bi bi-arrow-left-circle"></i></Link>)}
                <div onClick={contactData.id && handleClick} className={contactData.id ? "header-profile-data" : "my-header-profile-data"}
                >
                    <img src={`/images/${contactData.profilePicture}`} />
                    <b>{contactData.name}</b>
                </div>
                
            </div>
            <div className="right"> {(contactData.id && (<> <i className="bi bi-telephone"></i><i className="bi bi-three-dots-vertical"></i>
                    </>
                
                ))}
            </div>
        </div>
        
    );
};

export default Header;