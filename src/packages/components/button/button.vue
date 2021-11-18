<template>
  <button
    :class="['ava-button', buttonType ? 'ava-button--' + buttonType : '']"
  ></button>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { buttonProps } from './button';
export default defineComponent({
  props: buttonProps,
  setup(props) {
    const buttonType = computed(() => props.type || 'default');
    return {
      buttonType,
    };
  },
});
</script>
