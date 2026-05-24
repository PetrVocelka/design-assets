import type { AccessibleProps } from '../external-svg.js';
import { resolveAccessibility } from '../external-svg.js';

export interface InlineSpec {
  viewBox: string;
  innerHtml: string;
  colorMode: 'monochrome' | 'colored';
}

export type InlineSvgProps = AccessibleProps & {
  spec: InlineSpec;
  className?: string;
};

export function renderInline({ spec, className, ...a11y }: InlineSvgProps) {
  const { ariaHidden, role, ariaLabel } = resolveAccessibility(a11y);
  const isMonochrome = spec.colorMode === 'monochrome';

  return (
    <svg
      viewBox={spec.viewBox}
      className={className}
      fill={isMonochrome ? 'none' : undefined}
      stroke={isMonochrome ? 'currentColor' : undefined}
      aria-hidden={ariaHidden}
      role={role}
      aria-label={ariaLabel}
      focusable="false"
      dangerouslySetInnerHTML={{ __html: spec.innerHtml }}
    />
  );
}
