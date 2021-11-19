import type { ExtractPropTypes } from 'vue';
export const buttonType = [
  'defalut',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
  '',
] as const;
export const buttonSize = ['', 'large', 'medium', 'small', 'mini'] as const;

export const buttonProps = {
  type: {
    type: String,
    values: buttonType,
    default: '',
  },
  size: {
    type: String,
    values: buttonSize,
    default: '',
  },
  loading: Boolean,
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
