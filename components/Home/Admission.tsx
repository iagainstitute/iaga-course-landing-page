"use client";
import Image from "next/image";
import { useState } from "react";

export default function AdmissionsForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    source: "AIMA course landing page",
  });

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone) {
      alert("Please fill all fields");
      return;
    }

    try {
      await fetch("/api/webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `<!here>\n Name: ${formData.name}\n Phone: ${formData.phone}\n Source: ${formData.source}`,
        }),
      });

      alert("Submitted successfully!");
      setFormData({ name: "", phone: "", source: "AIMA course landing page" });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="relative overflow-hidden py-4   rounded-2xl"
      id="admissions"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/lighting.jpg')" }}
      />

      {/* 🔥 BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-4 py-2 sm:px-6 md:px-8 lg:px-12 flex items-center">
        <div className="w-full max-w-lg mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 px-4 mt-2 p-1 rounded-full border border-red-100 mb-2">
            {/* < <Image src="/gemini.png" height={10} width={30} alt="gemini" /> className="w-4 h-4 text-primary" /> */}
            <Image src="/gemini.png" height={10} width={20} alt="gemini" />
            <span className="text-sm text-white font-bold">Admissions</span>
          </div>
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start your AI journey
          </h1>

          {/* Subheading */}
          <p className="text-white font-medium mb-8">
            Batch starts 15 Jan 2026. Limited seats.
          </p>

          {/* Form */}
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone / WhatsApp"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <button
              onClick={handleSubmit}
              className="w-full px-5 py-4 bg-[#EE4A62] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
