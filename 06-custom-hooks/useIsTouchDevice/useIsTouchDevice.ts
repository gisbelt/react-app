import { useEffect, useState } from 'react';
import * as deviceDetect from 'react-device-detect';

interface WindowWithDocumentTouch extends Window {
    DocumentTouch?: any;
}

function isTouchDevice(): boolean {
    if (typeof window === 'undefined') return false;
    const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    function mq(query: string): boolean {
        return typeof window !== 'undefined' && window.matchMedia(query).matches;
    }
    const win = window as WindowWithDocumentTouch;
    if ('ontouchstart' in window || (win?.DocumentTouch && document instanceof win.DocumentTouch)) return true;
    const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join(''); // include the 'heartz' - https://git.io/vznFH
    return mq(query);
}

export default function useIsTouchDevice(): { isTouch: boolean } {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        const { isAndroid, isIPad13, isIPhone13, isWinPhone, isMobileSafari, isTablet } = deviceDetect
        setIsTouch(isTouch || isAndroid || isIPad13 || isIPhone13 || isWinPhone || isMobileSafari || isTablet || isTouchDevice());
    }, []);

    return { isTouch };
}