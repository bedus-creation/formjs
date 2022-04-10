# Form Js

### Installation

```bash
yarn add vue3-formjs
```

### Forms

Formjs can be used to send form data through api.

```vue

<template>
    <form @submit.prevent="submit">
        <label for="first_name">First name:</label>
        <input id="first_name" v-model="form.first_name"/>
        <label for="last_name">Last name:</label>
        <input id="last_name" v-model="form.last_name"/>
        <label for="email">Email:</label>
        <input id="email" v-model="form.email"/>
        <button type="submit">Submit</button>
    </form>
</template>
<script>
    import { reactive } from 'vue'
    import { Http } from 'vue3-formjs'

    export default {
        setup() {
            const form = reactive({
                first_name: null,
                last_name: null,
                email: null,
            })

            function submit() {
                Http.post('/users', form)
            }

            return {
                form,
                submit
            }
        },
    }
</script>
```

### Form Helper

Form js provides fluent api to handle form.

```vue

<template>
    <form @submit.prevent="form.post('/login')">
        <!-- email -->
        <input type="text" v-model="form.email">
        <div v-if="form.errors.email">{{ form.errors.email }}</div>
        <!-- password -->
        <input type="password" v-model="form.password">
        <div v-if="form.errors.password">{{ form.errors.password }}</div>
        <!-- remember me -->
        <input type="checkbox" v-model="form.remember">
        Remember Me
        <!-- submit -->
        <button type="submit" :disabled="form.processing">Login</button>
    </form>
</template>

<script>
    import { useForm } from 'vue3-formjs'

    export default {
        setup() {
            const form = useForm({
                email: null,
                password: null,
                remember: false,
            })

            return { form }
        },
    }
</script>
```
To submit the form, use the get, post, put, patch and delete methods.

```js
form.submit(method, url, options)
form.get(url, options)
form.post(url, options)
form.put(url, options)
form.patch(url, options)
form.delete(url, options)
```

### Api Call

It can be used to perform api call. This can be done with
`Http.visit()` method.

```js
import { Http } from "vue3-formjs"

Http.visit(url, {
    method: 'get',
    data: {},
    onSuccess: response => {},
    onError: errors => {},
    onFinish: () => {},
})
```

However, there are other shortcut methods as well, where all the methods share same options as `Http.visit()`.

```js
import { Http } from "vue3-formjs"

Http.get(url, data, options)
Http.post(url, data, options)
Http.put(url, data, options)
Http.patch(url, data, options)
Http.delete(url, options)
```

### Event Callback

Form js also provides a number of per call event callbacks.

```js
import { Http } from "vue3-formjs"

Http.post('/users', data, {
    onSuccess: (response) => {},
    onError: (errors) => {},
    onFinish: () => {},
})
```
