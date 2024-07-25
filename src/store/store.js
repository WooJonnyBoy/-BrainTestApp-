import { reactive } from 'vue'
import img11 from '../assets/img/question11.png'
import img10 from '../assets/img/question10.png'
import img8 from '../assets/img/question8.png'
import spiner from '../assets/img/spiner.png'

export const pageNumber = reactive({
    questionPage: 0,

    nextPage() {
        this.questionPage += 1
    }
})

export const questions = [
    {
        page: 1,
        type: 1,
        question: 'Ваш пол:',
        answers: ['Мужчина', 'Женщина']
    },
    {
        page: 2,
        type: 1,
        question: 'Укажите ваш возраст:',
        answers: ['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36']
    },
    {
        page: 3,
        type: 1,
        question: 'Выберите лишнее:',
        answers: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина']
    },
    {
        page: 4,
        type: 1,
        question: 'Продолжите числовой ряд:\n 18 20 24 32',
        answers: ['62', '48', '74', '57', '60', '77']
    },
    {
        page: 5,
        type: 2,
        question: 'Выберите цвет, который сейчас наиболее Вам приятен:',
        answers: ['#A8A8A8', '#0000A9', '#00A701', '#F60100', '#FDFF19', '#A95403', '#000000', '#850068', '#46B2AC   ']
    },
    {
        page: 6,
        type: 2,
        question: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
        answers: ['#A8A8A8', '#46B2AC', '#A95403', '#00A701', '#000000', '#F60100', '#850068', '#FDFF19', '#0000A9   ']
    },
    {
        page: 7,
        type: 1,
        question: 'Какой из городов лишний?',
        answers: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава']
    },
    {
        page: 8,
        type: 3,
        question: 'Выберите правильную фигуру из четырёх пронумерованных.',
        answers: ['1', '2', '3', '4'],
        img: img8
    },
    {
        page: 9,
        type: 1,
        question: 'Вам привычнее и важнее:',
        answers: ['Наслаждаться каждой минутой проведенного времени', 'Быть устремленными мыслями в будущее', 'Учитывать в ежедневной практике прошлый опыт']
    },
    {
        page: 10,
        type: 1,
        question: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
        answers: ['оно остроконечное', 'оно устойчиво', 'оно-находится в состоянии равновесия'],
        img: img10
    },
    {
        page: 11,
        type: 3,
        question: 'Вставьте подходящее число',
        answers: ['34', '36', '53', '44', '66', '42'],
        img: img11
    },
    {
        page: 12,
        type: 4,
        question: 'Обработка результатов',
        answers: 'Определение стиля мышления...... .....................................................',
        img: spiner
    },
]  