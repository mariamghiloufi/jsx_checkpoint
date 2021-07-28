import React from 'react';
import Image from '../personne.jpg';
const ProfilePhoto = () => {
    return (
        <div className='photo'>
           
            <img src={Image} alt="imageDeProfille"/>
            
        </div>
    );
}

export default ProfilePhoto;
