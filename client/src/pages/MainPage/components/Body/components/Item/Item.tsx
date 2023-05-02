import { FC } from 'react';
import './Item.scss';

interface IItemProps {
    title: string;
    description: string;
    image: string;
    position: Boolean;
    index: number;
}

const Item: FC<IItemProps> = ({ title, description, image, position, index }) => {
    return (
        <div className="item" style={{ flexDirection: position ? "row" : "row-reverse" }}>
            <div className={`item__contaner`} id={`item_image_${index}`}> 
            {/* element-appiaranceFromCorner${index % 2 === 0 ? 'Right' : 'Left'} */}
                <div
                    className="item_image"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                />
            </div>
            <div className="text_contaner">
                <div className="item_title">{title}</div>
                <div className="item_description">{description}</div>
            </div>
        </div>
    );
}

export default Item;