import WindowControls from '../components/WindowControls'
import useWindowStore from '../store/window'
import WindowWrapper from '../hoc/WindowWrapper';
import React from 'react';

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) {
        return null;
    }

    const { name, imageurl } = data;

    return (
        <>
            <div id='window-header'>
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className='p-5 flex items-center justify-center bg-white h-full'>
                {imageurl ? (
                    <img src={imageurl} alt={name} className='max-w-full max-h-full object-contain rounded' />
                ) : (
                    <p>No image to display.</p>
                )}
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow;
