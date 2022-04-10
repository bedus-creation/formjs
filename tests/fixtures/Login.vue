<template>
    <input v-model="form.email">
    <button type="button" @click="submit">Submit</button>
</template>
<script>
    import { defineComponent } from "vue"
    import useForm from "../../src/useForm"
    export default defineComponent({
        name: "Login",
        setup() {
            const form = useForm({
                // "email": "",
            })

            const submit = () => {
                form.post('http://api.test/api/users')
            }

            return {
                form,
                submit,
            }
        },
    })
</script>
