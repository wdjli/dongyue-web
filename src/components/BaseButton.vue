<template>
  <button 
    :class="buttonClass" 
    :disabled="disabled"
    @click="handleClick"
  >
    <slot name="icon" />
    <span v-if="$slots.default" class="button-text">
      <slot />
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // primary, secondary, ghost, outline
    validator: (value) => ['primary', 'secondary', 'ghost', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'md', // xs, sm, md, lg
    validator: (value) => ['xs', 'sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  animated: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

const buttonClass = computed(() => {
  return [
    'btn',
    `btn-${props.variant}`,
    `btn-${props.size}`,
    {
      'btn-block': props.block,
      'btn-animated': props.animated,
      'btn-disabled': props.disabled
    }
  ]
})
</script>

<style scoped>
.btn-animated {
  transition: all 0.3s ease;
}

.btn-animated:hover:not(.btn-disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-animated:active:not(.btn-disabled) {
  transform: translateY(0);
}

.button-text {
  display: inline-block;
}
</style>