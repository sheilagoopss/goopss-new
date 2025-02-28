import EmailInput from "@/components/common/EmailInput";
import JoinWaitListButton from "@/components/common/JoinWaitListButton";
import CustomCard from "@/components/landing/CustomCard";
import ListItem from "@/components/landing/ListItem";
import Image from "next/image";

const Page = () => {
  return (
    <div className="mx-auto w-full flex flex-col">
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
        <div className="flex flex-col items-center justify-center text-center gap-4 md:pt-10 pt-10">
          <div className="flex flex-col gap-4 md:w-1/2 md:px-0 px-8">
            <h1 className="md:text-5xl text-4xl font-bold">
              Wave Goodbye to Etsy
              <br />
              Overwhelm – We Do the Work,
              <br />
              You Get the Updates!
            </h1>
            <p className="text-gray-500 text-lg md:mt-0 mt-10">
              Imagine every detail of your Etsy store—SEO tweaks, design magic,
              and social posts—handled for you, with friendly updates keeping
              you in the loop.
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
      <div className="md:py-10">
        <div className="flex flex-col items-center justify-center text-center gap-10 md:pt-10 pt-2 md:gap-20">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold">
              Welcome to effortless
              <br /> Etsy management
            </h1>
            <p className="text-gray-500 text-lg">
              Goopss acts like your personal team, automating every task and
              sending real-time updates so you always know what's been done.
            </p>
          </div>
          <div className="flex md:flex-row flex-col md:gap-20 gap-10">
            <CustomCard
              title="We Do the Work"
              description="Automated optimizations, design upgrades, and social posts."
              image="/images/landing/weDoTheWork.svg"
              className="bg-pink-200"
            />
            <CustomCard
              title="Real-Time Updates"
              description="Notifications via app, email, or SMS."
              image="/images/landing/realTimeUpdate.svg"
              className="bg-blue-200"
            />
            <CustomCard
              title="Full Transparency"
              description="Automated optimizations, design upgrades, and social posts."
              image="/images/landing/fullTransparency.svg"
              className="bg-lime-200"
            />
          </div>
          <JoinWaitListButton />
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse md:gap-40 gap-10 justify-center py-20 px-4 md:px-0">
        <div>
          <Image
            src="/images/landing/listings.svg"
            alt="Listings"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-2 md:w-1/3">
          <div className="flex flex-col gap-4 md:mb-10">
            <h1 className="text-4xl font-bold">Your Listings, Upgraded</h1>
            <p className="text-lg text-gray-500 text-center md:text-left">
              Our AI transforms your listings into SEO powerhouses. We optimize
              titles, tags, and descriptions—and notify you with
              before-and-after snapshots.
            </p>
          </div>

          <ListItem
            title="Smart Analysis"
            description="In-depth review of your product details"
            className="hover:bg-violet-200 border border-violet-200"
          />
          <ListItem
            title="Precision Keywords"
            description="Boost your visibility with targeted keywords"
            className="hover:bg-violet-200 border border-violet-200"
          />
          <ListItem
            title="Instant Updates"
            description="Friendly alerts when improvements go live"
            className="hover:bg-violet-200 border border-violet-200"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-10 py-20 md:px-0 px-4">
        <div>
          <h1 className="text-5xl font-bold">From Basic to Brilliant</h1>
          <p className="text-lg text-gray-500">
            We take your everyday photos and turn them into
            <br />
            studio-quality images that capture your brand's story—while keeping
            you updated
          </p>
        </div>
        <div className="flex flex-col md:gap-10 gap-5">
          <div className="flex md:flex-row flex-col md:gap-10 gap-5">
            <div>
              <Image
                src="/images/landing/ExpertEnhancement.svg"
                alt="Basic"
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                src="/images/landing/visualStoryTelling.svg"
                alt="Basic"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="flex justify-center w-full">
            <Image
              src="/images/landing/timelyAlert.svg"
              alt="Before and After"
              width={1000}
              height={1000}
              className="hidden md:block object-cover"
            />
          </div>
        </div>
        <JoinWaitListButton />
      </div>
      <div className="flex md:flex-row flex-col-reverse gap-20 justify-center py-20 px-4 md:px-0">
        <div className="flex flex-col gap-2 md:w-1/3">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold md:text-left text-center ">
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
        <Image
          src="/images/landing/amplify.svg"
          alt="Before and After"
          width={500}
          height={500}
        />
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
