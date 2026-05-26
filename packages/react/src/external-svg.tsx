/** Default — most icons are decorative UI chrome. */
export type DefaultDecorativeProps = {
  decorative?: undefined;
  ariaLabel?: undefined;
};

export type DecorativeProps = {
  decorative: true;
  ariaLabel?: never;
};

export type SemanticProps = {
  decorative?: false;
  ariaLabel: string;
};

export type AccessibleProps =
  | DefaultDecorativeProps
  | DecorativeProps
  | SemanticProps;

export function resolveAccessibility(props: AccessibleProps): {
  ariaHidden: true | undefined;
  role: 'img' | undefined;
  ariaLabel: string | undefined;
} {
  const decorative = {
    ariaHidden: true as const,
    role: undefined,
    ariaLabel: undefined,
  };

  if (props.decorative === true) {
    return decorative;
  }

  const label = props.ariaLabel?.trim() ?? '';

  if (props.decorative === false || label) {
    if (!label) {
      return decorative;
    }
    return { ariaHidden: undefined, role: 'img', ariaLabel: label };
  }

  return decorative;
}

export type ExternalSvgProps = AccessibleProps & {
  viewBox: string;
  href: string;
  className?: string;
};

export function ExternalSvg({
  viewBox,
  href,
  className,
  ...a11y
}: ExternalSvgProps) {
  const { ariaHidden, role, ariaLabel } = resolveAccessibility(a11y);

  return (
    <svg
      viewBox={viewBox}
      className={className}
      aria-hidden={ariaHidden}
      role={role}
      aria-label={ariaLabel}
      focusable="false"
    >
      <use href={href} />
    </svg>
  );
}
