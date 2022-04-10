import { Http } from "../../src"
import { server } from "../mocks/server"

beforeAll(() => {
    server.listen()
})

test("it calls success and finish method in success", done => {
    Http.post("/api/users", {}, {
        onSuccess: (response) => {
            expect(response.status).toBe(200)
        },
        onFinish: () => {
            expect(true).toBe(true)
            done()
        },
    })
})
