import { useState, ChangeEvent } from "react";

interface FormState {
    [key: string]: string;
}

export const useForm = (initialForm: FormState = {}) => {
    const [formState, setFormState] = useState<FormState>(initialForm);

    const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
}
