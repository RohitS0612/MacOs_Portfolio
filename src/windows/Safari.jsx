import React from 'react'
import WindowControls from '../components/WindowControls'
import WindowWrapper from '../hoc/WindowWrapper';
import { ChevronLeft, ChevronRight, PanelLeft, ShieldHalf } from 'lucide-react';

const Safari = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="safari" />
                <PanelLeft className='ml-10 icon' />
                <div className='flex items-center gap-1 ml-5'>
                    <ChevronLeft className='icon' />
                    <ChevronRight className='icon' />
                </div>

                <div className='flex-1 flex-center gap-3'>
                    <ShieldHalf className='icon'/>
                    
                </div>
                <div></div>
            </div>
        </>
    )
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;