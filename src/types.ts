export type FormDataConvertible =
    | Array<FormDataConvertible>
    | Blob
    | FormDataEntryValue
    | Date
    | boolean
    | number
    | null
    | undefined

export type RequestPayload = Record<string, FormDataConvertible> | FormData
