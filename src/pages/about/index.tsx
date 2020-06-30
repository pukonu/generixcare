import React from 'react';

import { Layout } from 'src/components';

import img1 from 'src/images/generix-care-worker-helping-woman.jpg';
import logo1 from 'src/images/logo-ukhca.png';
import logo2 from 'src/images/logo-cqc.png';
import logo3 from 'src/images/logo-dementia-friends.png';
import logo4 from 'src/images/logo-dementia-action-alliance.png';

const breadcrumbsData = [{ title: 'Home', slug: '/' }, { title: 'About Us' }];

const About = () => {
  return (
    <Layout seoTitle="About Us" pageTitle="About Us" breadcrumbsData={breadcrumbsData}>
      <div className="flex flex-wrap lg:-mx-4">
        <div className="w-full lg:w-1/3 lg:px-4">
          <img className="w-full max-w-md h-auto object-cover" src={img1} alt="about us" />
        </div>

        <div className="mt-4 lg:mt-0 w-full lg:w-2/3 lg:px-4">
          <p>
            GenerixCare Luton is an independent home care provider with a simple mission: we want to
            help people do more, feel better and enjoy life!
          </p>
          <p>
            As we live longer and often have increasingly complex health and social care needs, our
            aim is to provide that extra pair of hands you and/or your loved ones need at home… to
            help you do more, feel better and enjoy life!
          </p>
          <p>
            We offer a range of home care and support packages which vary according to client needs
            including light housekeeping and domestic cleaning packages; personal care and social
            support; to intensive home care and social support for clients with long term conditions
            and those with palliative care needs.
          </p>
          <p>
            We also provide children’s care and support services at home and in the community. We
            offer social and respite care services to families and children aged 4 to 18 years with
            learning or physical disabilities in their homes or access the community.
          </p>
          <p>
            We place qualified and experienced carers with families to provide short breaks and
            live-in care as required arranged to suit the needs of the child or young adult and
            their family.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-8">
        <div className="mb-2 w-full md:w-1/2 lg:w-1/4">
          <img
            src={logo1}
            className="max-w-sm lg:max-w-full h-auto lg:h-16 object-cover lg:object-contain lg:mx-auto"
            alt="ukhca"
          />
        </div>
        <div className="mb-2 w-full md:w-1/2 lg:w-1/4">
          <img
            src={logo2}
            className="max-w-sm lg:max-w-full h-auto lg:h-16 object-cover lg:object-contain lg:mx-auto"
            alt="cqc"
          />
        </div>
        <div className="mb-2 w-full md:w-1/2 lg:w-1/4">
          <img
            src={logo3}
            className="max-w-sm lg:max-w-full h-auto lg:h-16 object-cover lg:object-contain lg:mx-auto"
            alt="dementia friends"
          />
        </div>
        <div className="mb-2 w-full md:w-1/2 lg:w-1/4">
          <img
            src={logo4}
            className="max-w-sm lg:max-w-full h-auto lg:h-16 object-cover lg:object-contain lg:mx-auto"
            alt="daa"
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
