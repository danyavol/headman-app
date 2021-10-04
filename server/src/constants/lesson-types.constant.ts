import { ILessonType } from "@database/schemas/lesson-type.schema";

export const defaultLessonTypes: Partial<ILessonType>[] = [
    {sortIndex: 1, name: 'Лекция', shortName: 'лек'},
    {sortIndex: 2, name: 'Лабораторная', shortName: 'лаб'},
    {sortIndex: 3, name: 'Практика', shortName: 'пр'},
    {sortIndex: 4, name: 'Семинар', shortName: 'сем'},
    {sortIndex: 5, name: 'Зачет', shortName: 'зач'},
    {sortIndex: 6, name: 'Экзамен', shortName: 'экз'},
    {sortIndex: 7, name: 'Курсовая работа', shortName: 'курс'},
    {sortIndex: 8, name: 'Дипломная работа', shortName: 'дипл'}
];
