import { useState,ChangeEvent,FormEvent } from "react";


export const useForm =<T>(initialState:T) => {
    const [formData, setFormData] = useState(initialState)
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return {formData, handleChange, handleSubmit}
}