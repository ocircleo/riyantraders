
import React from 'react';
import ImageFrom from './ImageFrom';
const arr = [0, 1, 2, 3, 4]
const Upload = ({ data }) => {

    return (
        <div className='bg-red-400 mt-12'>

            {arr.map(ele => <ImageFrom data={data} imgUrl={data.images[ele]} targetIndex={ele} key={ele + 12}></ImageFrom>)}
        </div>
    );
}

export default Upload;
