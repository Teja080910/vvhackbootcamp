import { useEffect, useState } from "react"
import { Pro } from "../props/props"

export const UseStateFunction = () => {
    const [count, setCount] = useState(0)

    const Count = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(count + 1)
    }, [count])

    return (
        <>
            <h2>My count is : {count}</h2>
            <button onClick={() => Count()}>Update count</button>

            <Pro ast={count} />

        </>
    )
}