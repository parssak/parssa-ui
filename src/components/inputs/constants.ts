import { Variant } from '../../types';

export const getInputBaseCx = (options?: {
  removeFocus?: boolean;
  override?: () => string;
}) => {
  const base =
    'font-medium tracking-tight rounded transition-colors  border shadow';

  const focusStyles = options?.removeFocus
    ? ''
    : 'focus:outline-none focus:ring focus:ring-theme-base/50';

  const overrideStyles = options?.override ? options.override() : '';

  return [base, focusStyles, overrideStyles].join(' ');
};

export const
 getInputSizeCx = () => {
  return 'pl-size-x pr-size-x pt-size-y pb-size-y text-size leading-size';
};

export const getInputVariantCx = (
  variant: Variant,
  options?: {
    removeHover?: boolean;
    override?: (variant: Variant) => string;
  }
) => {
  const { removeHover, override } = options || {};

  const INPUT_VARIANT_STYLES: Record<Variant, string> = {
    solid: `
      bg-theme-base
      text-theme-base
      border-theme-base
      ${removeHover ? '' : 'hover:bg-theme-active'}

      `,
    outline: `
      bg-transparent
      text-theme-base
      border-theme-base
      ${removeHover ? '' : 'hover:bg-theme-active'}
    `,
    ghost: `
      bg-transparent
      text-theme-base hover:text-theme-active
      border-transparent
      ${removeHover ? '' : 'hover:bg-theme-active'}
    `,
    inverted: `
      bg-theme-inverted 
      text-theme-inverted 
      border-theme-inverted
      ${removeHover ? '' : 'hover:bg-theme-base hover:text-theme-active'}
      `,
  };

  const overrideStyles = override?.(variant) || '';

  return [INPUT_VARIANT_STYLES[variant], overrideStyles].join(' ');
};
