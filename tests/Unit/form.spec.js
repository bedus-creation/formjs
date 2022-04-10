import useForm from "../../src/useForm"

test("it correctly initializes the default data", () => {
    const form = useForm({
        email: "admin@test.com",
    })

    expect(form.data().email).toStrictEqual("admin@test.com")
})

test("transform method correctly transform the form data", () => {
    const form = useForm({
        email: "admin@test.com",
    })

    form.transform((data) => ({
        ...data,
        email: "edit@test.com",
        remember: false,
    })).post('/api/users')
})


