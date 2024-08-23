"use client";

import { useEffect } from "react";
import KUTE from "kute.js";

export function Flare() {
    
    useEffect(() => {
        const tween = KUTE.fromTo("#base", {path: "#base"}, {path: "#move"}, {
            duration: 1500,
            repeat: 9999999,
            yoyo: true
        });
        tween.start();
    }, [])
    
    return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8"/>
                </filter>
            </defs>
            <path id="base" fill="#FFFFFF"
                  d="M43,26.3C28.6,49.7,-28.9,49.8,-43.3,26.4C-57.6,3,-28.8,-44,-0.1,-44C28.7,-44,57.4,2.8,43,26.3Z"
                  transform="translate(100 100)" filter="url(#f1)"/>
            <path id="move" fill="#FFFFFF"
                  d="M42.3,23.5C29.2,47.1,-24.8,46.3,-38.6,22.2C-52.5,-1.9,-26.2,-49.2,0.7,-48.8C27.7,-48.4,55.4,-0.2,42.3,23.5Z"
                  transform="translate(100 100)" filter={"url(#f1)"}/>
        </svg>
    
    )
}

/*
 
 <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
 <path fill="#FFFFFF" d="M42.3,23.5C29.2,47.1,-24.8,46.3,-38.6,22.2C-52.5,-1.9,-26.2,-49.2,0.7,-48.8C27.7,-48.4,55.4,-0.2,42.3,23.5Z" transform="translate(100 100)" />
 </svg>
 
 */
