import { FC } from 'react';
import "./Body.scss";
import "../../../../animations/appiaranceFromCorner/appiaranceFromCorner.scss";
import Item from './components/Item/Item';

interface IBodyProps {
    gallery_items: {
        preview: {
            title: string;
            description: string;
            image: string;
        }
        name: string;
        content: {
            type: string,
            text: string,
            image: string,
        }[]
    }[]
}

const Body: FC<IBodyProps> = ({ gallery_items }) => {
    return (
        <div className='body'>
            <div className="gallery">
                {
                    gallery_items.map((item) => {
                        return (
                            <Item
                                title={item.preview.title}
                                description={item.preview.description}
                                image={item.preview.image}
                                index={gallery_items.indexOf(item)}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body;
