import React from 'react';

export default function LeftNav({ homeRef, aboutRef, dearyRef, aabRef, aidiesRef, stRef}){
    const handleClick = e => {
        const id = e.target.id;
        console.log(id)
        if (id === "dot-01") 
            homeRef.current.scrollIntoView({
                behavior: "smooth",
            });
        else if (id === "dot-02")
            aboutRef.current.scrollIntoView({
                behavior: "smooth",
            });
        else if (id === "dot-03")
            dearyRef.current.scrollIntoView({
                behavior: "smooth",
            });
        else if (id === "dot-04")
            aabRef.current.scrollIntoView({
                behavior: "smooth",
            });
        else if (id === "dot-05")
            aidiesRef.current.scrollIntoView({
                behavior: "smooth",
            });
        else if (id === "dot-06")
            stRef.current.scrollIntoView({
                behavior: "smooth",
            });

    }
    return(
        <div className="dots-nav-container">
            <div className="dot-nav-button" id="dot-01" onClick={handleClick}/>
            <div className="dot-nav-button" id="dot-02" onClick={handleClick}/>
            <div className="dot-nav-button" id="dot-03" onClick={handleClick}/>
            <div className="dot-nav-button" id="dot-04" onClick={handleClick}/>
            <div className="dot-nav-button" id="dot-05" onClick={handleClick}/>
            <div className="dot-nav-button" id="dot-06" onClick={handleClick}/>
        </div>
    )
}