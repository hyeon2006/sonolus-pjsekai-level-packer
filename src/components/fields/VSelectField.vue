<script setup lang="ts" generic="T">
import VField from './VField.vue'

defineProps<{
    label: string
    options: Record<string, T>
    required?: boolean
}>()

const modelValue = defineModel<T>({ required: true })
</script>

<template>
    <VField :label>
        <select
            v-model="modelValue"
            class="bg-button-normal hover:bg-button-highlighted focus:ring-text-normal active:bg-button-pressed w-full appearance-none px-2 py-1 transition-colors focus:ring-1 focus:outline-none"
            :required
        >
            <option v-for="(value, key) in options" :key :value class="bg-surface">
                {{ key }}
            </option>
        </select>
    </VField>
</template>
