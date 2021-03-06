import { useEffect, useRef } from "react";

// custom Hook
export default function useEventListener(eventName, handler, element = null){
    // Create a ref that stores handler
    const savedHandler = useRef();
    
    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);
  
    useEffect(
      () => {
        if (element === null) {
            if (typeof window !== 'undefined') {
                element = window;
            } else {
                return;
            }
        }
        // Make sure element supports addEventListener
        // On 
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;
        
        // Create event listener that calls handler function stored in ref
        const eventListener = event => savedHandler.current(event);
        
        // Add event listener
        if (eventName === "scroll") {
            element.addEventListener(eventName, eventListener, {passive: true});
        } else {
            element.addEventListener(eventName, eventListener);
        }
        
        // Remove event listener on cleanup
        return () => {
          element.removeEventListener(eventName, eventListener);
        };
      },
      [eventName, element] // Re-run if eventName or element changes
    );
  };