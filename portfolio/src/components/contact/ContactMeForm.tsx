"use client"
import React from "react";
import InputField from "../global-components/InputField";
import Button from "../global-components/Button";

const ContactMeForm: React.FC = () => {
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "bff93d77-6d6e-4260-a8bd-511312da7da3");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

    return(
  
            <form className="w-full max-w-4xl sm:p-5 flex flex-col items-center" onSubmit={handleSubmit}>
                <InputField placeholder={"Enter Name"} type={"text"} name={"name"} />
                <InputField placeholder={"Enter Email"} type={"email"} name={"email"} />
                {/* <InputField placeholder={"Enter Message"}  /> */}
                <textarea
                    placeholder="Enter Message"
                    className="p-2 border rounded-md resize-none h-32 my-2 w-full text-black" 
                    name="message"
                />
                <div className="w-full flex justify-end mt-4">
                    <Button
                        variant='primary'
                        appearance='filled'
                        onClick={() => { console.log('button clicked'); } }
                        children={'Send Message'} 
                        type={"submit"}                    
                        />
                </div>
            </form>

        
    )
}

export default ContactMeForm;