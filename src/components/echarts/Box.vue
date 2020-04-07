<template>
  <div class="panel">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <slot></slot>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped></style>
