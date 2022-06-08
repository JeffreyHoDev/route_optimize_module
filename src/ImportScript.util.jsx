import { useEffect } from 'react';


const ImportScript = (resourceUrl, callback)=> {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = resourceUrl;
    script.async = true;
    script.onload = callback(window.google)
    document.body.appendChild(script);

return () => {
      document.body.removeChild(script);
    }
  }, [resourceUrl]);
};
export default ImportScript;