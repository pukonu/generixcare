/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent } from "react";

import { GlobalPageType } from "src/models/graphql/page";
import { ContentBox, CQCWidget } from "src/components";

const HomeContent: FunctionComponent<GlobalPageType> = ({ data }) => {
  const prismicContent = data?.allPrismicHomeContent?.edges[0]?.node?.data;

  if (!prismicContent) return null;
  const { items } = prismicContent;
  const halfLength = Math.ceil(items.length / 2);

  const leftEl = items
    .slice(0, halfLength)
    .map((item) => <ContentBox key={item.title} {...item} />);

  const rightEl = items.slice(halfLength).map((item) => <ContentBox key={item.title} {...item} />);

  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-5/12 lg:pr-12">{!!leftEl.length && leftEl}</div>
      <div className="w-full lg:w-7/12">{!!rightEl.length && rightEl}</div>
      <CQCWidget />
    </div>
  );
};

export default HomeContent;
