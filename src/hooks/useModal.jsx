import React, { useState } from "react";


const useModal = () => {
    const [show, setShow] = useState(false)

    function toggle () {
        setShow(prev => !prev)
    }
    return [
        show,
        toggle
    ]
}

export default useModal