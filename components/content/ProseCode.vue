<script lang="ts">
import { defineComponent } from "#imports";
export default defineComponent({
  props: {
    code: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
  },
});
</script>

<template>
  <div :class="$style.code">
    <div :class="$style.inner">
      <ul :class="$style.label">
        <li v-if="$props.filename">
          <span :class="$style.filename">
            {{ $props.filename }}
          </span>
        </li>
        <li v-if="$props.language">
          <span :class="$style.lang">
            {{ $props.language }}
          </span>
        </li>
      </ul>
      <slot />
    </div>
  </div>
</template>

<style module>
.code {
  display: block;
  position: relative;
  border-radius: 10px;
  padding: 70px 20px 10px;
  margin: 20px 0;
  z-index: 0;
  overflow: hidden;
  background: #1e1e1e;
}
.inner {
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--c-secondary) var(--c-lighter);
}
.inner::-webkit-scrollbar {
  height: 7px;
}
.inner::-webkit-scrollbar-track {
  background-color: var(--c-secondary);
  border-radius: 100vh;
}
.inner::-webkit-scrollbar-thumb {
  border-radius: 100vh;
  background-color: var(--c-lighter);
}
.label {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  list-style: none !important;
  margin: 0;
  padding: 0 15px;
  background: rgba(255, 255, 255, 0.2);
}
.lang {
  padding: 0 10px 3px 10px;
  background-color: var(--c-lightest);
  line-height: 1.5;
  font-size: 0.9em;
  display: block;
  background: white;
  border-radius: 5px;
  margin-left: 10px;
}
.lang::before {
  content: ".";
}
.filename {
  padding: 0 10px 3px 10px;
  background-color: var(--c-lightest);
  line-height: 1.5;
  font-size: 0.9em;
  display: block;
  background: white;
  border-radius: 5px;
}
</style>

<style>
pre {
  margin: 0;
}
/*pre code .line {
  display: block;
  min-height: 1rem;
  line-height: 1.6;
  font-size: 0.75rem;
  color: var(--c-static-light);
}*/
.highlight {
  background-color: #ae7c1426;
  border-left: solid 4px #ae7c1466;
}
</style>
