import React, { FC } from 'react';
import "./Body.scss";

interface IBodyProps {
    gallery_left_items: JSX.Element[];
    gallery_right_items: JSX.Element[];
}

const Body: FC<IBodyProps> = ({gallery_left_items, gallery_right_items}) => {
    return (
        <div className='body'>
            <div className="gallery">
                <div className="gallery_left">
                    {
                        gallery_left_items.map((item) => {
                            return (
                                item
                            )
                        })
                    }
                </div>
                <div className="gallery_right">
                    {
                        gallery_right_items.map((item) => {
                            return (
                                item
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Body;
