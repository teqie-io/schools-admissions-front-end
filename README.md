# Gikii Admin на основе React/Tailwind | Pinely

Данное приложение React умеет генерировать компоненты/странички, имеет синхронизированное форматирование для удобства. Так же присутствует базовавя настройка рабочей области. Приложение умеет работать с alias, что упрощает работу с импортами любых файлов куда угодно(читайте описание ниже).

Сторонние библиотеки: [Tailwind(PostCSS)](https://tailwindcss.com/), [Storybook](https://storybook.js.org/), [PLOP](https://plopjs.com/)
Форматирование кода: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

> Осторожно: Пожалуйста прочитайте рекомендации к установке и использованию приложения прежде чем приступите к работе.

## УСТАНОВКА

> Рекомендация: используйте linux для корректной работы всех написанных скриптов или bash консоль на windows.

Запустите скрипт setup для установки зависимостей нужных для работы с приложением(делается из исходного каталога):

      $ yarn setup or npm run setup

Если данный скрипт не установил вам всех зависимостей, то проделайте следующее(делается из исходного каталога):

      Шаг первый $ yarn or npm install
      Шаг второй $ cd client/ or cd /client/ or cd \client\
      Шаг третий $(client) yarn or cd npm install

Если вы все проделали правильно, то можно переходить в папку client и запускать React приложение.

## ЗАПУСК

Запуск приложения React(делается из каталога client):

      Development режим $ yarn start or npm run start
      Production режим $ yarn build or npm run build

> Осторожно: для запуска React приложения вам понадобиться: версия node >= 8.15.1, версия npm >=5. Желательно поставить последние версии обоих.

## ПРОМЕЖУТОЧНЫЕ КОМАНДЫ

Для поддержания качества кода и сохранения его чистоты используйте следующие команды(делается из исходного каталога):

      prettier $ yarn prettify or npm run prettify
      eslint $ yarn lint:eslint or npm run lint:eslint
      stylelint $ yarn lint:stylelint or npm run lint:stylelint

Единая команда для форматирования кода(делается из исходного каталога):

      $ yarn lint or npm run lint

Комадна для сборщика информации о webpack(делается из исходного каталога или каталога client):

      $ yarn analyze or npm run analyze

## ГЕНЕРИРОВАНИЕ

Комадна для создания компонента или странички(делается из исходного каталога):

      $ yarn generate or npm run generate

Перед вами будет выбор создания компонента или странички:

      Если вы выбрали создание component, то вам нужно вбить название странички для которой вы хотите добавить компонент. Если страничка существует, то вас допустит вас к вбитию названия самого компонента. После предложит выбрать, добавлять ли к нему scss файл или нет. Если вы все сделали успешно и компонент создался, то вы можете переходить к его редактированию по адресу components/ваша_страничка/ваш_компонент. Компонент автоматически экспортируется вместе со всеми компонентами выбранной вами странички, после его создания можно сразу им пользоваться в вашей страничке.


      Если вы выбрали создание page, то вам нужно вбить название странички которую хотите создать. Если название странички не занято, то он пустит вас к созданию компонента для этой странички. После предложит вам сделать для нее ленивую загрузку. Если вы все сделали успешно и страничка создалась, то вы можете переходить к ее редактированию по адресу pages/ваша_страничка. Страничка автоматически экспортируется в app.

> Осторожно: ни в коем случае не удаляйте // PLOP IMPORTS, так генератор понимает куда ему импортировать созданные им компонент или страничку.

## ИСПОЛЬЗОВАНИЕ ПСЕВДОНИМОВ

Данное приложение React умеет работать с alias представленные в webpack.
Так выглядит базовый импорт:

      import '@styles/app.scss'
      import { Stack, ... } from '@components/main/'
      const Main = lazy(() => import('@pages/main'))

      import '@название папки откуда идет импорт/сам файл или название папки с стандартными импртами'
      import { перечисление компонентов } from '@components/название странички/'

## ТРЕБОВАНИЯ

Ни в коем случае не меняйте структуру приложение, это может поломать генераторы и использование псевдонимов.

      Все странички находятся в папке pages/папка с названием вашей странички. Странички пишите в файлах index.
      Все компоненты находятся в папке components/название вашей странички/папки с вашими компонентами. Экспортируйте файлы из index для сокращения импортов на страничке.
      Если редактируете alias, то не забывайте добавлять его так же в jsconfig.json для инициализации путей у редакторов кода.