<template>
    <div :style="`background-color: ${color}`" class="colorCard">
        <div class="colorName" :style="`color: ${nameColor}`">{{ name }}</div>
        <div class="colorTagContainer">
            <div class="colorTag">{{ color }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps({
    color: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    nameColor: {
        type: String,
        default: "#000000",
    }
});
</script>

<style lang="scss" scoped>
.colorCard {
  box-sizing: border-box;
  height: 150px;
  width: 150px;
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.colorName {
  width: 100%;
  font-family: monospace;
  padding: 0.25rem;
}

.colorTagContainer {
  display: flex;
  justify-content: flex-end;
}

.colorTag {
  font-family: monospace;
  padding: 0.25rem;
  background-color: #000000;
  color: #FFFFFF;
}
</style>
