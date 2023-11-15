import React, { useState } from "react";


const useAlert = () => {
    const [show, setShow] = useState(false)
    const [msg, setMsg] = useState("")
    const [type, setType] = useState("")

    function toggle () {
        setShow(prev => !prev)
    }
    return [
        show,
        toggle,
        msg,
        setMsg,
        type,
        setType
    ]
}

export default useAlert;