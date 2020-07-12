import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContentBox, Layout } from 'src/components';

const breadcrumbsData = [{ title: 'Home', slug: '/' }, { title: 'Contact Us' }];

const Contact = () => (
  <Layout seoTitle="Contact Us" pageTitle="Contact Us" breadcrumbsData={breadcrumbsData}>
    <div>
      <iframe
        width="100%"
        height="320"
        frameBorder="0"
        allowFullScreen
        title="40 Upper George St, Luton LU1 2RS"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803.9000996423591!2d-0.4215075939992259!3d51.8798711063948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876485ba8724fe5%3A0x54209803df42b2aa!2sChristchurch+House%2C+40+Upper+George+St%2C+Luton+LU1+2RS!5e0!3m2!1sen!2suk!4v1559521202736!5m2!1sen!2suk"
      />
    </div>

    <div className="pt-2 flex flex-wrap">
      <ContentBox title="Office & Postal Address" className="w-full lg:w-5/12 lg:pr-12">
        <p>Suite 110 Christchurch House</p>
        <p>40 Upper George Street</p>
        <p>Luton, LU1 2RS</p>
        <p>Bedfordshire</p>

        <ul className="mt-6 leading-7">
          <li>
            <FontAwesomeIcon icon="phone-alt" className="mr-2" />
            Tel: 01582 876942 or 01582 932432
          </li>
          <li>
            <FontAwesomeIcon icon={['far', 'envelope']} className="mr-2" />
            <a href="mailto:info@generixcare.co.uk" className="text-color-primary">
              info@generixcare.co.uk
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon="globe-europe" className="mr-2" />
            <a href="http://generixcare.co.uk" className="text-color-primary">
              http://generixcare.co.uk
            </a>
          </li>
        </ul>
      </ContentBox>

      <ContentBox title="Opening Hours" className="w-full lg:w-5/12">
        <p>Mondays to Fridays: 9am - 5pm</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <h4>For Existing Service Users</h4>
        <p>Mondays to Fridays: 7am - 9pm</p>
        <p>Weekends and Bank Holidays:: 8am - 6pm</p>
      </ContentBox>
    </div>

    <div className="pt-8">
      <h2 className="font-medium">Job Openings</h2>
      <p>
        To speak with us about job openings, vacancies and apprenticeships, please call 01582 932432
        or 01582 876942
        <strong> Mondays to Fridays:</strong> 9am – 5pm or email us at{' '}
        <a href="mailto:info@generixcare.co.uk">info@generixcare.co.uk</a>
      </p>
    </div>
  </Layout>
);

export default Contact;
