import React, { FunctionComponent } from 'react';

// For some reason this isn't working, any HTML element will pass this
type HeadingElement = React.ReactElement<React.HTMLAttributes<HTMLHeadingElement>>;

export type Props = {
  readonly children: HeadingElement | readonly HeadingElement[];
};

export const Title: FunctionComponent<Props> = (props: Props) => {
  return <div>{props.children}</div>;
};
