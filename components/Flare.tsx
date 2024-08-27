'use client';

import { useEffect } from 'react';
import KUTE from 'kute.js';

export function Flare() {
    useEffect(() => {
        const tween = KUTE.fromTo(
            '#base',
            { path: '#base' },
            { path: '#move' },
            {
                duration: 1500,
                easing: 'easingCubicInOut',
                repeat: 9999999,
                yoyo: true
            }
        );
        tween.start();
    }, []);

    return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="f1" x="-20%" y="-20%" width="140%" height="160%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                </filter>
            </defs>
            <path
                id="base"
                fill="#FFFFFF"
                d="M61.8,-18.4C69,1.9,56,30.5,32.8,48.1C9.6,65.6,-23.8,72.1,-42.8,58.4C-61.8,44.7,-66.5,10.8,-57,-12.8C-47.4,-36.3,-23.7,-49.6,1.8,-50.1C27.3,-50.7,54.7,-38.7,61.8,-18.4Z"
                transform="translate(100 100)"
                filter="url(#f1)"
            />
            <path
                id="move"
                fill="#FFFFFF"
                d="M69.7,-23C78.5,4.4,65.7,38.6,40.9,56.6C16.2,74.7,-20.5,76.6,-44.6,59.5C-68.6,42.5,-80.2,6.3,-70.7,-22.1C-61.2,-50.5,-30.6,-71.2,-0.1,-71.2C30.5,-71.2,60.9,-50.4,69.7,-23Z"
                transform="translate(100 100)"
                filter={'url(#f1)'}
            />
        </svg>
    );
}

/*
 
 <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
 <path fill="#FFFFFF" d="M42.3,23.5C29.2,47.1,-24.8,46.3,-38.6,22.2C-52.5,-1.9,-26.2,-49.2,0.7,-48.8C27.7,-48.4,55.4,-0.2,42.3,23.5Z" transform="translate(100 100)" />
 </svg>
 
 */
