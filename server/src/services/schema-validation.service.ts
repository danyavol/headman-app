import { TIME_REGEXP } from "@constants/regexp.constant";

export const SchemaValidation = {
    minLength: (value: number): [number, string] => ([value, `Минимальная длина - ${value}`]),
    maxLength: (value: number): [number, string] => ([value, `Максимальная длина - ${value}`]),
    time: (): [RegExp, string] => ([TIME_REGEXP, 'Невалидный формат времени']),
}