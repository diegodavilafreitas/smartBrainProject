import React from 'react';
import './FaceRecognition.css';

const FaceRcognition = ({imageUrl, box}) =>{
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='400px' height='auto' ></img>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRcognition;