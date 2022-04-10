import axios from "axios"
import { Method } from "./types"
import { hrefToUrl } from "./url"

export class Route {
    public visit(href: string | URL, params: Object) {
        const options = {
            method: Method.GET,
            data: {},
            onSuccess: () => {},
            onError: () => {},
            onFinish: () => {},
            ...params,
        }

        let url = typeof href === "string" ? hrefToUrl(href) : href

        axios({
            method: options.method,
            url: url,
            data: options.data,
        }).then(response => {
            if (options.onSuccess) {
                return onSuccess(response)
            }
        }).catch(error => {
            if (options.onError) {
                return onError(error.response)
            }
        }).then(() => {
            form.processing = false
            if (options.onFinish) {
                return onFinish()
            }
        })
    }

    public get(url: URL | string, data: Object = {}, options: Object = {}): void {
        return this.visit(url, { ...options, method: Method.GET, data })
    }
}
