"use client"
import React, { useEffect, useState } from "react";

const ContactFormSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("Your message has been sent successfully. We will get back to you soon.");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // TODO: send to API
      // Simulate a short network delay for UX
      await new Promise((res) => setTimeout(res, 800));
      setShowSuccess(true);
      setSuccessMessage("Message sent! Thank you for contacting us.");
      setForm({ name: "", email: "", message: "" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!showSuccess) return;
    const t = setTimeout(() => setShowSuccess(false), 3000);
    return () => clearTimeout(t);
  }, [showSuccess]);

  return (
    <div className="bg-[#222] text-white p-8 rounded shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-medium mb-2">LET&rsquo;S TALK HERE</h2>
      <p className="mb-6 text-gray-200 text-sm">Feel free to send us a message</p>
      <form className="space-y-4" onSubmit={handleSubmit} aria-busy={isLoading}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full px-4 py-2 rounded border border-gray-300 text-black bg-white focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full px-4 py-2 rounded border border-gray-300 text-black bg-white focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full px-4 py-2 rounded border border-gray-300 text-black bg-white focus:outline-none min-h-[100px] disabled:opacity-70 disabled:cursor-not-allowed"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-500 text-white py-2 rounded font-medium mt-2 cursor-pointer disabled:cursor-not-allowed"
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </form>
      {showSuccess && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="flex items-start gap-3 rounded-md bg-green-600 text-white shadow-lg px-4 py-3 max-w-sm">
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">✓</span>
            <div className="text-sm leading-snug pr-2">{successMessage}</div>
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
    </div>
  );
};

export default ContactFormSection;