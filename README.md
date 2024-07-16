# Companies List

## Описание

Одностраничное приложение для управления списком компаний. Включает функции добавления, редактирования и удаления компаний с использованием React, Redux Toolkit и TypeScript.

## Содержание

- [Описание](#описание)
- [Содержание](#содержание)
- [Требования](#требования)
- [Установка](#установка)
- [Использование](#использование)
- [Структура проекта](#структура-проекта)
- [Функциональность](#функциональность)
- [Лицензия](#лицензия)

## Требования

- Node.js (рекомендуется версия 14.x или выше)
- npm или yarn

## Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/WoobotGJR/companies-list.git
   ```

2. Перейдите в директорию проекта:

   ```bash
   cd companies-list
   ```

3. Установите зависимости:

   ```bash
   npm install
   ```

## Использование

Для запуска проекта в режиме разработки:

```bash
npm start
```

или

```bash
yarn start
```

Приложение будет доступно по адресу `http://localhost:8081`.

Для сборки проекта:

```bash
npm run build
```

## Функциональность

- **Список компаний:** Таблица с компаниями, содержащая колонки с названием компании и адресом.
- **Добавление компании:** Кнопка для добавления новой компании.
- **Редактирование компании:** Возможность редактирования названия и адреса компании прямо в таблице.
- **Удаление компаний:** Кнопка для удаления выбранных компаний.
- **Выделение компаний:** Чекбоксы для выбора компаний и кнопка "Выделить всё" для выделения всех компаний.
