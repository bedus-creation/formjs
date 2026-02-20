import Axios from "axios"
import { createPinia } from "pinia"
import { createApp } from "vue"
import App from "./App.vue"
import { client } from "formjs-vue3"

// const axios = Axios.create()
client.axios().interceptors.response.use((response) => {
    console.log('hello')
    return response;
}, (err) => {
    console.log('Intercepter is working fine')
    return Promise.reject(err);
})

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.mount("#app")
