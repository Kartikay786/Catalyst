import React from "react";
import Button from "./Button";
import './Portfolio.css'
export default function Portfolio() {

    const cats = ['All', 'Website Design', 'Website Development', 'UI/UX Design', 'WordPress', 'Mobile App', 'Saas', 'Webflow', 'Branding', 'Motion Graphics']
    return (
        <>
            <div className="port">
                <h1>Our Portfolio</h1>
                <div className="cats">
                    {cats.map((cat) => (
                        <span className="cat">{cat}</span>
                    ))}
                </div>
                <div className="cards">
                    <div className="left"></div>
                    <div className="right">
                        <div className="top"></div>
                        <div className="bottom">
                            <div className="bl"></div>
                            <div className="br"></div>
                        </div>
                    </div>
                </div>
                <Button backgroundColor="#fff" hoverBgColor="#9AFD0D" placeholder={"View All Works"} />

            </div>
        </>
    )

}