import React from "react";
import Button from "./Button";
import './Portfolio.css'
export default function Portfolio() {

    const cats = ['All', 'Website Design', 'Website Development', 'UI/UX Design', 'WordPress', 'Mobile App', 'Saas', 'Webflow', 'Branding', 'Motion Graphics']
    return (
        <>
            <div className="port">
                <h1>Our Portfolio</h1>
                {/* <div className="cats">
                    {cats.map((cat) => (
                        <span className="cat">{cat}</span>
                    ))}
                </div> */}
                <div className="cards">
                    <div className="left">
                        <img src="https://six2eight.com/_next/image?url=https%3A%2F%2Fb4550151.smushcdn.com%2F4550151%2Fwp-content%2Fuploads%2F2025%2F03%2Fsixpay-home-loop.webp&w=1200&q=65" alt="" />
                    </div>
                    <div className="right">
                        <div className="top">
                            <img src="https://six2eight.com/_next/image?url=https%3A%2F%2Fb4550151.smushcdn.com%2F4550151%2Fwp-content%2Fuploads%2F2025%2F03%2Fuserpath-home-loop.webp&w=1200&q=65" alt="" />
                        </div>
                        <div className="bottom">
                            <div className="bl">
                                <img src="https://six2eight.com/_next/image?url=https%3A%2F%2Fb4550151.smushcdn.com%2F4550151%2Fwp-content%2Fuploads%2F2025%2F03%2Fsereni-mind-home-loop.webp&w=1200&q=65" alt="" />
                            </div>
                            <div className="br">
                                <img src="https://six2eight.com/_next/image?url=https%3A%2F%2Fb4550151.smushcdn.com%2F4550151%2Fwp-content%2Fuploads%2F2025%2F07%2Fwebtool.png&w=1200&q=65" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <Button backgroundColor="#fff" hoverBgColor="#9AFD0D" placeholder={"View All Works"} />

            </div>
        </>
    )

}