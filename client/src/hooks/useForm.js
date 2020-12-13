// write your custom hook here to control your checkout form

import { useState } from 'react';

export const useForm = (key, initialValue) => {
    
    const [values, setValue] = useState(key, initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState();

    const handleChanges = (e) => {
        setValue({ ...values, [e.target.name]: e.target.value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    return [values, handleChanges, handleSubmit, showSuccessMessage];
}
