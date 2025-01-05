'use client';

import { useState } from 'react';
import Modal from './Modal';
import Image from 'next/image';

export default function PortfolioSection() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h5 className="text-center text-reactColor text-3xl mb-12 font-bold">PORTFOLIO</h5>

        {/* Card 1 - Optml Infuse */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10 flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/optml_portal.png"
              alt="Optml Portal Screenshot"
              className="rounded-lg"
              width={500}
              height={300}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <h4 className="text-reactColor text-2xl font-semibold">
              Optml Infuse - Healthcare Application <span className="portPill ml-2">Sept 21-Oct 24</span>
            </h4>
            <p className="text-gray-700 my-4">
              A secure, cloud-backed solution designed for infusion medical centers to streamline workflows and enhance
              patient care. As a React.js developer, I built dynamic user interfaces powered by GraphQL APIs and AWS
              services like AppSync and Lambda. The project also featured a Twilio-based reminder system that reduced
              no-shows and improved operational efficiency.
            </p>
            <button
              onClick={() => setOpenModal('optml')}
              className="portBtn py-2 px-4"
            >
              Preview
            </button>
          </div>
        </div>

        {/* Card 2 - RampExplorer */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10 flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/ramp_pc.png"
              alt="RampExplorer Placeholder"
              className="rounded-lg"
              width={500}
              height={300}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <h4 className="text-reactColor text-2xl font-semibold">
              RampExplorer.com <span className="portPill ml-2">MVP Complete</span>
            </h4>
            <p className="text-gray-700 my-4">
            RampExplorer enables anglers to share and discover boat ramps and kayak access points using advanced mapping technologies like the Google Maps API. The platform allows users to create custom entries tailored for both boat and kayak use, providing essential details such as parking availability, launch conditions, accessibility, and nearby amenities. An exciting upcoming feature will integrate Google Earth Engine to provide the latest satellite imagery, enabling anglers and boaters to view up-to-date water color and conditions. This future enhancement will help users make even more informed decisions about their trips, ensuring they have the best experience on the water.
            </p>
            <button
              onClick={() => setOpenModal('rampExplorer')}
              className="portBtn py-2 px-4"
            >
              Preview
            </button>
          </div>
        </div>

        {/* Card 3 - Sniffing Out Stories */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10 flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/sniffing_pc.png"
              alt="Sniffing Out Stories Placeholder"
              className="rounded-lg"
              width={500}
              height={300}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <h4 className="text-reactColor text-2xl font-semibold">
              SniffingOutStories.com <span className="portPill ml-2">In Progress</span>
            </h4>
            <p className="text-gray-700 my-4">
              Sniffing Out Stories is a platform combining AI storytelling with social pet sharing. Users can create personalized pet stories and illustrations using AI while connecting with a community of pet lovers. With PostgreSQL on Vercel and Next.js, we&apos;re building features like user profiles, pet profiles, and a social feed for sharing stories and photos, all enhanced with modern styling and optimized performance.
            </p>
            <button
              onClick={() => setOpenModal('sniffingOutStories')}
              className="portBtn py-2 px-4"
            >
              Preview
            </button>
          </div>
        </div>

        {/* New Card - Portfolio Project */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10 flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/traviscode_pc.png"
              alt="TravisCode Portfolio Screenshot"
              className="rounded-lg"
              width={500}
              height={300}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <h4 className="text-reactColor text-2xl font-semibold">
              TravisCode Portfolio <span className="portPill ml-2">Completed</span>
            </h4>
            <p className="text-gray-700 my-4">
              A personal portfolio built to showcase my skills and projects. This modern and responsive site leverages cutting-edge technologies, including Next.js 15 with App Routing, React 19, and Tailwind CSS, for a sleek and performant experience.
            </p>
            <button
              onClick={() => setOpenModal('portfolioProject')}
              className="portBtn py-2 px-4"
            >
              Preview
            </button>
          </div>
        </div>
      </div>

          {/* Existing Modals */}
      {/* Modal 1 - Optml Infuse */}
      <Modal
  open={openModal === 'optml'}
  onClose={() => setOpenModal(null)}
  title="Travis Code - Optml Infuse"
>
  <div className="flex flex-col md:flex-row gap-6">
    {/* Image Section */}
    <div className="md:w-1/2 w-full flex justify-center">
      <Image
        src="/optml_site.png"
        alt="Patient screen"
        className="rounded-lg object-contain"
        width={500}
        height={300}
        priority
      />
    </div>

    {/* Text Section */}
    <div className="md:w-1/2 w-full text-gray-300 text-lg leading-relaxed overflow-y-auto max-h-96">
      <p className="mt-2">
        Optml Infuse is a cutting-edge, cloud-based application tailored for infusion medical centers. Its primary focus
        is to enhance patient management and streamline clinic workflows, making operations more efficient and user-friendly.
      </p>
      <p className="mt-4">
        As a React.js developer, I played an integral role in building dynamic and responsive user interfaces that
        seamlessly integrated with a GraphQL-based API to enable real-time data updates. The project extensively leveraged
        AWS services, including AppSync and Lambda, to ensure scalability and secure handling of sensitive patient data.
      </p>
      <p className="mt-4">
        I also developed a custom Twilio-powered reminder system, which automated appointment notifications for patients.
        This innovation significantly reduced no-shows and improved clinic efficiency. Optml Infuse not only optimized
        patient care but also enhanced overall communication, making it an invaluable tool for both providers and patients.
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>React.js</li>
        <li>Kendo React</li>
        <li>AWS (AppSync, Lambda)</li>
        <li>Twilio</li>
      </ul>
    </div>
  </div>
</Modal>




     {/* Modal 2 - RampExplorer */}
     <Modal
  open={openModal === 'rampExplorer'}
  onClose={() => setOpenModal(null)}
  title="RampExplorer"
>
  <div className="flex flex-col md:flex-row gap-6">
    {/* Image Section with Link */}
    <div className="md:w-1/2 flex justify-center">
      <a href="https://rampexplorer.com" target="_blank" rel="noopener noreferrer">
        <Image
          src="/ramp_site.png" // Placeholder image from Optml Infuse
          alt="RampExplorer.com"
          className="rounded-lg"
          width={500}
          height={300}
        />
      </a>
    </div>
    
    {/* Text Section */}
    <div className="md:w-1/2">
      <p className="mt-2">
        <a
          href="https://rampexplorer.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400  underline hover:text-reactColor"
        >
          RampExplorer.com
        </a>{' '}
        enables anglers to share and discover boat ramps and kayak access points. It uses advanced mapping technologies
        like the Google Maps API and will soon incorporate the latest satellite imagery from Google Earth Engine to
        provide up-to-date water conditions and insights.
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>React.js</li>
        <li>Google Maps API</li>
        <li>Python</li>
        <li>AWS Amplify</li>
        <li>Google Earth Engine</li>
      </ul>
    </div>
  </div>
</Modal>


{/* Modal 3 - Sniffing Out Stories */}
<Modal
  open={openModal === 'sniffingOutStories'}
  onClose={() => setOpenModal(null)}
  title="Sniffing Out Stories"
>
  <div className="flex flex-col md:flex-row gap-6">
    <div className="md:w-1/2 flex justify-center">
      <Image
        src="/sniffing_site.png" // Replace with an actual pet-related cover image from the public folder
        alt="Sniffing Out Stories Cover"
        className="rounded-lg"
        width={500}
        height={300}
      />
    </div>
    <div className="md:w-1/2">
      <p className="mt-2">
        <strong>Sniffing Out Stories</strong> is a social media platform for pet lovers, where users can share 
        stories, images, and moments about their pets. The platform integrates AI-powered tools to craft personalized 
        pet narratives and illustrations, bringing each pet's unique story to life.
      </p>
      <p className="mt-2">
        Built with a modern stack, Sniffing Out Stories ensures seamless performance, efficient data storage, 
        and an engaging user experience.
      </p>
      <ul className="list-disc list-inside mt-4">
      <li>AI-powered storytelling and image generation</li>
        <li>Next.js with App Router</li>
        <li>React 19 for seamless UI</li>
        <li>PostgreSQL for robust data management</li>
        <li>Tailwind CSS for responsive design</li>
        <li>AI-powered storytelling and image generation</li>
      </ul>
    </div>
  </div>
</Modal>

      {/* New Modal - Portfolio Project */}
      <Modal open={openModal === 'portfolioProject'} onClose={() => setOpenModal(null)} title="TravisCode Portfolio">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 flex justify-center">
            <Image src="/portfolio_site.png" alt="TravisCode Portfolio" className="rounded-lg" width={500} height={300} />
          </div>
          <div className="md:w-1/2 text-gray-300">
            <p className="mt-2">
              Built with modern technologies, this portfolio highlights my technical skills and projects.
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Next.js 15</li>
              <li>React 19</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>
      </Modal>
    </section>
  );
}
