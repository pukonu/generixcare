import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { sliderData } from 'src/data/slider';
import {
  ContentBox,
  Layout,
  NewsletterContainer,
  NewsletterForm,
  Slider,
  SlideItem
} from 'src/components';

const Index = () => {
  const themeContext = useContext(ThemeContext);
  const { tertiaryDark, tertiaryLight } = themeContext;

  return (
    <Layout seoTitle="Home Page">
      <div className="-mx-4 -mt-5">
        <Slider>
          {sliderData.map(({ title, link, image }) => (
            <SlideItem key={title} title={title} link={link} image={image} />
          ))}
        </Slider>
      </div>

      <blockquote className="py-10">
        <h1 className="leading-tight">
          In your home. Friendly, Personal, Dedicated to meeting your care needs
        </h1>
      </blockquote>

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

      <div
        className="px-2 py-4 rounded-md mb-12"
        style={{ backgroundColor: tertiaryLight, color: tertiaryDark }}
      >
        <ul className="list-disc pl-4">
          <li className="mb-2">
            Our carers are fully referenced and CRB-checked giving you peace of mind and matched to
            meet your specific needs
          </li>
          <li>
            We directly employ all care staff and fully support them with comprehensive training
          </li>
        </ul>
      </div>

      <NewsletterContainer>
        <NewsletterForm />
      </NewsletterContainer>
    </Layout>
  );
};

export default Index;
