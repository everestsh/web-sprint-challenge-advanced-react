// write your custom hook here to control your checkout form

import  { useState } from "react";

export const useForm = () => {
    const [storedValue, setValue] = useLocalStorage('showSuccess')
    return [storedValue, setValue] 
  }

  
export const useLocalStorage = (key, initialvalue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialvalue;
    });
  
    const setValue = (value) => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }
    
    return [storedValue, setValue];
}