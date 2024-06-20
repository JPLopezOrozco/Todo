import { useEffect, createContext, useContext, useState } from "react";

const CsrfContext = createContext()

export const useCsrfToken = ()=>{
    return useContext(CsrfContext)
}
export const CsrfProvider = ({ children }) => {
    const [csrftoken, setCsrftoken] = useState('');
  
    useEffect(() => {
      const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
          const cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
            }
          }
        }
        return cookieValue;
      };
  
      const token = getCookie('csrftoken');
      setCsrftoken(token);
    }, []);
  
    return (
      <CsrfContext.Provider value={csrftoken}>
        {children}
      </CsrfContext.Provider>
    );
  };
  