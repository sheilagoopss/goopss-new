import EmailInput from "@/components/common/EmailInput";
import JoinWaitListButton from "@/components/common/JoinWaitListButton";
import CustomCard from "@/components/landing/CustomCard";
import ListItem from "@/components/landing/ListItem";
import Image from "next/image";
import BeforeAfterSlider from "@/components/landing/BeforeAfterSlider";

const Page = () => {
  return (
    <div className="w-full flex flex-col">
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
              <h1 className="md:text-5xl text-4xl font-bold">
              Etsy Success, Stress-Free
                <br />
                Let Your AI Agent Do the Work 
                <br />
                While You Focus on Your Craft
              </h1>
              <p className="text-gray-500 text-lg md:mt-0 mt-10">
              goopss is partnering with a select group of early users.
                <br />
                Sign up now to be among the first to experience it.
              </p>
            </div>
            <JoinWaitListButton />
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
      <div className="md:py-10 container mx-auto px-4 md:px-0">
        <div className="flex flex-col items-center justify-center text-center gap-10 md:pt-10 pt-2 md:gap-20">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold">
              Welcome to Effortless
              <br /> Etsy Management
            </h1>
            <p className="text-gray-500 text-lg">
            goopss takes care of the time-consuming tasks, giving you more time 
            to focus on creating and selling.
              
            </p>
          </div>
          <div className="flex md:flex-row flex-col md:gap-20 gap-10">
            <CustomCard
              title="Our AI Does the Work"
              description="Optimizations, images, social posts, ad recos done for you."
              image="/images/landing/weDoTheWork.svg"
              className="bg-pink-200"
            />
            <CustomCard
              title="Stay in the Loop"
              description="Get notifications via app, email, or SMS."
              image="/images/landing/realTimeUpdate.svg"
              className="bg-blue-200"
            />
            <CustomCard
              title="See Every Change"
              description="Easily track every improvement in one place."
              image="/images/landing/fullTransparency.svg"
              className="bg-lime-200"
            />
          </div>
          <JoinWaitListButton />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0">
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
              <h1 className="text-4xl font-bold">Listing Optimization, Made Easy</h1>
              <p className="text-lg text-gray-500 text-center md:text-left">
              Our AI fine-tunes your listings for maximum impact, optimizing titles, tags, and descriptions 
              to boost visibility. Before-and-after snapshots highlight the results.
              </p>
            </div>

            <ListItem
              title="Stronger Listings, More Sales"
              description="Optimized listings that convert more shoppers"
              className="hover:bg-violet-200 border border-violet-200"
            />
            <ListItem
              title="SEO-Boosted Keywords"
              description="Reach more buyers with strategically chosen keywords"
              className="hover:bg-violet-200 border border-violet-200"
            />
            <ListItem
              title="Optimized & Ready"
              description="Your listings stay updated for peak performance"
              className="hover:bg-violet-200 border border-violet-200"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col items-center text-center gap-10 py-20">
          <div>
            <h1 className="text-5xl font-bold">From Basic to Studio-Quality Images</h1>
            <p className="text-lg text-gray-500">
          Turn simple product photos into polished, professional images 
              <br />
              that showcase your brand at its best.
            </p>
          </div>
          <div className="w-full flex flex-col md:gap-10 gap-5">
            <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-5">
              <div className="relative overflow-hidden rounded-3xl">
                <BeforeAfterSlider
                  beforeImage="/images/landing/Before1.jpg"
                  afterImage="/images/landing/After1.jpg"
                  title="Expert Enhancement"
                  subtitle="See how we turn ordinary product photos into high-end images"
                  beforeLabel="Before"
                  afterLabel="After"
                  className="bg-[#FFE0F0]"
                />
                <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
                  <Image
                    src="/images/landing/Star5.svg"
                    alt="Star 5"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl">
                <BeforeAfterSlider
                  beforeImage="/images/landing/Before2.jpg"
                  afterImage="/images/landing/After2.jpg"
                  title="Visual Perfection"
                  subtitle="Professional editing that gives your products a polished look."
                  beforeLabel="Before"
                  afterLabel="After"
                  className="bg-[#E5E7FB]"
                />
                <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
                  <Image
                    src="/images/landing/Star6.svg"
                    alt="Star 6"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            {/* <div className="w-full">
              <Image
                src="/images/landing/TimelyAlerts.svg"
                alt="Before and After"
                width={1000}
                height={1000}
                className="hidden md:block object-cover w-full"
              />
            </div> */}
          </div>
          <JoinWaitListButton />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex md:flex-row flex-col-reverse md:gap-20 gap-10 items-center py-20">
          <div className="md:w-1/2 flex flex-col gap-2">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold md:text-left text-center">
                Amplify Your Online Presence
              </h1>
              <p className="text-lg text-gray-500 md:text-left text-center">
              Our AI-powered system manages your Facebook Page, Instagram, 
              Facebook Groups, and Pinterest by crafting engaging posts 
              and publishing them at the best times.
              </p>
            </div>
            <ListItem
              title="Smart Targeting"
              description="Reach the right audience with the best groups, hashtags, and boards"
              className="hover:bg-lime-200 border border-lime-200"
            />
            <ListItem
              title="Engaging Posts"
              description="Authentic posts that connect with your audience and drive interaction"
              className="hover:bg-lime-200 border border-lime-200"
            />
            <ListItem
              title="Consistent Posting"
              description="Stay active with a steady flow of scheduled posts"
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
      <div className="container mx-auto px-4 md:px-0">
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
              <h1 className="text-4xl font-bold">Maximize Your Ad Success</h1>
              <p className="text-lg text-gray-500 text-center md:text-left">
              Running ads can be overwhelming, but the process is made easy. 
              Our Chrome extension analyzes your store stats to pinpoint the best listings for promotion.
              Get data-backed recommendations 
              to optimize your ad spend and boost sales.  
              </p>
            </div>

            <ListItem
              title="Smart Product Selection"
              description="Your highest-potential listings are recommended for better ad performance"
              className="hover:bg-pink-200 border border-pink-200"
            />
            <ListItem
              title="Data-Driven Decisions"
              description="Use real store insights to make the most of your budget"
              className="hover:bg-pink-200 border border-pink-200"
            />
            <ListItem
              title="Effortless Optimization"
              description="No more guesswork, just clear and strategic ad recommendations"
              className="hover:bg-pink-200 border border-pink-200"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('/images/landing/footer.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
        }}
        className="flex flex-col justify-center mt-10"
      >
        <div className="flex flex-col items-center justify-center text-center gap-6 pt-32 pb-8">
          <h1 className="text-5xl font-bold">Get on the Waitlist!</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Join the waitlist and be the first to experience hassle-free Etsy
            store management! Our AI handles it all while you focus on what matters.
          </p>
          <EmailInput />
        </div>
      </div>
    </div>
  );
};

export default Page;
