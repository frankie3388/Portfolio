"use client"
import React from "react";
import InputField from "../global-components/InputField";
import Button from "../global-components/Button";

const ContactMeForm: React.FC = () => {
    return(
        <form className="w-full max-w-4xl sm:p-5 flex flex-col items-center">
            <InputField placeholder={"Enter Name"}  />
            <InputField placeholder={"Enter Email"}  />
            {/* <InputField placeholder={"Enter Message"}  /> */}
            <textarea
                placeholder="Enter Message"
                className="p-2 border rounded-md resize-none h-32 my-2 w-full text-black" 
            />
            <div className="w-full flex justify-end mt-4">
                <Button
                    variant='primary'
                    appearance='filled'
                    onClick={() => { console.log('button clicked'); }}
                    children={'Send Message'}
                />
            </div>
        </form>
    )
}

export default ContactMeForm;