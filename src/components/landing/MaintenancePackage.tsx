import { FaCheck } from "react-icons/fa"
import { Open_Sans } from "next/font/google"

const openSansHebrew = Open_Sans({
  subsets: ["hebrew"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans-hebrew",
})

export default function MaintenancePackage() {
  return (
    <section className={`w-full py-16 md:py-24 ${openSansHebrew.variable} font-sans`} dir="rtl">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-5xl font-bold tracking-tight mb-2">חבילת תחזוקה בסיסית</h2>
          <p className="text-gray-500 text-xl max-w-[700px]">
            הפתרון המושלם לשמירה על נוכחות דיגיטלית חזקה ומתמשכת
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center w-full">
          {/* Pink Card with Blob */}
          <div className="relative rounded-3xl p-0 md:p-0 order-1 md:order-2 overflow-hidden md:w-7/12 w-full h-full min-h-full" style={{background: 'linear-gradient(135deg, #FFE0F7 0%, #FFD0F0 100%)'}}>
            {/* Blob SVG */}
            <svg className="absolute -top-10 -left-10 w-60 h-60 opacity-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFB0EE" d="M44.8,-67.2C56.6,-59.7,63.7,-44.2,68.2,-29.2C72.7,-14.2,74.6,0.3,70.2,13.2C65.8,26.1,55.1,37.4,43.1,46.7C31.1,56,17.8,63.3,3.2,62.1C-11.4,60.9,-22.8,51.2,-34.2,42.2C-45.6,33.2,-57,24.9,-62.7,13.1C-68.4,1.3,-68.4,-13.9,-62.2,-26.2C-56,-38.5,-43.6,-48,-30.2,-54.7C-16.8,-61.4,-2.4,-65.3,12.2,-69.1C26.8,-72.9,41.6,-76.7,44.8,-67.2Z" transform="translate(100 100)" />
            </svg>
            {/* White Content Box */}
            <div className="relative bg-white rounded-2xl shadow-lg p-14 md:p-20 m-10">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-4xl font-bold mb-1">משימות חד פעמיות</h3>
                  <p className="text-black font-bold text-xl">ניתוח מעמיק וייעוץ מקצועי</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-4">
                    <FaCheck className="h-5 w-5 text-[#e84c88] mt-0.5 flex-shrink-0" />
                    <span className="text-xl text-gray-500">ניתוח חנות מקיף</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <FaCheck className="h-5 w-5 text-[#e84c88] mt-0.5 flex-shrink-0" />
                    <span className="text-xl text-gray-500">באנרים ל-Etsy ו-Pinterest (במידת הצורך על פי הניתוח)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <FaCheck className="h-5 w-5 text-[#e84c88] mt-0.5 flex-shrink-0" />
                    <span className="text-xl text-gray-500">אופטימיזציה לחשבון Pinterest כולל תיאור, כותרת וכו׳ (במידת הצורך על פי הניתוח)</span>
                  </li>
                </ul>
                <div className="mb-6">
                  <h3 className="text-4xl font-bold mb-1">משימות חודשיות</h3>
                  <p className="text-black font-bold text-xl">תחזוקה שוטפת לצמיחה מתמדת</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-4">
                    <FaCheck className="h-5 w-5 text-[#e84c88] mt-0.5 flex-shrink-0" />
                    <span className="text-xl text-gray-500">25 טקסטים חלופיים למוצרים (הוספת alt text לכל התמונות בכל מוצר)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <FaCheck className="h-5 w-5 text-[#e84c88] mt-0.5 flex-shrink-0" />
                    <span className="text-xl text-gray-500">אופטימיזציה ל-10 מוצרים, החל מהמוצרים הכי פחות נמכרים</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <FaCheck className="h-5 w-5 text-[#e84c88] mt-0.5 flex-shrink-0" />
                    <span className="text-xl text-gray-500">שכפול של 5 מהמוצרים הנמכרים ביותר</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <FaCheck className="h-5 w-5 text-[#e84c88] mt-0.5 flex-shrink-0" />
                    <span className="text-xl text-gray-500">העלאת 5 מוצרים חדשים (אם יש)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <FaCheck className="h-5 w-5 text-[#e84c88] mt-0.5 flex-shrink-0" />
                    <span className="text-xl text-gray-500">12 פוסטים לדף Facebook ו-Instagram (3 בשבוע), 30 פוסטים ל-Pinterest</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <FaCheck className="h-5 w-5 text-[#e84c88] mt-0.5 flex-shrink-0" />
                    <span className="text-xl text-gray-500">10 תמונות מוצר</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Green Card with Blob */}
          <div className="relative flex flex-col items-center justify-center order-2 md:order-1 rounded-3xl p-0 md:p-0 overflow-hidden md:w-5/12 w-full h-full min-h-full" style={{background: 'linear-gradient(135deg, #F1FFB0 0%, #D8F5A2 100%)'}}>
            {/* Blob SVG */}
            <svg className="absolute -top-16 -right-16 w-96 h-96 opacity-60 z-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#DAEE68" d="M44.8,-67.2C56.6,-59.7,63.7,-44.2,68.2,-29.2C72.7,-14.2,74.6,0.3,70.2,13.2C65.8,26.1,55.1,37.4,43.1,46.7C31.1,56,17.8,63.3,3.2,62.1C-11.4,60.9,-22.8,51.2,-34.2,42.2C-45.6,33.2,-57,24.9,-62.7,13.1C-68.4,1.3,-68.4,-13.9,-62.2,-26.2C-56,-38.5,-43.6,-48,-30.2,-54.7C-16.8,-61.4,-2.4,-65.3,12.2,-69.1C26.8,-72.9,41.6,-76.7,44.8,-67.2Z" transform="translate(100 100)" />
            </svg>
            {/* White Content Box */}
            <div className="relative bg-white rounded-2xl shadow-lg p-14 md:p-20 m-10">
              <div className="text-center mb-6">
                <h3 className="text-5xl font-bold mb-2">$99</h3>
                <p className="text-gray-500 text-xl">חבילה חודשית</p>
              </div>
              <div className="space-y-4">
                <p className="text-center mt-4 text-xl font-bold">ליווי מקצועי לצמיחה מתמדת של החנות שלך</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 