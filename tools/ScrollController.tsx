'use client';

import { useEffect, useRef, useState } from 'react';
import { Events, scroller, scrollSpy } from 'react-scroll';

type ScrollControllerProps = {
    children: React.ReactNode;
};

export function ScrollController({ children }: ScrollControllerProps) {
    const [currentSection, setCurrentSection] = useState('home');
    const [availableSections, setAvailableSections] = useState<string[]>([
        'home',
        'work',
        'about'
    ]);
    const scrollLock = useRef(false); // To prevent multiple scrolls in quick succession

    const getPreviousSection = () => {
        const index = availableSections.indexOf(currentSection);
        if (index === 0) {
            return null; // Aucune section précédente
        }
        return availableSections[index - 1];
    };

    const getNextSection = () => {
        const index = availableSections.indexOf(currentSection);
        if (index === availableSections.length - 1) {
            return null; // Aucune section suivante
        }
        return availableSections[index + 1];
    };

    const scrollToSection = (target: any) => {
        if (target) {
            scroller.scrollTo(target, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
            setCurrentSection(target);
        }
    };

    const handleScroll = (event: WheelEvent) => {
        event.preventDefault();
        if (scrollLock.current) return; // Prevent multiple triggers

        console.log('Scrolling', event.deltaY, currentSection);
        scrollLock.current = true;

        if (event.deltaY > 0) {
            console.log('Scrolling down');
            // Scroll down
            if (
                availableSections.indexOf(currentSection) <
                availableSections.length - 1
            ) {
                console.log(getNextSection());
                scrollToSection(getNextSection());
            }
        } else {
            // Scroll up
            console.log('Scrolling up');
            if (availableSections.indexOf(currentSection) > 0) {
                console.log(getPreviousSection());
                scrollToSection(getPreviousSection());
            }
        }

        // Unlock the scroll after a short delay
        setTimeout(() => {
            scrollLock.current = false;
        }, 1000);
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);

        Events.scrollEvent.register('begin', (to, element) => {
            console.log('begin', to, element);
        });

        Events.scrollEvent.register('end', (to, element) => {
            console.log('end', to, element);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    return <>{children}</>;
}
