import { FC } from 'react';
import "./Body.scss";
import "../../../../animations/appiaranceFromCorner/appiaranceFromCorner.scss";

interface IBodyProps {
    gallery_items: JSX.Element[];
}

const Body: FC<IBodyProps> = ({gallery_items}) => {
    return (
        <div className='body'>
            <div className="gallery">
                {
                    gallery_items.map((item) => {
                        return(
                            item
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body;
