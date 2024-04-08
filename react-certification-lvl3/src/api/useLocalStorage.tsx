import { useCallback, useEffect, useState } from "react";

/**
 * Hook managing the manipulation of a local storage variable by its name
 *
 * @param key Name of the variable to store
 * @returns An array composed of the value and its setter (like a useState)
 */
export const useLocalStorage = (
  key: string
): [string | null, (value: string) => void] => {
  const [localValue, setLocalValue] = useState<string | null>(() => {
    // Initial value
    return localStorage.getItem(key);
  });

  useEffect(() => {
    // Function called when the browser's local storage gets an update
    const handleStorageUpdate = () => {
      const newValue = localStorage.getItem(key);
      // If the value for this key did not change, the parent component will not rerender
      setLocalValue(newValue);
      console.debug(`Updated "${key}" from storage`, newValue);
    };
    console.log("Init storage handler for", key);
    window.addEventListener("storage", handleStorageUpdate);

    return () => {
      console.log("Destroy storage handler", key);
      window.removeEventListener("storage", handleStorageUpdate);
    };
  }, [key]);

  // External setter, memoized for performance purpose
  const setValue = useCallback(
    (value: string) => {
      console.debug(`Update "${key}" by setter`, value);
      localStorage.setItem(key, value);
      // Notifies the listeners (in our case, our API)
      window.dispatchEvent(new Event("storage"));
    },
    [key]
  );

  return [localValue, setValue];
};
