import { useEffect, useState } from "react"

const useWomen = () =>{
    const [womensCollection , setWomensColltions] = useState([])

    useEffect(() => {
        fetch("collections.json")
        .then(res => res.json())
        .then(data => {
            setWomensColltions(data)
        })
    },[])

    return [wo]


}

export default useWomen