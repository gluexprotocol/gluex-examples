<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import { GlueXWidget } from '@gluex/widget';

const container = ref(null)
let root = null

const config = {
  integrator: 'YOUR_INTEGRATOR_ID',
  apiKey: 'YOUR_API_KEY',

  // ... rest of the widget configuration
  // Example:
  // appearance: 'dark',
  // theme: {
  //   container: {
  //     boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
  //     borderRadius: '16px',
  //   },
  // },
};

onMounted(() => {
  const mountNode = document.createElement('div')
  container.value.appendChild(mountNode)

  root = createRoot(mountNode)
  root.render(createElement(GlueXWidget, { config }))
})

onUnmounted(() => {
  if (root) root.unmount()
})
</script>

<template>
  <div class="widget-container" ref="container"></div>
</template>
