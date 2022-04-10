import cloneDeep from "lodash.clonedeep"
import isEqual from "lodash.isequal"
import { reactive, watch } from "vue"
import { Route } from "./route"

export default function useForm(...args) {
    const data = (typeof args[0] === "string" ? args[1] : args[0]) || {}
    const defaults = cloneDeep(data)
    let transform = data => data
    const Http = new Route()

    const form = reactive({
        ...data,
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

        defaults(key, value) {
            if (typeof key === 'undefined') {
                defaults = this.data()
            } else {
                defaults = Object.assign(
                    {},
                    cloneDeep(defaults),
                    value ? ({ [key]: value }) : key,
                )
            }

            return this
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
            this.processing = true
            const data = transform(this.data())

            const _options = {
                ...options,
                onSuccess: async response => {
                    this.processing = false
                    const onSuccess = options.onSuccess ? await options.onSuccess(response) : null
                    this.isDirty = false
                    return onSuccess
                },
                onError: errors => {
                    this.processing = false
                    this.clearErrors().setError(errors)
                    if (options.onError) {
                        return options.onError(errors)
                    }
                },
                onFinish: () => {
                    this.processing = false
                    if (options.onFinish) {
                        return options.onFinish()
                    }
                },
            }
            if (method === "delete") {
                Inertia.delete(url, { ..._options, data })
            } else {
                Http[method](url, data, _options)
            }
        },
        get(url, options) {
            this.submit("post", url, options)
        },

        post(url, options) {
            this.submit("post", url, options)
        },

        put(url, options) {
            this.submit("put", url, options)
        },

        delete(url, options) {
            this.submit("delete", url, options)
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
