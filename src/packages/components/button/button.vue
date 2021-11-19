<template>
  <button
    :class="[
      'ava-button',
      buttonType ? 'ava-button--' + buttonType : '',
      buttonSize ? 'ava-button--' + buttonSize : '',
      {
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
  >
    按钮
  </button>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { buttonProps } from './button';
export default defineComponent({
  props: buttonProps,
  setup(props) {
    const buttonType = computed(() => props.type || 'default');
    const buttonSize = computed(() => props.size || '');
    return {
      buttonSize,
      buttonType,
    };
  },
});
</script>
