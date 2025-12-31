<script setup lang="ts">
import VField from './VField.vue'

defineProps<{
    label: string
    accept?: string
    required?: boolean
}>()

const modelValue = defineModel<File | undefined>({ required: true })

const onChange = (e: Event) => {
    modelValue.value = (e.target as HTMLInputElement).files?.[0]
}
</script>

<template>
    <VField :label>
        <input
            class="bg-button-normal hover:bg-button-highlighted focus:ring-text-normal active:bg-button-pressed w-full appearance-none px-2 py-1 transition-colors file:hidden focus:ring-1 focus:outline-none"
            :class="modelValue ? 'text-text-normal' : 'text-text-disabled italic'"
            type="file"
            :accept
            :required
            @change="onChange"
        />
    </VField>
</template>
