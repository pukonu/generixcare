import React, { FunctionComponent } from "react";

import { ContentBoxProps } from "src/interfaces";
import { ContentBoxWrapper } from "./styles";

const ContentBox: FunctionComponent<ContentBoxProps & { className?: string }> = ({
  title,
  image,
  content,
  children,
  className,
}) => {
  return (
    <ContentBoxWrapper className={className}>
      {!!image && (
        <img
          src={image.url}
          className="w-full h-auto object-cover mb-2"
          alt={image.alt || "Image"}
        />
      )}
      {!!title && <h2 className="title font-secondary">{title}</h2>}
      {!!content && !!content.html && <div dangerouslySetInnerHTML={{ __html: content.html }} />}
      <div>{children}</div>
    </ContentBoxWrapper>
  );
};

export default ContentBox;
