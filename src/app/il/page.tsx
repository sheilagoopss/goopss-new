import EmailInput from "@/components/common/EmailInput";
import JoinWaitListButton from "@/components/common/JoinWaitListButton";
import CustomCard from "@/components/landing/CustomCard";
import ListItem from "@/components/landing/ListItem";
import Image from "next/image";
import MultiSlideSlider from "@/components/landing/MultiSlideSlider";
import { Open_Sans } from "next/font/google";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import MaintenancePackage from "@/components/landing/MaintenancePackage";
import ContactForm from "@/components/landing/ContactForm";

const openSansHebrew = Open_Sans({
  subsets: ["hebrew"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans-hebrew",
});

const slides = [
  {
    beforeImage: "/images/landing/Before1.jpg",
    afterImage: "/images/landing/After1.jpg",
    title: "שיפור מקצועי",
    subtitle: "ראה כיצד אנו הופכים תמונות מוצר רגילות לתמונות ברמה גבוהה",
  },
  {
    beforeImage: "/images/landing/Before2.jpg",
    afterImage: "/images/landing/After2.jpg",
    title: "שלמות ויזואלית",
    subtitle: "עריכה מקצועית שנותנת למוצרים שלך מראה מעוצב",
  },
  {
    beforeImage: "/images/landing/Before3.jpg",
    afterImage: "/images/landing/After3.jpg",
    title: "שיפור צבעים",
    subtitle: "הגברת צבעים וניגודיות לתמונות מושכות יותר",
  },
  {
    beforeImage: "/images/landing/Before4.jpg",
    afterImage: "/images/landing/After4.jpg",
    title: "הסרת רקע",
    subtitle: "רקע נקי ומושלם לכל מוצר",
  },
  {
    beforeImage: "/images/landing/Before5.jpg",
    afterImage: "/images/landing/After5.jpg",
    title: "שיפור פרטים",
    subtitle: "הדגשת פרטים חשובים במוצר",
  },
  {
    beforeImage: "/images/landing/Before6.jpg",
    afterImage: "/images/landing/After6.jpeg",
    title: "תאורה מושלמת",
    subtitle: "איזון תאורה להצגת המוצר במיטבו",
  },
  {
    beforeImage: "/images/landing/Before7.jpg",
    afterImage: "/images/landing/After7.jpg",
    title: "חידוד תמונה",
    subtitle: "תמונות חדות וצלולות",
  },
  {
    beforeImage: "/images/landing/Before8.jpg",
    afterImage: "/images/landing/After8.jpg",
    title: "התאמת גודל",
    subtitle: "גודל מושלם לכל פלטפורמה",
  },
  {
    beforeImage: "/images/landing/Before9.jpg",
    afterImage: "/images/landing/After9.jpg",
    title: "עיצוב מותג",
    subtitle: "שמירה על עקביות מותג בכל התמונות",
  },
  {
    beforeImage: "/images/landing/Before10.jpg",
    afterImage: "/images/landing/After10.jpg",
    title: "אופטימיזציה",
    subtitle: "תמונות מותאמות למנועי חיפוש",
  },
];

const Page = () => {
  return (
    <div
      className={`w-full flex flex-col ${openSansHebrew.variable} font-sans`}
      dir="rtl"
    >
      <div
        style={{
          backgroundImage: "url('/images/landing/herobg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
        className="mb-10"
      >
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-col items-center justify-center text-center gap-4 md:pt-10 pt-10">
            <div className="flex flex-col gap-4 md:w-3/4 md:px-0 px-8">
              <h1 className="md:text-5xl text-4xl font-bold" dir="rtl">
                הצלחה באיצי, ללא מתח
                <br />
                תן לסוכן ה-AI שלך לעשות את העבודה
                <br />
                בזמן שאתה מתמקד ביצירה שלך
              </h1>
              <p className="text-gray-500 text-lg md:mt-0 mt-10" dir="rtl">
                goopss משתף פעולה עם קבוצה נבחרת של משתמשים מוקדמים.
                <br />
                הירשם עכשיו כדי להיות בין הראשונים לחוות את זה.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden md:w-[100ch] md:mt-10 mt-24">
              <Image
                loading="lazy"
                src="/images/landing/Tasks.svg"
                alt="Hero Background"
                quality={100}
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:py-10 container mx-auto px-4 md:px-0 bg-transparent">
        <div className="flex flex-col items-center justify-center text-center gap-10 md:pt-10 pt-2 md:gap-20">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold" dir="rtl">
              ברוכים הבאים לניהול איצי
              <br />
              ללא מאמץ
            </h1>
            <p className="text-gray-500 text-lg" dir="rtl">
              goopss מטפל במשימות שגוזלות זמן, ומאפשר לך להתמקד ביצירה ומכירה.
            </p>
          </div>
          <div className="flex md:flex-row flex-col md:gap-20 gap-10">
            <CustomCard
              title="ה-AI שלנו עושה את העבודה"
              description="אופטימיזציה, תמונות, פוסטים ברשתות חברתיות והמלצות לפרסום - הכל נעשה עבורך."
              image="/images/landing/weDoTheWork.svg"
              className="bg-pink-200"
            />
            <CustomCard
              title="הישאר מעודכן"
              description="קבל התראות דרך האפליקציה, אימייל או SMS."
              image="/images/landing/realTimeUpdate.svg"
              className="bg-blue-200"
            />
            <CustomCard
              title="ראה כל שינוי"
              description="עקוב בקלות אחר כל שיפור במקום אחד."
              image="/images/landing/fullTransparency.svg"
              className="bg-lime-200"
            />
          </div>
          <JoinWaitListButton text="הצטרף לרשימת המתנה" />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0 bg-transparent">
        <div className="flex md:flex-row flex-col-reverse md:gap-20 gap-10 items-center py-20">
          <div className="md:w-1/2">
            <Image
              src="/images/landing/listings.svg"
              alt="Listings"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-2 md:w-1/2">
            <div className="flex flex-col gap-4 md:mb-10">
              <h1
                className="text-4xl font-bold md:text-right text-center"
                dir="rtl"
              >
                אופטימיזציה של רשימות, בקלות
              </h1>
              <p
                className="text-lg text-gray-500 text-center md:text-right rtl:text-right"
                dir="rtl"
              >
                ה-AI שלנו משפר את הרשימות שלך להשפעה מקסימלית, מיטבי כותרות,
                תגיות ותיאורים להגברת הנראות. תמונות לפני ואחרי מדגימות את
                התוצאות.
              </p>
            </div>

            <ListItem
              title="רשימות חזקות יותר, יותר מכירות"
              description="רשימות מותאמות שממירות יותר קונים"
              className="hover:bg-violet-200 border border-violet-200"
            />
            <ListItem
              title="מילות מפתח מוגברות SEO"
              description="הגע ליותר קונים עם מילות מפתח אסטרטגיות"
              className="hover:bg-violet-200 border border-violet-200"
            />
            <ListItem
              title="מותאם ומוכן"
              description="הרשימות שלך נשארות מעודכנות לביצועים מיטביים"
              className="hover:bg-violet-200 border border-violet-200"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0 bg-transparent">
        <div className="flex flex-col items-center text-center gap-10 py-20">
          <div>
            <h1 className="text-5xl font-bold" dir="rtl">
              מתמונות בסיסיות לאיכות סטודיו
            </h1>
            <p className="text-lg text-gray-500" dir="rtl">
              הפוך תמונות מוצר פשוטות לתמונות מקצועיות ומעוצבות
              <br />
              שמציגות את המותג שלך במיטבו.
            </p>
          </div>
          <div className="w-full flex flex-col md:gap-10 gap-5">
            <div className="w-full">
              <div className="relative overflow-hidden rounded-3xl">
                <MultiSlideSlider slides={slides} className="bg-[#FFE0F0]" />
              </div>
            </div>
          </div>
          <JoinWaitListButton text="הצטרף לרשימת המתנה" />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0 bg-transparent">
        <div className="flex md:flex-row flex-col-reverse md:gap-20 gap-10 items-center py-20">
          <div className="md:w-1/2 flex flex-col gap-2">
            <div className="flex flex-col gap-4">
              <h1
                className="text-4xl font-bold md:text-right text-center"
                dir="rtl"
              >
                הגבר את הנוכחות שלך ברשת
              </h1>
              <p
                className="text-lg text-gray-500 md:text-right text-center rtl:text-right"
                dir="rtl"
              >
                מערכת מונעת AI שלנו מנהלת את דף הפייסבוק שלך, אינסטגרם, קבוצות
                פייסבוק ופינטרסט על ידי יצירת פוסטים מעניינים ופרסום שלהם בזמנים
                הטובים ביותר.
              </p>
            </div>
            <ListItem
              title="כיוון חכם"
              description="הגע לקהל הנכון עם הקבוצות,שטאגים והלוחות הטובים ביותר"
              className="hover:bg-lime-200 border border-lime-200"
            />
            <ListItem
              title="פוסטים מעניינים"
              description="פוסטים אותנטיים שמתחברים לקהל שלך ומובילים לאינטראקציה"
              className="hover:bg-lime-200 border border-lime-200"
            />
            <ListItem
              title="פרסום עקבי"
              description="הישאר פעיל עם זרימה קבועה של פוסטים מתוזמנים"
              className="hover:bg-lime-200 border border-lime-200"
            />
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/landing/amplify.svg"
              alt="Before and After"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0 bg-transparent">
        <div className="flex md:flex-row flex-col-reverse md:gap-20 gap-10 items-center py-20">
          <div className="md:w-1/2">
            <Image
              src="/images/landing/AdsRecommendation.svg"
              alt="Listings"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-2 md:w-1/2">
            <div className="flex flex-col gap-4 md:mb-10">
              <h1
                className="text-4xl font-bold md:text-right text-center"
                dir="rtl"
              >
                הגדל את הצלחת הפרסום שלך
              </h1>
              <p
                className="text-lg text-gray-500 text-center md:text-right rtl:text-right"
                dir="rtl"
              >
                ניהול פרסום יכול להיות מכריע, אבל התהליך הופך לקל. תוסף הכרום
                שלנו מנתח את נתוני החנות שלך כדי לזהות את הרשימות הטובות ביותר
                לקידום. קבל המלצות מבוססות נתונים לאופטימיזציה של תקציב הפרסום
                שלך ולהגדלת המכירות.
              </p>
            </div>

            <ListItem
              title="בחירת מוצר חכמה"
              description="הרשימות בעלות הפוטנציאל הגבוה ביותר מומלצות לביצועי פרסום טובים יותר"
              className="hover:bg-pink-200 border border-pink-200"
            />
            <ListItem
              title="החלטות מבוססות נתונים"
              description="השתמש בתובנות אמיתיות מהחנות כדי למקסם את התקציב שלך"
              className="hover:bg-pink-200 border border-pink-200"
            />
            <ListItem
              title="אופטימיזציה ללא מאמץ"
              description="לא עוד ניחושים, רק המלצות ברורות ואסטרטגיות לפרסום"
              className="hover:bg-pink-200 border border-pink-200"
            />
          </div>
        </div>
      </div>
      <MaintenancePackage />
      <div
        style={{
          backgroundImage: "url('/images/landing/footer.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "90vh",
        }}
        className="flex flex-col justify-center mt-10 bg-transparent"
      >
        <div className="flex flex-col items-center justify-center text-center gap-6 pt-44 pb-8 md:pt-32">
          {/* <h1 className="text-5xl font-bold" dir="rtl">הצטרף לרשימת ההמתנה!</h1>
          <p className="text-gray-500 max-w-2xl mx-auto" dir="rtl">
            הצטרף לרשימת ההמתנה והיה הראשון לחוות ניהול חנות איצי ללא טרחה!
            ה-AI שלנו מטפל בכל בזמן שאתה מתמקד במה שחשוב.
          </p> */}
          {/* <EmailInput 
            buttonText="הצטרף לרשימת המתנה"
            placeholderText="הכנס את כתובת המייל שלך"
            savingText="שומר..."
          /> */}
          <ContactForm />
        </div>
      </div>
      <FloatingWhatsApp />
    </div>
  );
};

export default Page;
