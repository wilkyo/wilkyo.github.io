import { useEffect, useState } from "react";

export const useLocalStorage = (
  key: string
): [string | null, (value: string) => void] => {
  const [localValue, setLocalValue] = useState<string | null>(() => {
    return localStorage.getItem(key);
  });

  useEffect(() => {
    console.log("Init storage handler for", key);
    const handleStorageUpdate = () => {
      const newValue = localStorage.getItem(key);
      setLocalValue(newValue);
      console.debug(`Updated "${key}" from storage`, newValue);
    };
    window.addEventListener("storage", handleStorageUpdate);

    return () => {
      console.log("Destroy storage handler", key);
      window.removeEventListener("storage", handleStorageUpdate);
    };
  }, [key]);

  const setValue = (value: string) => {
    console.debug(`Update "${key}" by setter`, value);
    localStorage.setItem(key, value);
    window.dispatchEvent(new Event("storage"));
  };

  return [localValue, setValue];
};
