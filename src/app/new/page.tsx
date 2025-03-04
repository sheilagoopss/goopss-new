import EmailInput from "@/components/common/EmailInput";
import JoinWaitListButton from "@/components/common/JoinWaitListButton";
import CustomCard from "@/components/landing/CustomCard";
import ListItem from "@/components/landing/ListItem";
import Image from "next/image";

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
            <div className="flex flex-col gap-4 md:w-1/2 md:px-0 px-8">
              <h1 className="md:text-5xl text-4xl font-bold">
              Etsy Overwhelm, Solved!
                <br />
                We Do the Work,
                <br />
                You Focus on your Craft
              </h1>
              <p className="text-gray-500 text-lg md:mt-0 mt-10">
                goopss is currently working with a select group of early customers.
                <br />
                Fill your details if you're interested in becoming one.
              </p>
            </div>
            <JoinWaitListButton />
            <div className="rounded-2xl overflow-hidden md:w-[100ch] md:mt-10 mt-24">
              <Image
                loading="lazy"
                src="/images/landing/heroImage.png"
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
              Welcome to effortless
              <br /> Etsy management
            </h1>
            <p className="text-gray-500 text-lg">
            goopss takes care of the time-consuming tasks, giving you more time 
            to focus on creating and selling.
              
            </p>
          </div>
          <div className="flex md:flex-row flex-col md:gap-20 gap-10">
            <CustomCard
              title="We Handle the Work"
              description="Optimizations, pro images, and social content done for you."
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
              description="See all improvements in one place."
              image="/images/landing/fullTransparency.svg"
              className="bg-lime-200"
            />
          </div>
          <JoinWaitListButton />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex md:flex-row flex-col-reverse gap-10 items-center py-20">
          <div className="md:w-1/2">
            <Image
              src="/images/landing/listings.svg"
              alt="Listings"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col gap-2 md:w-1/2">
            <div className="flex flex-col gap-4 md:mb-10">
              <h1 className="text-4xl font-bold">Listing Optimization, Made Easy</h1>
              <p className="text-lg text-gray-500 text-center md:text-left">
              Our AI fine-tunes your listings for maximum impact. We optimize titles, tags, and descriptions to boost visibility and show you the results with before-and-after snapshots.
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
            We turn simple product photos into polished, professional images 
              <br />
              that showcase your brand at its best.
            </p>
          </div>
          <div className="w-full flex flex-col md:gap-10 gap-5">
            <div className="flex md:flex-row flex-col md:gap-10 gap-5 justify-between">
              <div className="md:w-1/2">
                <Image
                  src="/images/landing/ExpertEnhancement.svg"
                  alt="Basic"
                  width={500}
                  height={500}
                />
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/landing/visualStoryTelling.svg"
                  alt="Basic"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="w-full">
              <Image
                src="/images/landing/timelyAlert2.svg"
                alt="Before and After"
                width={1000}
                height={1000}
                className="hidden md:block object-cover w-full"
              />
            </div>
          </div>
          <JoinWaitListButton />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex md:flex-row flex-col-reverse gap-10 items-center py-20">
          <div className="md:w-1/2 flex flex-col gap-2">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold md:text-left text-center">
                Amplify Your Online Presence
              </h1>
              <p className="text-lg text-gray-500 md:text-left text-center">
                We manage your social media by curating content, crafting engaging
                posts, and publishing them at peak times—complete with live
                performance updates
              </p>
            </div>
            <ListItem
              title="Curated Strategy"
              description="Targeting the best groups, hashtags, and boards. "
              className="hover:bg-lime-200 border border-lime-200"
            />
            <ListItem
              title="Engaging Posts"
              description="Authentic content that resonates with your audience"
              className="hover:bg-lime-200 border border-lime-200"
            />
            <ListItem
              title="Live Notifications"
              description="Real-time insights delivered as soon as posts go live."
              className="hover:bg-lime-200 border border-lime-200"
            />
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/landing/amplify.svg"
              alt="Before and After"
              width={500}
              height={500}
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
            store management! We handle your SEO, design, and social media while
            you stay effortlessly updated.
          </p>
          <EmailInput />
        </div>
      </div>
    </div>
  );
};

export default Page;
