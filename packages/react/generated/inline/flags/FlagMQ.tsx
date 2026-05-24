// AUTO-GENERATED. DO NOT EDIT.
/**
 * Inline flags/mq component.
 * Warning: inline SVG duplicates path markup in the DOM on every render.
 * Prefer external-file components for icons used many times on one page.
 */
import { mqFlagInline } from '@design-assets/core/generated/inline/flags/mq.js';
import { renderInline } from '../../../src/inline/render-inline.js';
import type { AccessibleProps } from '../../../src/external-svg.js';

export type FlagMQProps = AccessibleProps & {
  className?: string;
};

export function FlagMQ({ className, ...a11y }: FlagMQProps) {
  return renderInline({ spec: mqFlagInline, className, ...a11y });
}
