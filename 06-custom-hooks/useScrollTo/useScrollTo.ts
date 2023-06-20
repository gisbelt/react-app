import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

export const useScrollTo = (pathName: string) => {
    const location = useLocation()
    const path = location.pathname;
    
    const inViewRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (path === pathName) {
          inViewRef.current?.scrollIntoView();
        }
    }, [inViewRef, path]);

    return {
        inViewRef,
    }
}