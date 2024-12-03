import { useEffect } from "react";
import { useState } from "react"

export const useAsync = (asyncFunction, dependecies = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        asyncFunction()
        .then((data)=>{
            setData(data)
        })
        .catch((error)=>{
            setError(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, dependecies)

    return {
        data,
        loading,
        error
    }
}
