<template>
    <div class="containerGrid">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.containerGrid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1rem;
}
</style>
