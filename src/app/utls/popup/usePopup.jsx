import { useState } from 'react';

const UsePopup = () => {
    const [popup, setPopup] = useState({ is: false, message: "", error: false, action: null });
    const closePopup = () => setPopup({ is: false, message: "", error: false, action: null });
    const showPopup = (message) => setPopup({ is: true, message: message, error: false, action: null });
    const showPopupError = (message) => setPopup({ is: true, message: message, error: true, action: null });
    const askPopup = (message, cb) => setPopup({ is: true, message: message, error: false, action: cb });


    return [popup, closePopup, showPopup, showPopupError, askPopup]
}

export default UsePopup;
