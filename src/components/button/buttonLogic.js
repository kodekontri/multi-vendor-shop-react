import { useState } from "react";

const useButtonLogic = ()=>{
    const [loading, setLoading] = useState(false);

    const toggleLoading = (value = false)=>{
        setLoading(loading => value)
        setTimeout(function(){setLoading(false)}, 3000)
    }

    return {loading, toggleLoading}
}


export default useButtonLogic 

