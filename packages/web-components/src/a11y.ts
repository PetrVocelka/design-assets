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

export function readA11yFromElement(el: HTMLElement): AccessibleProps {
  const ariaLabel = el.getAttribute('aria-label') ?? undefined;
  const decorativeAttr = el.getAttribute('decorative');

  if (decorativeAttr === 'true' || decorativeAttr === '') {
    return { decorative: true };
  }
  if (decorativeAttr === 'false' && ariaLabel) {
    return { decorative: false, ariaLabel };
  }
  if (ariaLabel) {
    return { ariaLabel };
  }
  return {};
}
