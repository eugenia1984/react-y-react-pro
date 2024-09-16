## 01-intro-react

Primera aplicacion con el CDN de React:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ReactApp</title>
  <!-- React -->
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <!-- React DOM -->
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <!-- Babel -->
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const divRoot = document.querySelector('#root');

    const name = 'María Eugenia'
    const h1Tag = <h1>Hello, I'm {name}!</h1>;

    ReactDOM.render(h1Tag, divRoot);
  </script>
</body>
</html>
```

- Solo con **React**, **ReactDOM** y **Babel**.