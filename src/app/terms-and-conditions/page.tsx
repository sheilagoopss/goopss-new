"use client";

import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions: React.FC = () => {
  const content = {
    overview: `This website is operated by goopss. Throughout the site, the terms "we", "us" and "our" refer to goopss. goopss offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.

By visiting our site and/ or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.

Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.

Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.`,
    sections: {
      1: `By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.

You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).

You must not transmit any worms or viruses or any code of a destructive nature.

A breach or violation of any of the Terms will result in an immediate termination of your Services.`,
      2: `We reserve the right to refuse service to anyone for any reason at any time.

You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.

You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.

The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.`,
      3: `We are not responsible if the information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.

This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.`,
      4: `Prices for our products are subject to change without notice.

We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.

We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.`,
      5: `At Goopss, we strive to deliver top-notch subscription products that cater to our clients' needs and expectations.

We understand that circumstances may arise where you feel our subscription service doesn't meet your requirements. With this in mind, we have established a clear refund policy.

Refund Guidelines:

we offer a 30-day refund window from the date of your first payment, for our subscription products.
Requests for refunds must be made within 30 days of the initial payment.
One-off payments for services are non-refundable.
How to Request a Refund: Contact our customer support team at hello@goopss.com within the 30-day period. Provide relevant details about your subscription and your reason for the refund request. We're here to help and ensure your subscription meets your expectations.

Please avoid chargebacks with your payment provider; reach out to us first so we can assist you effectively. For any questions or clarifications about our subscription refund policy, contact us at hello@goopss.com`,
      6: `We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.

You acknowledge and agree that we provide access to such tools "as is" and "as available" without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.

Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).

We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.`,
      7: `Certain content, products and services available via our Service may include materials from third-parties.

Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.

We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.`,
      8: `If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments. We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service.

You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.`,
      9: `Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).

We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.`,
      10: `In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information;

(g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.`,
      11: `No Guarantees: We do not guarantee that your use of our service will be uninterrupted, timely, secure, or error-free.

Results Not Warranted: We do not warrant that the results obtained from the service will be accurate or reliable.

Service Interruption: You agree that we may remove or cancel the service at any time without notice.

Use at Your Own Risk: Your use of the service is at your sole risk. The service and products are provided 'as is' and 'as available' without any express or implied warranties or conditions.

Maximum Liability: In no case shall goopss or its affiliates be liable for any damages, and our liability is limited to the maximum sum paid by you for our services.

Allocation of Risks: These Terms allocate risks between us and you. You acknowledge that our pricing reflects this`,
      12: `You acknowledge and agree that our services are provided to assist in the growth of your Etsy store. However, you expressly understand and agree that we are not liable for any consequences, including but not limited to the closure of your Etsy store, resulting from any violation of Etsy's rules and policies, including, but not limited to, intellectual property breaches, dropshipping violations, or any other breaches. It is your responsibility to ensure that all activities conducted in your Etsy store comply with Etsy's terms and conditions. We shall not bear any responsibility or liability for the closure of your store by Etsy due to any such violations.`,
      13: `In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.`,
      14: `The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.

These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.

If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).`,
      15: `The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.

These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).

Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.`,
      16: `These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Israel.`,
      17: `You can review the most current version of the Terms of Service at any time at this page.

We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.`,
      18: `Goopss Freelancers Ltd. is registered at: HaPortsim 27, Jerusalem, Israel

Questions about the Terms of Service should be sent to us at hello@goopss.com`
    }
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            Terms and Conditions
          </h1>

          <div className="space-y-8 text-zinc-700 dark:text-zinc-300">
            {/* Overview Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                OVERVIEW
              </h2>
              {content.overview.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </section>

            {/* Numbered Sections */}
            {Object.entries(content.sections).map(([number, text]) => (
              <section key={number} className="space-y-4">
                <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                  SECTION {number} - {getSectionTitle(parseInt(number))}
                </h2>
                {text.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default TermsAndConditions;

function getSectionTitle(section: number): string {
  const titles: { [key: number]: string } = {
    1: "ONLINE STORE TERMS",
    2: "GENERAL CONDITIONS",
    3: "ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION",
    4: "MODIFICATIONS TO THE SERVICE AND PRICES",
    5: "REFUND",
    6: "OPTIONAL TOOLS",
    7: "THIRD-PARTY LINKS",
    8: "USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS",
    9: "ERRORS, INACCURACIES AND OMISSIONS",
    10: "PROHIBITED USES",
    11: "DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY",
    12: "ETSY STORE CLOSURE DISCLAIMER",
    13: "SEVERABILITY",
    14: "TERMINATION",
    15: "ENTIRE AGREEMENT",
    16: "GOVERNING LAW",
    17: "CHANGES TO TERMS OF SERVICE",
    18: "CONTACT INFORMATION",
  };
  return titles[section] || "";
} 