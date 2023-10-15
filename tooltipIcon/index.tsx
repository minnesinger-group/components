import { FunctionComponent } from 'preact';

import InlineIcon, { InlineIconProps } from '../inlineIcon';

import './tooltipIcon.styl';

const Tooltip: FunctionComponent<{ text: string }> = ({ text }) => {
  return (
    <div class="tooltipMask">
      <p class="content">{text}</p>
      <span class="arrow" />
    </div>
  );
};

export interface TooltipIconProps extends InlineIconProps {
  text: string;
}

const TooltipIcon: FunctionComponent<TooltipIconProps> = ({
  class: className,
  children,
  text,
  ...props
}) => {
  return (
    <InlineIcon class={`tooltipIconRoot ${className ? className : ''}`} {...props}>
      {children}
      <Tooltip text={text} />
    </InlineIcon>
  );
};

export default TooltipIcon;
