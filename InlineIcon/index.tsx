import { ComponentProps, FunctionComponent } from 'preact';

import './inline-icon.styl';

export interface InlineIconProps extends ComponentProps<'span'> {}

export const InlineIcon: FunctionComponent<InlineIconProps> = ({
  class: className,
  children,
  ...props
}) => {
  return (
    <span class={`inline-icon-root ${className ? className : ''}`} {...props}>
      {children}
    </span>
  );
};

export default InlineIcon;
