import SectionTitle from "../components/SectionTitle"
import { Button } from "../components/Button"
import ComputerModelExperience from "../components/models/ComputerModels/ComputerModelExperience"
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef(null);
    const formFields = [
        {
            name: "name",
            label: "Name",
            component: "input",
            componentProps: {
                type: "text",
                placeholder: "Enter your name",
            },
        },
        {
            name: "email",
            label: "Email",
            component: "input",
            componentProps: {
                type: "email",
                placeholder: "Enter your email",
            },
            validate: (value) => {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(value)) {
                    return "Please enter a valid email address";
                }
            }
        },
        {
            name: "message",
            label: "Message",
            component: "textarea",
            componentProps: {
                placeholder: "Enter your message",
                rows: 6,
            },
        }
    ]
    const [loading, setLoading] = useState(false);
    const emptyFormData = {
        name: {
            value: "",
            error: "",
        },
        email: {
            value: "",
            error: "",
        },
        message: {
            value: "",
            error: "",
        },
    }
    const [formData, setFormData] = useState(emptyFormData)
    const [error, setError] = useState("");
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: {
                value,
                error: "",
            },
        }));
    };

    const validateForm = ()=>{
        let isFormValid = true;
        formFields.forEach(({name, validate}) => {
            if(!formData[name].value) {
                isFormValid = false;
                setFormData(prev => ({
                    ...prev,
                    [name]: {
                        ...prev[name],
                        error: "This field is required",
                    },
                }));
                return;
            }
            if(validate) {
                const error = validate(formData[name].value);
                if(error) {
                    isFormValid = false;
                    setFormData(prev => ({
                        ...prev,
                        [name]: {
                            ...prev[name],
                            error,
                        },
                    }));
                }
            }
        })
        return isFormValid;
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        if(!validateForm()) {
            setLoading(false);
            return;
        }
        try {
            await emailjs.sendForm(import.meta.env.VITE_EMAIL_JS_SERVICE_ID, import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY);
            setFormData(emptyFormData);
        } catch (error) {
            console.log('Failed to send email!', error);
            setError("Something went wrong! Please try again");
        }finally{
            setLoading(false);
        }
    };

  return (
    <section id="contact" className="mt-16 section-padding flex-center">
        <div className="w-full h-full md:px-10 px-5">
            <SectionTitle title="Contact Me" subtitle="💬 Get in touch"/>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-6">
                    <div className="card-border rounded-xl md:p-10 p-5 flex-center">
                        <form noValidate ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col flex-center gap-7">
                            {formFields.map((field) => (
                                <div key={field.name} className="w-full">
                                    <label htmlFor={field.name}>{field.label}</label>
                                    <field.component
                                        {...field.componentProps}
                                        name={field.name}
                                        value={formData[field.name].value}
                                        onChange={handleInputChange}
                                    />
                                    {formData[field.name].error && <p className="text-red-400">{formData[field.name].error}</p>}
                                </div>
                            ))}
                            <Button
                                iconPath="/portfolio-v1/images/arrow-right.svg"
                                className="md:h-16 w-full h-12 send-button" 
                                text={loading ? "Sending..." : "Send Message"}
                                type="submit"
                                loading={loading}
                            />
                            {error && <p className="text-red-500">{error}</p>}
                        </form>
                    </div>
                </div>
                <div className="lg:col-span-6 flex flex-col items-center justify-center">
                    <div className="bg-black-500 hover:cursor-grab rounded-lg w-full xl:h-120 sm:h-90 h-70">
                    <ComputerModelExperience/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact