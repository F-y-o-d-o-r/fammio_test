Тк не дали данных для вывода и дизайна, то взял то что было в свободном доступе на https://jsonplaceholder.typicode.com/. 

Дизайну много внимания не уделял, использовал Bootstrap.

Вместо вывода по 12 вывожу по 3 для наглядности.

Собраную работу можно увидеть по адресу: http://fammio.ititi.pp.ua/

пс Просьба не судить строго, тк около года уже не писал на реакте

# Основні завдання:
 - зверстати макет
 - Використовуючи дані в json, підставити їх в шаблон
 - На react написати логіку на обробку подій
 - Зверстати і написати JS обробники подій на фільтрацію контента
Пагінація
 - Необхідно вивести перші 12 елементи з endpoint, розбивши на сторінки
 - На одній сторінці відображається по 12 товара.
 - Сформувати пагінатор (внизу сторінки)
 - Враховуємо, що при кліці на іншу сторінку застосовані фільтри не повинні скидатися.
 - Відобразити загальну кількість елементів
Фільтрація.
 - Необхідно зробити фільтри по параметру: type(може містити декілька значень), countryId(тільки 1 значення), languageId(тільки 1 значення).
 - При застосуванні фільтра - оновлюємо товари, враховуючи пагінацію.
 - Натискаючи на "Скинути фільтри" - виводимо всі товари без фільтрів, враховуючи пагінацію.
 - Оновити відображається загальна кількість товарів (після застосування фільтра)
 
endpoint = дам значення трішки пізніше, як буде канлдидат. потрібно підготувати....

із технологій обовязково використати:
  react, redux, redux-saga
--------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
