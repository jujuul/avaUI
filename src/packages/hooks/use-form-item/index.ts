const sizes = ['', 'large', 'medium', 'small', 'mini'] as const;

export const useFormItemProps = buildProps({
  size: {
    type: String,
    values: sizes,
    default: '',
  },
  disabled: Boolean,
} as const);
