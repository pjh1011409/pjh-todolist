# 원티드 프리온보딩 프론트엔드 코스 사전과제

## 🌈 목차

1. [Deploy Link](#deploy-link)
2. [Main Function](#main-function)
3. [Service Architecture](#service-architecture)
4. [Project Structure](#project-structure)
5. [Tools](#tools)
6. [Convention](#convention)
7. [회고](#회고)

</br>

## Deploy Link
- Project homepage: https://pjh1011409.github.io/wanted-pre-onboarding-frontend/

</br>

## Main Function

assignment에 대한 조건에 따른 회원가입,로그인,todoApp에 대한 주요 기능들을 블로그에 정리하였습니다.

> 📎 상세내용 : [TodoList App - 회원가입, 로그인/아웃](https://velog.io/@pjh1011409/todoList-App-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%EB%A1%9C%EA%B7%B8%EC%9D%B8)



> 📎 상세내용 : [todoList App - CRUD](https://velog.io/@pjh1011409/todoList-App-CRUD)

</br>


## Service Architecture

<img width="800" alt="service architecture" src="https://user-images.githubusercontent.com/81337674/196389079-a76998d7-3789-433e-8421-6011152691f2.png">



## Project Structure


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
│   │           ├── 📄 WelcomeBox.js
│   │           └── 📄 WelcomeBox.module.css
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
│         └── 🗂 todoList
│               ├── 📄 TodoList.js
│               └── 📄 TodoList.module.css
├──  📄  App.js
└──  📄  index.js

```




## Tools


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



## Convention

### ✏️ ESLint & Prettier

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
  

# 회고

### 1️⃣ React 환경변수 사용하여 API key 숨기기

> 일반적으로 유출을 막기위하여 자신이 생성한 Api Key는 숨기는 것이 좋다. 특히 발급 받은 API Key일 경우 숨겨야 한다. 😉</br>
따라서, env파일에 해당 Api Key를 작성하고 env파일을 gitignore을 해주었다. </br>그리고 process.env.REACT_APP_이름 과 같은 변수명을 사용해서 넣어줄 수 있다.</br></br>
하지만, 나는 gh-pages로 정적으로 배포를 하였다. 따라서 프론트엔드파일에 Api Key를 노출시켰다. 🥺 </br>
netlify, vercel, AWS을 통한 Deploy도 고려해보았지만, 항상 배포 전단계까지의 단계만 밟아봤던 나는 배포과정을 익히는 것이 절실하다. 😭</br>
코스의 커리큘럼에 있는 "지속적인 통합과 배포" 수업을 너무나도 들어보고 싶은 마음!!!!

### 2️⃣ axiosInstance 설정

> customAxios를 작성해본 경험이 있어서 이번 사전과제에서도 적용을 해볼까라는 생각이 있었지만, 본질적(?)으로 간단하게 작성이 가능하여 생략한 부분인데 앞으로 작성하는 습관을 들여야겠다.

### 3️⃣ TypeScript 사용

> 내가 가장 이 코스를 수강하고 싶은 이유 중 하나! TypeScript는 어느 Job Description을 보아도 나오는 조건 중 하나이고 정말로 배우고 싶은 기술이다. 이번 기회에 확실하게 내걸로 만들고 싶은 마음 뿐 😭

### 4️⃣ Client Side Rendering을 이겨내자 

> CRA로 작성한 프로젝트인큼 늘 따라다니는 고민은 SSR과 다른 CSR만의 단점(?)들이다. 이전에 진행했던 프로젝트에서도 CORS 등 여러부분으로 애먹었던 기억이... 그리고 Next.js를 배워보고 싶은건 당연한 마음 뿐 😛 

