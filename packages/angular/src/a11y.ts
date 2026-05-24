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

export function resolveA11yInputs(
  decorative: boolean | undefined,
  ariaLabel: string | undefined,
): ReturnType<typeof resolveAccessibility> {
  if (decorative === true) {
    return resolveAccessibility({ decorative: true });
  }
  if (decorative === false && ariaLabel) {
    return resolveAccessibility({ decorative: false, ariaLabel });
  }
  if (ariaLabel) {
    return resolveAccessibility({ ariaLabel });
  }
  return resolveAccessibility({});
}
