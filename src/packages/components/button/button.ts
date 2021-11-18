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
];

export const buttonProps = {
  type: {
    type: String,
    values: buttonType,
    default: '',
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
