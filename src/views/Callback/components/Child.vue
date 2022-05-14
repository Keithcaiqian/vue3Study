<template>
  <div class="container">
    <h1>子组件</h1>
  </div>
</template>

<script setup>
    import { defineProps } from 'vue'
    const props = defineProps({
        name: String,
        fun: Function,
    });
    props.fun();
</script>