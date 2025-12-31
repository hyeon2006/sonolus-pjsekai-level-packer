<script setup lang="ts">
import VField from './VField.vue'

defineProps<{
    label: string
    placeholder: string
    maxlength?: number
    required?: boolean
}>()

const modelValue = defineModel<string>({ required: true })
</script>

<template>
    <VField :label>
        <input
            v-model="modelValue"
            class="bg-button-normal placeholder:text-text-disabled hover:bg-button-highlighted focus:ring-text-normal active:bg-button-pressed w-full appearance-none px-2 py-1 transition-colors placeholder:italic focus:ring-1 focus:outline-none"
            type="text"
            :placeholder
            :maxlength
            :required
        />
    </VField>
</template>
