export const SchemaValidation = {
    minLength: (value: number): [number, string] => ([value, `Минимальная длина - ${value}`]),
    maxLength: (value: number): [number, string] => ([value, `Максимальная длина - ${value}`]),
}