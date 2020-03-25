import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html, body, #root {
  min-height: 100vh;
  background: #f0f0f5;
}

body {
  -webkit-font-smoothing: antialiased;
  font: 400 14px 'Roboto', sans-serif;
}

body, #root {
  display: flex;
  flex-direction: column;
}

input, button, textarea {
  font: 400 18px 'Roboto', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

form input {
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
}
`;
