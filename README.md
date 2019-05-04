This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Скрипты для обслуживания проекта

Установка зависимостей:

### `yarn`

Старт проекта:

### `yarn start`

Произойдет запуск проекта в режиме разработки.<br> В браузере откройте [http://localhost:3000](http://localhost:3000).

Приложение поддерживает hot-reload.<br> Дополнительную информацию можно получить из сообщений в консоли браузера.

Запуск тестов:

### `yarn test`

Дополнительная информация по тестам [running tests](https://facebook.github.io/create-react-app/docs/running-tests)

# Сборка билда

Сборка билда в папку `build`:

Для сборки билда используются следующие команды:

### `yarn build-dev`

Собирает приложение с переменными окружения из файла `src/environment/environment.ts`

### `yarn build-prod`

Собирает приложение с переменными окружения из файла `src/environment/environment.prod.ts`

На ветвление сборок влияет переменная окружения `REACT_APP_STAGE` которая прописана в каждом сценарии: для продакшена
это `REACT_APP_STAGE=production` для девелопмент билда это `REACT_APP_STAGE=development`

**Особое внимание!** если собрать билд командой `yarn build`, то он соберется с настройками для девелопмента.
Соответсвенно такой билд на продакшене использовать нельзя. В общем не используйте эту команду, для того что бы
исключить проблемы.

# Deploy

Чтобы разместить билд код в приложение _alk_new_, нужно сделать следующее:<br>

1.  Репозиторий alk_new и alk_new_react должны лежать рядом, в одной директории.

2.  После запуска билда, каталог './alk_new/static' очищается, после чего содержимое каталога static в репозитрии
    alk_new_react копируется в './alk_new/static'

3.  Для файла `./alk_new/index.html` внутри файла нужно будет поменять следующий код:

```html
<head>
  ...
  <!-- React. -->
  <link href="./static/css/main.8cb8c358.chunk.css" rel="stylesheet" />
  <!-- React. -->
</head>
...
<body>
  ...
  <!-- React. -->
  <script>
    !function(l){f...s=n;a()}([])
  </script>
  <script src="./static/js/2.5b09c620.chunk.js"></script>
  <script src="./static/js/main.a9701fdb.chunk.js"></script>
  <!-- React. -->
  ...
</body>
```

Код для замены нужно взять из файла: `./alk_new_react/build/index.html`

# Структура SPA

На `20-03-2018` структура приложения следующая:

- `context` -- Реакт контекст;
- `shared` -- Общие переиспользуемые компоненты;
- `views` -- Представления;
- `assets` -- Статичные файлы используемые сквозь все приложение;
- `environment` -- Переменные окружения;
- `./app/core/api` -- API;
- `./app/core/redusers` -- Корневые редьюсеры собранные со всех модулей приложения;
- `./app/core/sagas` -- Корневые саги собранные со всех модулей приложения;
- `./app/core/store` -- Настройка хранилища;
- `./app/states` -- Здесь настраивается связка Redux+Redux-saga+selectors для отдельных модулей приложения;

Структура каталогов:

```
src
├── app
│   ├── context
│   │   └── Auth
│   │       ├── Auth.js
│   │       ├── getCookie.ts
│   │       └── index.ts
│   ├── core
│   │   ├── api
│   │   │   ├── api.ts
│   │   │   ├── index.ts
│   │   │   ├── middlewaredFetch.ts
│   │   │   └── saga.ts
│   │   ├── reducers
│   │   │   ├── index.ts
│   │   │   ├── reducers.ts
│   │   │   └── types.ts
│   │   ├── sagas
│   │   │   ├── index.ts
│   │   │   └── sagas.ts
│   │   └── store
│   │       ├── index.js
│   │       └── store.js
│   ├── shared
│   │   ├── components
│   │   │   ├── MainPage
│   │   │   │   ├── index.js
│   │   │   │   ├── MainPage.js
│   │   │   │   └── MainPage.module.scss
│   │   │   ├── Menu
│   │   │   │   ├── index.ts
│   │   │   │   └── Menu.tsx
│   │   │   ├── MenuItem
│   │   │   │   ├── StoryBook
│   │   │   │   ├── index.ts
│   │   │   │   ├── MenuItem.module.scss
│   │   │   │   ├── MenuItem.stories.tsx
│   │   │   │   └── MenuItem.tsx
│   │   │   ├── Preloader
│   │   │   │   ├── index.ts
│   │   │   │   ├── Preloader.module.scss
│   │   │   │   ├── Preloader.stories.tsx
│   │   │   │   └── Preloader.tsx
│   │   │   └── .DS_Store
│   │   ├── layouts
│   │   │   ├── assets
│   │   │   │   ├── additional
│   │   │   │   │   ├── Content.tsx
│   │   │   │   │   ├── FullPage.tsx
│   │   │   │   │   └── styles.module.scss
│   │   │   │   └── .DS_Store
│   │   │   ├── ContentPageLayout
│   │   │   │   ├── ContentPageLayout.module.scss
│   │   │   │   ├── ContentPageLayout.tsx
│   │   │   │   └── index.ts
│   │   │   ├── .DS_Store
│   │   │   └── index.ts
│   │   └── .DS_Store
│   ├── states
│   │   └── mysites
│   │       ├── duck
│   │       │   ├── duck.ts
│   │       │   └── index.ts
│   │       ├── saga
│   │       │   ├── index.ts
│   │       │   └── saga.ts
│   │       ├── selectors
│   │       │   ├── index.ts
│   │       │   └── selectors.ts
│   │       └── types.ts
│   ├── views
│   │   ├── AppRouter
│   │   │   ├── AppRouter.js
│   │   │   ├── AppRouter.module.scss
│   │   │   └── index.js
│   │   ├── MySites
│   │   │   ├── containers
│   │   │   ├── index.ts
│   │   │   ├── MySites.loadable.tsx
│   │   │   ├── MySites.module.scss
│   │   │   └── MySites.routes.tsx
│   │   └── RootRouter
│   │       ├── index.js
│   │       └── RootRouter.js
│   └── .DS_Store
├── assets
│   ├── fonts
│   ├── images
│   ├── styles
│   ├── translations
│   │   ├── en.json
│   │   └── ru.json
│   └── .DS_Store
├── environment
│   ├── env.type.ts
│   ├── environment.prod.ts
│   ├── environment.ts
│   └── index.ts
├── stories
│   └── index.js
├── .DS_Store
├── index.tsx
├── react-app-env.d.ts
├── serviceWorker.ts
└── setupTests.js
```

# Верстка в проекте

Для верстки проекта используется препроцессор Sass(SCSS). Используется подход реализующий CSS-modules. Все файлы стилей
должны именоваться согласно документации: `*.module.cscc`. Структура файлов SCSS должна быть следующей:

```scss
// MenuItem

// Variables
// =========

// Selectors
// =========

// MediaQueries
// ============
```

Все общие переменные, миксины и т.д. вынесены в папку `./srs/assets`

# Разработка изолированных компонент

Для разработки компонент изолированно используется storybook. Зускать командой:

### `yarn storybook`

Файлы историй называются по стандарту: `*.stories.tsx`

Все моки данных или изображения необходимые для тестирования и проверки stories размещать в каталоге компонента под
именем: `./StoryBook/*`

**Важно!** Необходимо держать все stories в актуальном состоянии, т.к. они являются частью документации к проекту.
