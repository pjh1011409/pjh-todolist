# 원티드 프리온보딩 프론트엔드 코스 사전과제

[ Main Function ](#main-function)

</br>
</br>

## 📎 Project Deploy Link
- Project homepage: https://pjh1011409.github.io/wanted-pre-onboarding-frontend/

</br>

## 🌐 Service Architecture

<img width="800" alt="service architecture" src="https://user-images.githubusercontent.com/81337674/196389079-a76998d7-3789-433e-8421-6011152691f2.png">



## 💻 Project Structure


```
⭐️ src
├── 🗂 pages
│   ├── 🗂 authPage
│   │    ├── 📄 AuthPage.js
│   │    └── 📄 AuthPage.module.css
│   │    
│   └── 🗂 todoPage    
│        ├── 📄 todoPage.js    
│        └── 📄 todoPage.module.css  
│   
├── 🗂 api ── api.js
│   
├── 🗂 components 
│   ├── 🗂 auth
│   │     ├── 🗂 signIn
│   │     │     ├── 📄 SignIn.js
│   │     │     └── 📄 SignIn.module.css    
│   │     ├── 🗂 signOut
│   │     │     ├── 📄 SignOut.js
│   │     │     └── 📄 SignOut.module.css    
│   │     ├── 🗂 signUp
│   │     │     ├── 📄 SignUp.js
│   │     │     └── 📄 SignUp.module.css
│   │     └── 🗂 welcomeBox
│   │            ├── 📄 WelcomeBox.js
│   │            └── 📄 WelcomeBox.module.css
│   │ 
│   └── 🗂 todo
│         ├── 🗂 todoEdit
│         │     ├── 📄 TodoEdit.js
│         │     └── 📄 TodoEdit.module.css    
│         ├── 🗂 todoInput
│         │     ├── 📄 TodoInput.js
│         │     └── 📄 TodoInput.module.css    
│         ├── 🗂 todoItem
│         │     ├── 📄 TodoItem.js
│         │     └── 📄 TodoItem.module.css
│         ├── 🗂 todoList
│               ├── 📄 TodoList.js
│               └── 📄 TodoList.module.css
├──  📄  App.js
└──  📄  index.js

```



## ☘️ Main Function


## 🛠 Tools


<p>
    <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
    <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">

  <br>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
  <br>
 <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">   
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white">   
   <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
   <img src="https://img.shields.io/badge/fontawesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white">
    <br>
  <img src="https://img.shields.io/badge/JSON Web Tokens-000000?style=for-the-badge&logo=JSON Web Tokens&logoColor=white">   
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">   



</p>



## 💡 Convention

###  ✏️ ESLint & Prettier

#### Prettier

<details>
<summary>👉  .prettierrc </summary>
    
```
{
  "singleQuote": true,     //  쌍따옴표가 아닌 홑따옴표를 사용
  "semi": true,            // statement 마지막에 세미콜론을 찍음
  "useTabs": false,        // 탭을 사용하지 않고 스페이스를 사용
  "tabWidth": 2,           // 탭을 할 경우 2 스페이스
  "trailingComma": "all",  // 선호되는 한 줄의 길이, 줄바꿈 한폭 길이
  "printWidth": 120,       // 여러줄로 나뉘었을 때는 쉼표를 사용
  "arrowParens": "avoid",  // 화살표 함수에서 괄호 사용 의무화
  "endOfLine": "auto"      // 파일의 마지막에는 EOL을 보장
  }
```
    
</details>


#### ESLint
<details>
<summary>👉.eslintrc.json </summary>

```
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["plugin:react/recommended", "airbnb", "plugin:prettier/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "react/function-component-definition": [2, { "namedcomponents": "arrow-function" }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-unresolved": "off",
    "no-unused-vars": "off",
    "default-param-last": 0,
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "no-use-before-define": "off",
    "object-shorthand": ["error", "always", { "avoidQuotes": true }],
    "spaced-comment": ["error", "always", { "markers": ["//"] }],
    "react/jsx-no-useless-fragment": "warn"
  },
  "ignorePatterns": ["build, dist, public, node_modules"]
}


```
</details>


###  ✏️ barrel structure & 절대 경로



- 각각의 폴더에 index.js를 만들어서 depth를 얕게 만들어주기 
- jsconfig.json에 baseUrl을 src로 설정

```
<authpage.js>

//수정 전
import WelcomeBox from '../../../components/auth/welcomBox/WelcomeBox.js';
import SignUp from '../../../components/auth/signUp/SignUp.js';
import SignIn  from '../../../components/auth/signIn/SignIn.js';

//수정 후
import { WelcomeBox, SignUp, SignIn } from 'components/auth';
```
  


 
# 🔥 Issue & TroubleShooting

