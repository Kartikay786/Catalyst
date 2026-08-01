import React from 'react'
import "./sliderCard.css"

const SliderCard = () => {

    const image = ""
    const title = ["Web", "Development"]
    const tags = ["API Development", "CMS Development", "Backend Development"]
    const decription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, tempore sunt reprehenderit magnam nulla."

    return (
        <div className='sliderCard' >

            <div className='arrow'>
                <div className="arrow-circle">

                </div>
            </div>


            <div className="about">

                <div className="tags">
                    {
                        tags?.map((tag) => (
                            <div className="tag">
                                <div className="pointerball">
                                    <div className="greyball">
                                        <div className="whiteball"></div>
                                    </div>
                                </div>

                                <div className="tag-name">
                                    {tag}
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='title-wrapper'>
                    {
                        title.map((tit) => (
                            <h2 className='title-main'>
                                {tit}
                            </h2>
                        ))
                    }

                </div>

                {/* <h4 className="card-description" style={{width:"300px"}}>
                    {decription}
                </h4> */}
            </div>
        </div>
    )
}

export default SliderCard