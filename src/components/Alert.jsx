import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom";

const Alert = ({toggle, message, type}) => { 

    const iconFunction = (type) => {
      switch (type) {
        case "error":
          return (
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          )
        case "success":
          return (
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          )
      
        default:
          break;
      }
    }

    const [ended, setEnded] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setEnded(prev => !prev)
        }, 3000)
        const timerToggle = setTimeout(() => {
            toggle()
        },4100)

        return () => {
            clearTimeout(timer)
            clearTimeout(timerToggle)
        }
    }, [])
    return ReactDOM.createPortal(
      // <div className="fixed top-0 right-0 bottom-0 left-0">
        <div className={`alert alert-${type} max-w-xs fixed right-5 bottom-5 ${ended ? 'animate-slide_out_bottom': 'animate-slide_in_bottom'}`}>
          {
            iconFunction(type)
          }
          <span>{message}</span>
        </div>
      // {/* </div> */}
      ,
      document.body
    )
  }

export default Alert