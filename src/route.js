import axios from "axios"
import { METHOD } from "./enum"
import { hrefToUrl } from "./url"

export class Route {
    visit(href, params) {
        const options = {
            method: METHOD.GET,
            data: {},
            onSuccess: () => {},
            onError: () => {},
            onFinish: () => {},
            ...params,
        }

        let url = typeof href === "string" ? hrefToUrl(href) : href

        const {
            onSuccess,
            onError,
            onFinish,
        } = options

        axios({
            method: options.method,
            url: url.href,
            data: options.data,
        }).then(response => {
            return onSuccess(response)
        }).catch(error => {
            const errors = {}
            if (error.response.status === 422) {
                const responseErrors = error.response.data.errors
                Object.keys(responseErrors).forEach((name) => {
                    errors[name] = responseErrors[name][0]
                })
            }
            return onError(errors)
        }).then(() => {
            return onFinish()
        })
    }

    get(url, data = {}, options = {}) {
        return this.visit(url, {
            ...options,
            method: METHOD.GET,
            data,
        })
    }

    post(url, data = {}, options = {}) {
        return this.visit(url, {
            ...options,
            method: METHOD.POST,
            data,
        })
    }

    put(url, data = {}, options = {}) {
        return this.visit(url, {
            ...options,
            method: METHOD.PUT,
            data,
        })
    }

    delete(url, options = {}) {
        return this.visit(url, {
            ...options,
            method: METHOD.DELETE,
        })
    }
}
