import { FC } from 'react';
import './Head.scss';

interface IHeadProps {
    title: string;
}

const Head: FC<IHeadProps> = ({ title }) => {

    return (
        <div className='Head'>
            <div className="layer title">
                <p>{title}</p>
            </div>
            <div className='layer layer_bottom' />
            <div className='layer layer_middle' />
            <div className='layer layer_top' />
            {/* <div className="layer layer_between"/> */}
        </div>
    )
}

export default Head;