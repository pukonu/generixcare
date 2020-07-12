import React from 'react';

import { ContentBox, Layout } from 'src/components';

const Index = () => {
  return (
    <Layout seoTitle="Home Page">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-5/12 lg:pr-12">
          <ContentBox title="Our Customer Promise">
            <p>
              Our customer promise is to always take a holistic, person centred approach to
              understanding your care needs and providing support that suits you and your family in
              the comfort of your own home
            </p>
          </ContentBox>
          <ContentBox title="Our Unique Advantage Lies In">
            <ul className="leading-7 list-disc pl-4">
              <li>
                A holistic, person-centred approach to care provision in the comfort of your own
                home
              </li>
              <li>Fully referenced, CRB-checked carers offering peace of mind and flexibility</li>
              <li>
                Wide range of care and support packages ranging from
                <ul className="list-disc pl-4">
                  <li>domestic cleaning services</li>
                  <li>personal care and support with social activities</li>
                  <li>
                    specialist care for clients with physical/learning disabilities, long term
                    conditions and those at the end of life.
                  </li>
                </ul>
              </li>
            </ul>
          </ContentBox>
        </div>

        <div className="w-full lg:w-7/12">
          <ContentBox title="The GenerixCare Advantage">
            <p>We provide a wide range of care and support packages ranging from:</p>
            <ul className="leading-7 list-disc pl-4">
              <li>Personal care and support</li>
              <li>Companionship and help with managing your personal affairs</li>
              <li>
                Support to access hospital appointments and social activities in the community
              </li>
              <li>Round the clock live-in care</li>
              <li>Sitting services – day time and night time</li>
              <li>
                Respite care and carer’s breaks to provide support for family members with caring
                responsibilities
              </li>
              <li>
                Specialist care for customers with physical disabilities, learning disabilities,
                long term conditions, mental health and palliative care needs
              </li>
            </ul>
          </ContentBox>
          <ContentBox title="Why GenerixCare?">
            <ul className="leading-7 list-disc pl-4">
              <li>Holistic, person-centred care in the comfort of your home</li>
              <li>Choice, flexibility and peace of mind</li>
              <li>All the support you need to continue living and enjoying life your way</li>
              <li>Friendly, compassionate carers supporting easier access to your community</li>
            </ul>
          </ContentBox>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
