import React from 'react';

import { ContentBox, Layout } from 'src/components';

import img1 from 'src/images/generix-care-worker-helps-man-on-walking-platform.jpg';
import img2 from 'src/images/generix-care-worker-holds-elderly-woman-closely.jpg';
import img3 from 'src/images/generix-care-worker-with-two-elderly-couple.jpg';

const breadcrumbsData = [
  { title: 'Home', slug: '/' },
  { title: 'About Us', slug: '/about' },
  { title: 'Our Values' }
];

const OurValues = () => {
  return (
    <Layout seoTitle="Our Values" pageTitle="Our Values" breadcrumbsData={breadcrumbsData}>
      <h3 className="mb-2">Our Values</h3>

      <div className="flex flex-wrap md:-mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 md:px-4">
          <img
            src={img1}
            className="w-full h-auto object-cover mb-2"
            alt="A genuine interest in delivering high quality care"
          />
          <ContentBox title="A genuine interest in delivering high quality care:">
            <p>We are passionate about delivering holistic, person-centred care.</p>
            <p>
              Our commitment to our clients is to put them first and deliver the services to the
              highest quality that meets their needs.
            </p>
          </ContentBox>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 md:px-4">
          <img
            src={img2}
            className="w-full h-auto object-cover mb-2"
            alt="A genuine interest in delivering high quality care"
          />
          <ContentBox title="Developing our staff to achieve their full potential">
            <p>
              We go to great lengths to find the right people, people dedicated to providing great
              care with full vetting by the Disclosure and Barring Service (DBS).
            </p>
            <p>
              We take great pride in sourcing best-in-class training for our people and helping them
              fulfill their career ambitions while they work with us.
            </p>
          </ContentBox>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 md:px-4">
          <img
            src={img3}
            className="w-full h-auto object-cover mb-2"
            alt="A genuine interest in delivering high quality care"
          />
          <ContentBox title="Making a difference in the communities we serve">
            <p>
              We believe in assisting our clients engage with the community, maintaining active,
              healthy and independent lifestyles as much as possible.
            </p>
            <p>
              We work in partnership with voluntary organisations as well as private and statutory
              providers of care to ensure seamless care provision our clients.
            </p>
          </ContentBox>
        </div>
      </div>
    </Layout>
  );
};

export default OurValues;
