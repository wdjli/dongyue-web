<template>
  <div :class="cardClass">
    <slot name="image" />
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <div class="card-body" :class="{ 'no-padding': noBodyPadding }">
      <slot />
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default' // default, bordered, compact
  },
  shadow: {
    type: String,
    default: 'md' // none, sm, md, lg, xl
  },
  hoverable: {
    type: Boolean,
    default: false
  },
  noBodyPadding: {
    type: Boolean,
    default: false
  }
})

const cardClass = computed(() => {
  return [
    'card',
    `card-${props.variant}`,
    {
      [`shadow-${props.shadow}`]: props.shadow !== 'none',
      'hoverable': props.hoverable
    }
  ]
})
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--fallback-b1,oklch(var(--b1)));
  border-radius: var(--rounded-box, 1rem);
}

.card-default {
  background-color: var(--fallback-b2,oklch(var(--b2)));
}

.card-bordered {
  border: 1px solid var(--fallback-b3,oklch(var(--b3)));
}

.card-compact .card-body {
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.card-body {
  padding: var(--padding-card, 1.5rem);
  flex: 1;
}

.card-body.no-padding {
  padding: 0;
}

.card.hoverable {
  transition: box-shadow 0.3s ease;
}

.card.hoverable:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.card-header {
  padding: 1.5rem 1.5rem 0.5rem;
}

.card-footer {
  padding: 0.5rem 1.5rem 1.5rem;
}
</style>