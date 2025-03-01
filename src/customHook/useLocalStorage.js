import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const[item, setItem] = React.useState(initialValue);
    const[loading, setLoading] = React.useState(true);
    const[error, setError] = React.useState(false);


    React.useEffect(()=>{
      setTimeout(()=> {
        try {
          const localStorageItems = localStorage.getItem(itemName)
          let parsedItem;
            if (!localStorageItems) {
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = initialValue;
            } else {
              parsedItem = JSON.parse(localStorageItems);
              setItem(parsedItem)
            }
            setLoading(false)
  
        } catch(error){
          setLoading(false)
          setError(true)
        }
      }, 2000)
        }, [itemName, initialValue])
  
    
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    };
  
    return {item, saveItem, loading, error, }
  }

  export{ useLocalStorage }