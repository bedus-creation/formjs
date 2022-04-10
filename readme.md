# Form Js

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
