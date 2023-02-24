# 원티드 인턴십 프론트엔드 4팀 - 1주차 과제
## 📖 과제 설명
**동료학습**을 통해서 팀에서 생각한 [원티드 프리온보딩 프론트엔드 인턴십 선발 과제 - Todo App](https://github.com/walking-sunset/selection-task)의 `Best Pratice` 만들기
- `Best Practice`란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다.

## 🔗 배포링크
[🔗 배포 링크 이동](https://week1-todo-app.vercel.app/)

## 🧑‍💻 팀원 소개
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/SongNoin"><img src="https://avatars.githubusercontent.com/u/88178866?v=4" width="100px; alt=""/><br /><sub><b>송경환(팀장)</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/sehyeon4687"><img src="https://avatars.githubusercontent.com/u/104138055?v=4" width="100px;" alt=""/><br /><sub><b>박세현 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/ws8313"><img src="https://avatars.githubusercontent.com/u/87023889?v=4" width="100px;" alt=""/><br /><sub><b>김우성 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/chanwoo00106"><img src="https://avatars.githubusercontent.com/u/57276315?v=4" width="100px;" alt=""/><br /><sub><b>변찬우 </b></sub></a><br /></td>
           <tr/>
      <td align="center"><a href="https://github.com/hyemin33"><img src="https://avatars.githubusercontent.com/u/124856203?v=4" width="100px;" alt=""/><br /><sub><b>조혜민 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/2taesung"><img src="https://avatars.githubusercontent.com/u/66891085?v=4" width="100px;" alt=""/><br /><sub><b>이태성 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/seongbin9786"><img src="https://avatars.githubusercontent.com/u/28754907?v=4" width="100px;" alt=""/><br /><sub><b>김성빈 </b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

## 💻 실행방법 
1. 레포지토리 클론

   ```bash
   git clone "https://github.com/wanted-pre-onboarding-fe-team-4/week1-todo-app.git"
   ```
2. 프로젝트 폴더 진입

   ```bash
   cd week1-todo-app
   ```

2. module 설치

   ```bash
   yarn install
   ```
3. 앱 실행
   ```
   npm run start
   ```
## 기능 구현
### ✅ 로그인 / 회원가입

https://user-images.githubusercontent.com/88178866/221186156-e8cf6849-cd31-445c-be88-c34c2b64b5af.mov


https://user-images.githubusercontent.com/88178866/221186174-6dd8e326-2063-4715-9ebb-0d1468ac92c5.mov

- `/signup` 경로에 회원가입 기능을 개발해주세요
- `/signin` 경로에 로그인 기능을 개발해주세요
- 페이지 안에 이메일 input, 비밀번호 input, 제출 button이 포함된 형태로 구성해주세요
- 두 페이지의 UI는 동일해도 무방합니다.

#### Assignment 1

- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요

  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
  - 이메일과 비밀번호의 유효성 검사 조건은 별도의 추가 조건 부여 없이 위의 조건대로만 진행해주세요 (e.g. 비밀번호 유효성 검사에 특수문자 포함 등의 새로운 조건을 추가하는 행위를 지양해주세요)

- 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요
- 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.

#### Assignment 2

- 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요

#### Assignment 3

- 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요

  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - 응답받은 JWT는 로컬 스토리지에 저장해주세요

#### Assignment 4

- 로그인 여부에 따른 리다이렉트 처리를 구현해주세요

  - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요
### ✅ TODO LIST

https://user-images.githubusercontent.com/88178866/221186206-cd9083e5-843e-423b-a350-c27f208c50e6.mov

#### Assignment 5

- `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요
- TODO는 `<li>` tag를 이용해 감싸주세요

#### Assignment 6

- 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요

#### Assignment 7

- TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.

#### Assignment 8

- TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요

#### Assignment 9

- 투두 리스트의 삭제 기능을 구현해주세요

  - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

#### Assignment 10

- 투두 리스트의 수정 기능을 구현해주세요

  - TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요
  - 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
  - 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요
  - 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요
  - 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요
  - 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요

## 📦 폴더구조
```
📦 src
├── 📂 api
│   ├── 📄 index.ts
│   ├── 📄 signInApi.ts
│   └── 📄 signUpApi.ts
├── 📂 components
│   ├── 📂 Layouts
│   └── 📂 commons // 공통 버튼 등 공통 컴포넌트
├── 📂 context
│   └── 📄 TodoContext.tsx
├── 📂 hooks
│   ├── 📄 index.tsx
│   ├── 📄 useLoggedIn.tsx
│   └── 📄 useQuery.tsx
├── 📂 pages
│   ├── 📄 NotFound.tsx
│   ├── 📂 SignIn
│   │   ├── 📄 index.tsx
│   │   └── 📄 style.tsx
│   ├── 📂 SignUp
│   │   ├── 📄 index.tsx
│   │   └── 📄 style.tsx
│   └── 📂 Todo
│       ├── 📄 index.tsx
│       ├── 📄 style.tsx
│       ├── 📄 todo.tsx
│       └── 📄 todoListItem.tsx
└── 📂 types
```
## 🤓 Best Practice
각자의 구현방법을 설명하고 토론했을 때 팀 안에서 이 방법이 가장 효율적이라고 판단되는 것을 정하고 그것을 팀의 `Best Practice` 로 채택해서 프로젝트에 녹였습니다.
### 1. `Git` 관리
코드 구현은 아니지만 git 관리에 부족한 팀원이 다수였습니다. 팀원 중 사전과제에 git 관리를 잘해주신 분이 계셔서 `Best Practice` 삼아 도입하였습니다.
- Issue 작성
- Branch, commit 컨벤션
- [PR에 issue 연계](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)

### 2. `useQuery` (api query custom hook 개발)
- `useQuery custom hook`을 개발하여 query를 간편하게 날릴 수 있도록 했습니다.
- 채택 사유
  - 매개변수에 method 와 url만 넣어도 api 호출이 되기에 **코드의 통일성과 협업속도**에 큰 도움이 된다 생각했습니다.
  - 공통 에러 핸들링이 되어있어서 에러핸들링 수정 시 useQuery 만 수정해주면 되기에 **유지/ 보수**에 좋았습니다.

```tsx
// 참고 파일 - src/hooks/useQuery.tsx
import API from 'api'
...

interface Props<T> {
  url: string
  method: Method
  onSuccess?: (data: T) => void | Promise<void>
  onFailure?: (e: unknown) => void | Promise<void>
  successMessage?: string
  errors?: ErrorsType | string
}

export const useQuery = <T,>({
  url,
  method,
  onSuccess,
  onFailure,
  successMessage,
  errors,
}: Props<T>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<T | null>(null)

  const query = useCallback(
    async <Body,>(body?: Body) => {
      setIsLoading(true)

      try {
        const { data } = await API({
          url,
          method,
          data: body,
        })

        if (successMessage) alert(successMessage)

        setData(data)
        if (onSuccess) await onSuccess(data)
      } catch (e) {
        // 공통 에러 핸들링
        if (!isAxiosError(e)) return alert('알 수 없는 에러가 발생했습니다')

        if (e.response && e.response.status >= 500) {
          alert('알 수 없는 에러가 발생했습니다')
        } else if (typeof errors === 'string') {
          alert(errors)
        } else if (errors && e.response && errors[e.response.status]) {
          alert(errors[e.response.status])
        }

        if (onFailure) await onFailure(e)
      } finally {
        setIsLoading(false)
      }
    },
    [url, method, onSuccess, onFailure, successMessage, errors]
  )

  return { query, isLoading, data }
}
```
- `useQuery` 실 사용 코드
```ts
// 참고 파일 - src/pages/Todo/todo.tsx
  ...
  const { query: createTodo } = useQuery({
    method: 'post',
    url: `/todos`,
    onSuccess: () => { // 성공시 실행
      console.log('성공')
    },
    onFailure: () => { // 실패시 실행
      console.log('실패')
    },
    successMessage: '성공~', // 성공시 alert로 띄워질 메시지
    errors: {
      401: '권한이 없습니다', // 실패시 특정 status code에서 alert로 띄워질 메시지
    },
  })
  ...
  const handleSubmit = async () => {
  await createTodo({ todo: todoText })
  await getTodo()
  }
  ...
```
### 3. `Context API` 사용
- `Context API` 를 사용해 Todo 리스트와 get 함수를 Todo페이지 내 상태관리 해주었습니다.
- 채택사유
  - Todo 페이지에서 post, put, delet 이후 get 을 다시 해줘야 해서 여러 컴포넌트에서 Todo 리스트와 get 함수를 필요하게 되었습니다.
  - Prop Drilling 을 막기 위해서 todo 배열과 getTodo 함수를 Context API 를 사용해 상태관리 해주었습니다.
```ts
// 참고 파일 - src/context/TodoContext/tsx
import { createContext, Dispatch, SetStateAction } from 'react'
import { ITodo } from 'types/ITodo'

export const TodoContext = createContext<{
  todoData: ITodo[]
  setTodoData: Dispatch<SetStateAction<ITodo[]>>
  getTodo: () => Promise<void>
}>({
  todoData: [],
  setTodoData: () => {
    return
  },
  getTodo: async () => {
    return
  },
})
```
- Todo페이지 내 사용을 위한 Provider 감싸주기
```ts
// 참고 파일 - src/pages/Todo/index.tsx
import { TodoContext } from 'context/TodoContext'
...
export const TodoPage = () => {
  const [todoData, setTodoData] = useState<any>([])

  //todo 불러오기
  const { query: getTodo, data } = useQuery({
    url: `/todos`,
    method: 'get',
  })
...
  return (
    <TodoContext.Provider value={{ todoData, setTodoData, getTodo }}>
      <Wrapper>
        <Todo />
      </Wrapper>
    </TodoContext.Provider>
  )
}
```
- 실 사용
```ts
// 참고 파일 -src/pages/Todo/todo.tsx
...
export const Todo = () => {
  const { todoData, getTodo } = useContext(TodoContext)
  ...
  }
```
## 👾 코드 컨벤션
### commit message

| Type | Description |
| --- | --- |
| test | 누락된 테스트 추가 |
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| chore | 빌드 프로세스나 보조 도구 변경 |
| docs | 문서 변경 |
| refactor | 버그 수정도, 새로운 기능 추가도 아닌 코드 변경 |
| style | 마크업, 공백, 포맷, 세미콜론 누락 등 스타일 변경 |
| ci | CI 관련 변경 |
| perf | 성능 개선 |

### branch

| 브랜치 이름 | 설명 |
| --- | --- |
| master | 제품으로 출시 가능한 브랜치 |
| feature/개발할 내용 | 기능을 개발하는 브랜치 |
| fix/수정할 내용  | 출시 버전에서 발생한 버그를 수정하는 브랜치 |
