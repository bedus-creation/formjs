import cloneDeep from "lodash.clonedeep"
import isEqual from "lodash.isequal"
import { reactive, watch } from "vue"

export default function useForm(...args) {
    const data = (typeof args[0] === "string" ? args[1] : args[0]) || {}
    const defaults = cloneDeep(data)
    let transform = data => data

    const form = reactive({
        errors: {},
        isDirty: false,
        processing: false,

        transform(callback) {
            transform = callback

            return this
        },

        data() {
            return Object
                .keys(data)
                .reduce((carry, key) => {
                    carry[key] = this[key]
                    return carry
                }, {})
        },

        setError(key, value) {
            Object.assign(this.errors, (value ? { [key]: value } : key))

            this.hasErrors = Object.keys(this.errors).length > 0

            return this
        },

        reset(...fields) {
            const clonedDefaults = cloneDeep(defaults)
            if (fields.length === 0) {
                Object.assign(this, clonedDefaults)
            } else {
                Object.assign(
                    this,
                    Object
                        .keys(clonedDefaults)
                        .filter(key => fields.includes(key))
                        .reduce((carry, key) => {
                            carry[key] = clonedDefaults[key]
                            return carry
                        }, {}),
                )
            }

            return this
        },
        clearErrors(...fields) {
            this.errors = Object
                .keys(this.errors)
                .reduce((carry, field) => ({
                    ...carry,
                    ...(fields.length > 0 && !fields.includes(field) ? { [field]: this.errors[field] } : {}),
                }), {})

            this.hasErrors = Object.keys(this.errors).length > 0

            return this
        },

        submit(method, url, options = {}) {
            form.processing = true
            const data = transform(this.data())

            const {
                onSuccess,
                onError,
                onFinish,
            } = options
            // if (error.response.status === 422) {
            //     const errors = error.response.data.errors
            //     Object.keys(errors).forEach((name) => {
            //         form.setError(name, errors[name][0])
            //     })
            // }
        },

        post(url, options) {
            this.submit("post", url, options)
        },
    })

    watch(form, newValue => {
        form.isDirty = !isEqual(form.data(), defaults)
    }, {
        immediate: true,
        deep: true,
    })

    return form
}
