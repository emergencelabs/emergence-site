import Head from "next/head"
import { getAllPosts } from "../lib/api"
import Preamble from "../components/preamble"
import PageSection from "../components/page-section"
import PostPreview from "../components/post-preview"
import PageSubSection from "../components/page-sub-section"
import LogoGrid from "../components/logo-grid"
import CTAButton from "../components/cta-button"
import Testimonial from "../components/testimonial"
import ServicesItem from "../components/services-item"
import ConsultingServices from "../components/consulting-services"

export default function IndexPage({ allPosts }) {
  return (
    <>
      <Head>
        <title>Emergence Labs</title>
      </Head>

      <section>
        <Preamble title="Better Business Through Technology">
          <p className="font-sans leading-loose max-w-xl mb-12">
            Emergence Labs is a technology consulting firm enhancing all aspects
            of Small-to-Medium sized Businesses customer lifecycles. We&#39;re
            democratizing customer lifecycle technologies and business practices
          </p>

          <CTAButton label="Get In Touch" href="#" />
        </Preamble>

        <div className="relative">
          <img
            src="/assets/dots.svg"
            alt="Decorative circles"
            className="absolute right-0 opacity-50"
            style={{ top: "-24rem", maxWidth: "2rem", zIndex: "-1" }}
          ></img>
        </div>

        <section className="px-12 my-6 py-6 max-w-screen-xl mx-auto">
          <div className="flex justify-between flex-col sm:flex-row">
            <div className="flex-col sm:mb-0 mb-6" style={{ flexBasis: "30%" }}>
              <img
                src="/assets/success-pillar.svg"
                alt="Success"
                className="w-32 mb-4"
              />
              <h5 className="font-serif font-semibold text-xl">Success</h5>
              <p className="mt-2">
                As your business grows it&#39;s essential that your CRM
                continually improves to support those new activities.
              </p>
            </div>
            <div className="flex-col sm:mb-0 mb-6" style={{ flexBasis: "30%" }}>
              <img
                src="/assets/affordable-pillar.svg"
                alt="Affordable"
                className="w-32 mb-4"
              />
              <h5 className="font-serif font-semibold text-xl">
                Affordability
              </h5>
              <p className="mt-2">
                We have developed a proprietary framework that allows us to
                provide top-tier services for a fraction of the cost.
              </p>
            </div>
            <div className="flex-col sm:mb-0 mb-6" style={{ flexBasis: "30%" }}>
              <img
                src="/assets/speed-pillar.svg"
                alt="Speed"
                className="w-32 mb-4"
              />
              <h5 className="font-serif font-semibold text-xl">Speed</h5>
              <p className="mt-2">
                We get you live quickly. that allows us to provide top-tier
                services for a fraction of the cost.
              </p>
            </div>
          </div>
        </section>

        <section className="my-8 p-12  bg-emrg-light-grey ">
          <div className="mx-auto max-w-screen-xl">
            <ConsultingServices
              title="Salesforce Consulting & Implementation"
              imageSrc="/assets/backgrounds/working-with-overlay.png"
              imgAlt="People working with icons overlayed"
            >
              <p className="leading-loose">
                Our team provides sales consulting services for your unique
                business challenges. We have the experience needed to quickly
                deliver any solutions required to drive efficiency and adoption.
                Our implementations focus on delivering <i>usable</i> tools for
                your business processes. End user adoption is one of the best
                indicators of your ongoing success with Salesforce.
              </p>
            </ConsultingServices>
          </div>
        </section>
        <section className="my-8 p-12 mx-auto max-w-screen-xl">
          <PageSubSection
            title="Emergence Success Desk"
            imageSrc="/assets/backgrounds/working-with-overlay.png"
            imgAlt="People working with icons overlayed"
            reverse
          >
            <p className="leading-loose">
              At Emergence Labs we work hard to ensure that the CRM system is
              properly configured so that it can support the organization’s
              unique CRM strategy. Naturally, as business goals and customer
              expectations evolve, the CRM must change with it. We’re here to
              grow with you.
            </p>
            <p className="leading-loose">
              The Emergence Success Desk is embedded in your Salesforce Org as a
              Utility Item which means it's available from any page in your CRM
              application. Users are able to launch a live-chat with your
              Emergence Salesforce Admin and continue that conversation as they
              navigate around the application. Your Emergence Salesforce Admin
              will also create custom videos for your users to help them with
              any requests they have.
            </p>
          </PageSubSection>
        </section>

        <LogoGrid />

        <Testimonial />

        <section className="px-12 relative mx-auto max-w-screen-xl">
          <PageSection title="Our Products">
            <a href="#">
              <div className="my-6 flex sm:flex-row flex-col text-center sm:text-left  items-center sm:items-start justify-around  border border-gray-300 bg-white rounded-lg p-4 hover:shadow-md duration-500 ease-in-out transition-shadow">
                <img
                  src="/assets/rle.svg"
                  alt="Related List Editor App Icon"
                  className="w-16 mx-4 mb-6 sm:mb-0"
                />
                <div className="flex-grow">
                  <h6 className="font-semibold">Related List Editor</h6>
                  <p className="my-2 text-sm">
                    Have you ever wanted to change the stage or close date for a
                    related opportunity when you’re viewing the opportunities
                    list on an account only to realize that you have to click to
                    visit or full-edit the opportunity in order to do so? Well,
                    those pains are a thing of the past! With the Emergence
                    Related List editor you can make quick changes to any of the
                    fields on your related lists simply by clicking right on the
                    related list itself.
                  </p>
                  <span className="text-gray-600 text-sm">Coming Soon</span>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="my-6 flex sm:flex-row flex-col text-center sm:text-left  items-center sm:items-start justify-around  border border-gray-300 bg-white rounded-lg p-4 hover:shadow-md duration-500 ease-in-out transition-shadow">
                <img
                  src="/assets/toasty.svg"
                  alt="Custom Toasts App Icon"
                  className="w-16 mx-4 mb-6 sm:mb-0"
                />
                <div className="flex-grow">
                  <h6 className="font-semibold">Custom Salesforce Toasts</h6>
                  <p className="my-2 text-sm">
                    Easy to create and use custom toast notifications and soft
                    validation rules that can be configured for any Object in
                    Salesforce. Users can add custom toasts to Lightning record
                    pages with just a few clicks using the Lighting App Builder.
                  </p>
                  <span className="text-gray-600 text-sm">Coming Soon</span>
                </div>
              </div>
            </a>
            <a href="https://getcustomerinterviews.com">
              <div className="my-6 flex sm:flex-row flex-col text-center sm:text-left  items-center sm:items-start justify-around  border border-gray-300 bg-white rounded-lg p-4 hover:shadow-md duration-500 ease-in-out transition-shadow">
                <img
                  src="/assets/customer-voice.svg"
                  alt="Customer Voice Logo"
                  className="w-16 mx-4 mb-6 sm:mb-0"
                />
                <div className="flex-grow">
                  <h6 className="font-semibold">Customer Interviews</h6>
                  <p className="my-2 text-sm">
                    Easily run customer interviews with a unified solution for
                    running sessions, analyzing responses, and presenting your
                    findings.
                  </p>
                </div>
              </div>
            </a>
          </PageSection>
          <PageSection title="Emergence Thoughts">
            {allPosts.map((post) => (
              <PostPreview
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
              />
            ))}
          </PageSection>
        </section>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt"
  ])
  return {
    props: { allPosts }
  }
}
