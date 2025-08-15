"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const info = {
    logo: "/logo.png",
    ministry: "Science, Innovation, and Engineering",
    description: "The Imo State Ministry of Science, Innovation, and Engineering was established to drive technological advancement and economic development through research, innovation, and capacity building. Over the years, it has launched initiatives like the Technology Incubation Centre. In 2022, Imo won the National Science and Technology Expo, highlighting the ministry’s impact. It continues to foster innovation, digital transformation, and collaboration with global partners for sustainable state development.",
    quickLinks: [
        {
            label: "Projects",
            href: "/" 
        },
        {
            label: "News",
            href: "/news"
        },
        {
            label: "Departments",     
            href: "/departments"
        },
        {
            label: "Events",
            href: "/events"
        },
        {
            label: "Media",
            href: "/media"
        },
        {
            label: "Contact Us",        
            href: "/contact-us"
        },
    ],
    newsletter: [
        {
            label: "Signup to Our Newsletter",          
            href: "/"
        },
        {
            label: "Subscribe",
            href: "/"
        },
    ],
    contact: [
        {
            label: "08036609638",
            href: "tel:08036609638"
        },
        {
            label: "imominofsit@gmail.com",
            href: "mailto:imominofsit@gmail.com"
        },  
        {
            label: "Block 3, State Secretariat Complex, P.H Rd, Owerri",
            href: "/"
        },
    ]
}

export default function Footer() {
    const [email, setEmail] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("You have successfully subscribed to the newsletter.");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Basic email validation
        const isValid = /.+@.+\..+/.test(email);
        if (!isValid) {
            setSuccessMessage("Please enter a valid email address.");
            setShowSuccess(true);
            return;
        }
        // Simulate success (replace with actual API call if needed)
        setSuccessMessage("Subscription successful! Thank you for subscribing.");
        setShowSuccess(true);
        setEmail("");
    };

    useEffect(() => {
        if (!showSuccess) return;
        const t = setTimeout(() => setShowSuccess(false), 3000);
        return () => clearTimeout(t);
    }, [showSuccess]);

    return (
        <footer className="w-full bg-white pt-10 px-4 lg:px-18">
            <div className="mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 pb-8">
                {/* Logo and Description */}
                <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-3 mb-2">
                    <Image src={info.logo} alt="Imo State Logo" width={40} height={40} />
                    <span className="font-semibold text-sm text-gray-900 leading-tight">
                    Imo State Ministry<br />
                    of {info.ministry}
                    </span>
                </div>
                <p className="text-xs text-gray-600 max-w-xs">
                    {info.description}
                </p>
                </div>
                {/* Quick Links */}
                <div className="lg:flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
                <div className="flex flex-col flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700">
                    {info.quickLinks.map((link) => (
                        <Link href={link.href} className="hover:underline" key={link.label}>{link.label}</Link>
                    ))}
                </div>
                </div>
                {/* Newsletter and Contact */}
                <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">{info.newsletter[0].label}</h4>
                <form className="flex mb-3" onSubmit={handleSubmit}>
                    <input
                    type="email"
                    placeholder="Myemail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r text-sm font-medium">{info.newsletter[1].label}</button>
                </form>
                {/* Success Popup */}
                {showSuccess && (
                    <div className="fixed bottom-6 right-6 z-50">
                        <div className="flex items-start gap-3 rounded-md bg-green-600 text-white shadow-lg px-4 py-3 max-w-sm">
                            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">✓</span>
                            <div className="text-sm leading-snug pr-2">
                                {successMessage}
                            </div>
                            <button
                                type="button"
                                aria-label="Close"
                                onClick={() => setShowSuccess(false)}
                                className="ml-auto text-white/90 hover:text-white"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}
                <div className="text-xs text-gray-700 space-y-1 flex flex-col">
                    {info.contact.map((item) => (
                        <Link href={item.href} key={item.label}>{item.label}</Link>
                    ))}
                </div>
                </div>
            </div>
            <div className="border-t border-gray-200 text-center py-3 text-xs text-gray-500">Imo State Government</div>
        </footer>
    );
}