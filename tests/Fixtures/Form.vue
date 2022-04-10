<template>
    <input v-model="form.email" type="email">
    <button type="button" @click="store">Submit</button>
</template>

<script lang="ts" setup>
    import useForm from "../../src/useForm"

    const form = useForm({
        email: "admin@admin.test",
    })

    const store = () => {
        form.post("/api/users")
    }

</script>
