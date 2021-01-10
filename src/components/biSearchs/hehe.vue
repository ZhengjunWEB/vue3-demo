<template>
  <input type="text" @input="input" />
</template>

<script>
export default {
  props: ["modelValue"],
  setup(_, ctx) {
    const input = (e) => {
      ctx.emit("update:modelValue", e.target.value);
    };
    return {
        input
    }
  },
};
</script>

<style>
</style>