import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const initialContactState = {
    Full_Name: '',
    Email: '',
    Phone_Number: '',
    Address: '',
    
};

const ContactInput = ({ name, value, onChange }) => (
    <input
        className="border p-2 my-2 primary-font primary-styling"
        type="text"
        name={name}
        placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
        value={value}
        onChange={onChange}
    />
);

const SocialMediaIcons = () => (
    <div className="flex justify-around my-4">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
    </div>
);

function BookingSection({ children, business }) {
    const [contact, setContact] = useState(initialContactState);
    const { data } = useSession();

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    const saveContact = () => {
        console.log(contact);
        toast('Contact information saved successfully!')
    };

    return (
        <div className="primary-font primary-styling">
            <Sheet>
                <SheetTrigger asChild>
                    {children}
                </SheetTrigger>
                <SheetContent className="overflow-auto">
                    <SheetHeader>
                        <SheetTitle>Contact Us</SheetTitle>
                        <SheetDescription>
                            Please fill out the form below to contact us
                            <div className='flex flex-col gap-5 items-baseline'>
                                {Object.keys(contact).map(key => (
                                    <ContactInput key={key} name={key} value={contact[key]} onChange={handleChange} />
                                ))}
                            </div>
                            <SocialMediaIcons />
                            <p>Email: {business.email}</p>
                        </SheetDescription>
                    </SheetHeader>
                    <SheetFooter className="mt-5">
                        <SheetClose asChild>
                            <div className='flex gap-5'>
                                <Button variant="destructive" className="primary-font primary-styling">Cancel</Button>
                                <Button onClick={saveContact} className="primary-font primary-styling">Submit</Button>
                            </div>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default BookingSection;