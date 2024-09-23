'use client';

import { createContext, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

export const MobileContext = createContext(true);

export function MobileProvider({ children }: { children: React.ReactNode }) {
    const [isMobileDevice, setIsMobileDevice] = useState(true);

    useEffect(() => {
        setIsMobileDevice(isMobile);
    }, []);

    return (
        <MobileContext.Provider value={isMobileDevice}>
            {children}
        </MobileContext.Provider>
    );
}
