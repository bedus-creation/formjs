import { mount } from "@vue/test-utils"
import { test } from "vitest"
import Login from "./fixtures/Login.vue"

test("adds 1 + 2 to equal 3", async () => {
    const component = mount(Login)

    const input = component.find("input")
    await input.setValue("my@mail.com")

    const button = component.find('button').trigger('click')
})
