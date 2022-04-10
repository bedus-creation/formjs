import { mount } from "@vue/test-utils"
import Form from "../Fixtures/Form"
import { server, waitForRequest } from "../mocks/server"

beforeAll(() => {
    server.listen()
})

test("it correctly updates data and send request", async () => {
    const pendingRequest = waitForRequest("post", "/api/users")

    const wrapper = mount(Form)
    await wrapper.find("input[type=email]").setValue("admin@admin.test")
    await wrapper.get("button").trigger("click")

    const request = await pendingRequest
    expect(request.body).toEqual({
        email: "admin@admin.test",
    })
})

