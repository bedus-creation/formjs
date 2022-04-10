<template>
    <input v-model="form.email">
    <span v-if="form.errors.email">
        {{ form.errors.email }}
    </span>
    <button @click="success">Success Submit</button>
    <button @click="errors">Errors Submit</button>
    <button @click="handleSuccessWithHttp">Success Submit With HTTP</button>
    <button @click="handleErrorsWithHttp">Errors Submit With HTTP</button>
    <button @click="Http.get('http://127.0.0.1:8000/api/users')">
        Handle Get with Http
    </button>
    <button @click="Http.delete('http://127.0.0.1:8000/api/users/1')">
        Handle Delete with Http
    </button>
</template>
<script setup lang="ts">
    import { Http, useForm } from "../../../src"

    const form = useForm({
        email: "admin@gmail.com",
    })

    const success = () => {
        form.put("http://127.0.0.1:8000/api/users/1", {
            onSuccess: (response) => {
                console.log(response)
            },
            onFinish: () => {
                console.log("I am finished")
            },
        })
    }

    const errors = () => {
        form.transform((data) => ({
            ...data,
            "email": "",
        })).put("http://127.0.0.1:8000/api/users/1", {
            onError: (errors) => {
                console.log(errors)
            },
            onFinish: () => {
                console.log("I am finished")
            },
        })
    }

    const handleSuccessWithHttp = () => {
        Http.post("http://127.0.0.1:8000/api/users", {
            email: "tmgbedu@gmail.com",
        }, {
            onSuccess: (response) => {
                console.log(response)
            },
            onFinish: () => {
                console.log("I am finished")
            },
        })
    }

    const handleErrorsWithHttp = () => {
        Http.post("http://127.0.0.1:8000/api/users", {
            email: "",
        }, {
            onSuccess: (response) => {
                console.log(response)
            },
            onError: (errors) => {
                console.log(errors)
            },
            onFinish: () => {
                console.log("I am finished")
            },
        })
    }
</script>
