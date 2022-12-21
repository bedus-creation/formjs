<template>
    <input v-model="form.email" type="email">
    <input @input="form.avatar = $event.target.files[0]" type="file">
    <button type="button" @click="store">Submit</button>
</template>

<script lang="ts" setup>
    import useForm from "../../src/useForm"

    const form = useForm({
        email: "admin@admin.test",
        file: null,
    })

    const store = () => {
        form.post("/api/users")
    }

</script>
