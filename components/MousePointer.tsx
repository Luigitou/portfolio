'use client';

import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

export function MousePointer() {
    const mousePosition = useRef({ x: 0, y: 0 });
    const cursorPosition = useRef({ x: 0, y: 0 });
    const requestRef = useRef<number | null>(null);
    const [isClickable, setIsClickable] = useState(false); // Utilisation de useState pour gérer la cliquabilité

    const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
    };

    const isMobileTouchDevice = () => {
        const userAgent = navigator.userAgent;

        return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
            userAgent
        );
    };

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mousePosition.current.x = event.clientX;
            mousePosition.current.y = event.clientY;

            // Récupère l'élément sous la souris
            let elementUnderCursor = document.elementFromPoint(
                event.clientX,
                event.clientY
            );

            if (elementUnderCursor) {
                // Remonte dans le DOM si l'élément n'est pas cliquable directement
                elementUnderCursor = elementUnderCursor.closest(
                    'a, button, [role="button"]'
                );
                // Met à jour l'état pour savoir si l'élément sous la souris est cliquable
                setIsClickable(!!elementUnderCursor);
            } else {
                // Si aucun élément cliquable n'est trouvé, on désactive l'état cliquable
                setIsClickable(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const animate = () => {
            cursorPosition.current.x = lerp(
                cursorPosition.current.x,
                mousePosition.current.x,
                0.1
            );
            cursorPosition.current.y = lerp(
                cursorPosition.current.y,
                mousePosition.current.y,
                0.1
            );

            const cursorElement = document.getElementById('custom-cursor');
            if (cursorElement) {
                const offsetX = 12;
                const offsetY = 12;

                cursorElement.style.transform = `translate3d(${cursorPosition.current.x - offsetX}px, ${cursorPosition.current.y - offsetY}px, 0)`;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    if (isMobileTouchDevice()) {
        return null;
    } else {
        return (
            <span
                id="custom-cursor"
                className="pointer-events-none fixed left-0 top-0 z-50 aspect-square h-5 w-5 rounded-full border-[2px] border-white border-opacity-25"
            >
                <span
                    className={classNames(
                        'absolute left-1/2 top-1/2 aspect-square w-full translate-x-[-50%] translate-y-[-50%] rounded-full bg-white opacity-25 transition-transform duration-150 ease-in-out',
                        isClickable ? 'scale-100' : 'scale-[0.25]' // Animation de mise à l'échelle si cliquable
                    )}
                ></span>
            </span>
        );
    }
}
