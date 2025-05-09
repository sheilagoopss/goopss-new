"use client"

import { Open_Sans } from "next/font/google"
import { FormEvent } from "react"

const openSansHebrew = Open_Sans({
  subsets: ["hebrew"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans-hebrew",
})

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form handling will be added here later
    console.log("Form submitted")
  }

  return (
    <section className={`w-full py-16 md:py-24 ${openSansHebrew.variable} font-sans`} dir="rtl">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-5xl font-bold tracking-tight mb-2">מעוניינים? השאירו פרטים</h2>
          <p className="text-gray-500 text-xl max-w-[700px]">
            נשמח ליצור איתכם קשר ולהתאים את הפתרון המושלם עבורכם
          </p>
        </div>

        <div className="w-full max-w-[1000px] mx-auto">
          <div className="relative rounded-3xl p-0 md:p-0 overflow-hidden w-full" style={{background: '#EBF1FB'}}>
            {/* Blob SVG */}
            <svg className="absolute -top-10 -left-10 w-60 h-60 opacity-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#B4BDFF" d="M44.8,-67.2C56.6,-59.7,63.7,-44.2,68.2,-29.2C72.7,-14.2,74.6,0.3,70.2,13.2C65.8,26.1,55.1,37.4,43.1,46.7C31.1,56,17.8,63.3,3.2,62.1C-11.4,60.9,-22.8,51.2,-34.2,42.2C-45.6,33.2,-57,24.9,-62.7,13.1C-68.4,1.3,-68.4,-13.9,-62.2,-26.2C-56,-38.5,-43.6,-48,-30.2,-54.7C-16.8,-61.4,-2.4,-65.3,12.2,-69.1C26.8,-72.9,41.6,-76.7,44.8,-67.2Z" transform="translate(100 100)" />
            </svg>
            {/* White Content Box */}
            <div className="relative bg-white rounded-2xl shadow-lg p-14 md:p-20 m-10">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-lg font-medium">שם מלא</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200 text-right"
                      placeholder="הכנס את שמך המלא"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-lg font-medium">אימייל</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200 text-right"
                      placeholder="הכנס את כתובת המייל שלך"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-lg font-medium">טלפון</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200 text-right"
                      placeholder="הכנס את מספר הטלפון שלך"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-lg font-medium">הודעה</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-200 text-right"
                    placeholder="כתוב את הודעתך כאן..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#B4BDFF] text-white rounded-lg py-3 px-6 text-lg font-medium hover:bg-[#9BA4E6] transition-colors"
                >
                  שלח הודעה
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 