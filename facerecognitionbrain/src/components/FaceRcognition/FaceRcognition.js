import React from 'react';

const FaceRcognition = ({imageUrl}) =>{
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img alt='' src={imageUrl} width='400px' height='auto' ></img>
            </div>
        </div>
    );
}

export default FaceRcognition;