import { ComponentProps, FunctionComponent } from 'preact';

import './inlineIcon.styl';

export interface InlineIconProps extends ComponentProps<'span'> {}

export const InlineIcon: FunctionComponent<InlineIconProps> = ({
  class: className,
  children,
  ...props
}) => {
  return (
    <span class={`inlineIconRoot ${className ? className : ''}`} {...props}>
      {children}
    </span>
  );
};

export default InlineIcon;
