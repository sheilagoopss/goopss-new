import EmailInput from "@/components/common/EmailInput";
import JoinWaitListButton from "@/components/common/JoinWaitListButton";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
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
          height: "100vh",
        }}
      >
        <Header />
        <div className="flex flex-col items-center justify-center text-center gap-4 pt-20">
          <h1 className="text-5xl font-bold">
            Wave Goodbye to Etsy
            <br /> Overwhelm - We Do the Work,
            <br /> You Get the Updates!
          </h1>
          <p>
            Imagine every detail of your Etsy store—SEO tweaks, design magic,
            and <br /> social posts—handled for you, with friendly updates
            keeping you in the loop.
          </p>
          <Image
            src="/images/landing/heroImage.png"
            alt="Hero Background"
            width={900}
            height={100}
          />
        </div>
      </div>
      <div className="py-10">
        <div className="flex flex-col items-center justify-center text-center gap-10 pt-20">
          <div>
            <h1 className="text-5xl font-bold">
              Welcome to effortless
              <br /> Etsy management
            </h1>
            <p>
              Goopss acts like your personal team, automating every task and
              sending
              <br /> real-time updates so you always know what’s been done.
            </p>
          </div>
          <div className="flex flex-row gap-20">
            <div className="flex flex-col items-center justify-center text-center gap-4 p-10 w-[35ch] rounded-3xl bg-pink-200">
              <Image
                src="/images/landing/weDoTheWork.svg"
                alt="We Do the Work"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-2xl font-bold">We Do the Work</h3>
                <p className="text-sm">
                  Automated optimizations, design upgrades, and social posts.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-4 p-10 w-[35ch] rounded-3xl bg-blue-200">
              <Image
                src="/images/landing/realTimeUpdate.svg"
                alt="Real-Time Updates"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-2xl font-bold">Real-Time Updates</h3>
                <p className="text-sm">Notifications via app, email, or SMS.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-4 p-10 w-[35ch] rounded-3xl bg-lime-200">
              <Image
                src="/images/landing/fullTransparency.svg"
                alt="Full Transparency"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-2xl font-bold">Full Transparency</h3>
                <p className="text-sm">
                  Automated optimizations, design upgrades, and social posts.
                </p>
              </div>
            </div>
          </div>
          <JoinWaitListButton />
        </div>
      </div>
      <div className="flex flex-row gap-20 justify-center py-10">
        <div>
          <Image
            src="/images/landing/listings.svg"
            alt="Listings"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="text-4xl font-bold">Your Listings, Upgraded</h1>
          <p className="text-sm text-gray-500">
            Our AI transforms your listings into SEO powerhouses. <br />
            We optimize titles, tags, and descriptions—and notify you with{" "}
            <br />
            before-and-after snapshots.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col px-10 py-4 rounded-full bg-violet-200">
              <h3 className="text-2xl font-bold">Smart Analysis</h3>
              <p className="text-sm text-gray-500">
                In-depth review of your product details
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col px-10 py-4 rounded-full border border-violet-200">
              <h3 className="text-2xl font-bold">Precision Keywords</h3>
              <p className="text-sm text-gray-500">
                Boost your visibility with targeted keywords
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col px-10 py-4 rounded-full border border-violet-200">
              <h3 className="text-2xl font-bold">Instant Updates</h3>
              <p className="text-sm text-gray-500">
                Friendly alerts when improvements go live
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-10 pt-20">
        <div>
          <h1 className="text-5xl font-bold">From Basic to Brilliant</h1>
          <p className="text-sm text-gray-500">
            We take your everyday photos and turn them into
            <br />
            studio-quality images that capture your brand's story—while keeping
            you updated
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
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
          <Image
            src="/images/landing/timelyAlert.svg"
            alt="Before and After"
            width={1000}
            height={500}
          />
        </div>
        <JoinWaitListButton />
      </div>
      <div className="flex flex-row gap-20 justify-center py-10">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-4xl font-bold">Your Listings, Upgraded</h1>
          <p className="text-sm text-gray-500">
            Our AI transforms your listings into SEO powerhouses. <br />
            We optimize titles, tags, and descriptions—and notify you with{" "}
            <br />
            before-and-after snapshots.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col px-10 py-4 rounded-full bg-lime-200">
              <h3 className="text-2xl font-bold">Smart Analysis</h3>
              <p className="text-sm text-gray-500">
                In-depth review of your product details
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col px-10 py-4 rounded-full border border-lime-200">
              <h3 className="text-2xl font-bold">Precision Keywords</h3>
              <p className="text-sm text-gray-500">
                Boost your visibility with targeted keywords
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col px-10 py-4 rounded-full border border-lime-200">
              <h3 className="text-2xl font-bold">Instant Updates</h3>
              <p className="text-sm text-gray-500">
                Friendly alerts when improvements go live
              </p>
            </div>
          </div>
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
          height: "100vh",
        }}
        className="flex flex-col justify-between"
      >
        <div className="flex flex-col items-center justify-center text-center gap-4 pt-60">
          <h1 className="text-5xl font-bold">Get on the Waitlist!</h1>
          <p className="text-gray-500">
            Join the waitlist and be the first to experience hassle-free Etsy
            <br />
            store management! We handle your SEO, design, and social media while
            <br />
            you stay effortlessly updated.
          </p>
          <EmailInput />
        </div>
        <div className="align-bottom">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;
