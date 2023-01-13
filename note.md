Node.js 
자바 스크립트로 Network app

## 목차
1. 리액트
2. JSX
3. 뷰 / 앵귤러와의 차이
4. Rendering Element
5. Component and Props
6. State and Lifecycle
7. Hooks
8. Handling Events
9. Conditional Rendering
10. List and Keys
11. Forms
12. Lifting State Up
13. Composition & ingeritance
14. Context


npm
노드 패키지 매니저

노드 설치시 LTS 가 붙는버전 추천. 장기 지원되는 안정화된 버전.


리액트란.
사용자 인터페이스를 만들기위한 자바스크립트 라이브러리.


앵귤러,	리액트,		뷰
구글,	페이스북 메타,	중국인 개발자가 만든 OpenSource

2022년 1월 앵귤러 버전 출시 중단.
현재 가장 많이 사용되는 자바스크립트 라이브러리가 리액트

앵귤러와 뷰는 프레임 워크
리액트는 라이브러리?

프레임 워크와 라이브러리
프레임 워크 : 흐름의 제어 권한을 프레임 워크가 가짐
라이브러리 : 흐름의 제어 권한을 개발자가 가짐

프레임 워크는 골격, 뼈대처럼 일정한 형태와 기능을 갖추고있다.
애플리케이션 개발 시 필요한 기능의 구조를 정하고, 제공하여, 이 뼈대위에 애플리케이션을 개발 한다.

라이브러리는 특정 기능을 모아둔 코드, 함수들의 집합이며, 코드를 개발함에 이 모음을 가져다 쓴다.


리액트의 특징
메타(페이스북)의 지원.
현재 가장 많은 사용자.

빠른 업데이트와 랜더링 속도
1)Virtual DOM을 가진다.
DOM 은 웹 페이지를 정의하는 객체. 웹 사이트의 정보를 전부 담고있다. console 창에 document 로 볼수있음.
DOM 변경이 일어날 시 리액트에서는 변경 할 부분만 검색 후 변경 가능

2)컴포넌트 기반
모든 페이지가 컴포넌트로 구성되어있다.
->재 사용성
모듈의 재사용 가능 - 의존성, 호완성 문제 조심.

리액트 네이티브
자바스크립트 코드로 모바일 앱도 개발 가능
단, 복잡한 애플리케이션은 아직 어려움.

state 컴포넌트의 상태 관리가 어려움



JSX 란
Java Script + X?

Java Script + XML / HTML

A syntax extension to Java Script
자바스크립트 문법의 확장.

JSX 코드 예시

```js
const element = <h1>Hello, world!</h1>
```

자바스크립트와 HTML 코드를 합침.

JSX를 쓰는 이유.
내부적으로 XML / HTML 코드를 JavaScript 로 바꿔줌.
이 역할을 하는게. React.CreateElement 이다.

JSX 를 썼을경우.
<div>Hello, {name}</div>

안썼을경우
React.createElement('div', null, 'Hello, ${name}' );

입력값에 직접 자바 스크립트를 사용하게 될 수 있으므로 JSX를 쓰면 Injection Attacks 방어 효과도 있다.

JSX에서는 {} 가들어가면 JavaScript 코드가 들어감

> 주의, 문자열 안에 변수를 넣을때는  ' ' 말고 ` ` 이다. 키보드 탭 위에 있는 그거.

예시.

```js
function Code(props) {
    return (
        <div>
            <h1>{`이 코드는 ${props.name} 이다`}</h1>
        </div>
    )
}
```


## Element!
Elements are the smallest building blocks of React apps.
리액트 앱을 구성하는 가장 작은 빌딩 블록들.

## DOM Element
F12 dev tool 에서 elements 탭눌렀을때 보이는 DomElement
화면에 나타나는 내용을 기술하는 자바스크립트 객체

DOM 은 웹 브라우저가 페이지를 인식 하는 객체의 집합.
예시로 	html 	- head
		- body	-div
처럼 트리로 존재한다.

리액트안에서 element역할을 
Virtual DOM 이 한다.

가상의 DOM 을 만들어 그 내용의 상태를 변경하는 형태.

리액트 elements 는 자바스크립트 객체 형태로 존재한다.
마음대로 변경할 수 없는 불변성을 지님.

elements 생성후에는 children 이나 attributes를 바꿀 수 없다.
화면의 구성을 바꿀때는 새로 생성해서 바꾼다.

Elements를 실제로 화면에 보여주기 위해선 렌더링 을 해야한다.

## 렌더링

{-------------}


RootDom Node
<div id='root'></div>
모든 리액트 앱에 들어간다.
이 태그 안에 리액트 엘리먼트들이 들어감.

```js
const element = <h1> 안녕 리액트</h1>
```

## 컴포넌트와 props

리액트의 페이지는 컴포넌트들로 이루어져있다.
이 컴포넌트안에는 다른 컴포넌트가 들어갈 수 있다
세분화된 컴포넌트의 배치로 상태를 바꾸고, UI를 구성한다.

## Props란?

prop - property  + s
	속성
Component의 속성들이다.

Props 
->
React component
->
React element

Props의 정보를 가지고 Component를 통해 element 가 만들어진다.
이미 만들어진 element는 변경할 수 없고, Component를 다시 통해 재생성 해야한다.


prop는 재료
component는 붕어빵 틀
element는 슈크림붕어빵


> props 는 읽기전용이다! 바꾸려면 새로 element를 생성해야한다.

>같은 Props에 대해선 같은 결과가 나와야한다.

문법
Props에 변수를 넣을때는 {}가 들어가야된다.
변수를 넣을 {} 안에 컴포넌트도 가능하다. 



## state
리액트 컴포넌트의 상태
= 컴포넌트의 변경 가능한 데이터

렌더링이나 데이터 흐름에 관련있는 값만 state에 포함하고,
아니면 컴포넌트에 인스턴스 필드로 정의한다.

리액트에서 스테이트는
constructor (생성자)
에서 정의한다

state는 직접 수정하면 안좋다.
렌더링에 문제가 발생함.
예) 컴포넌트에서 this.state에 값을 직접 넣는것 보다 this.setState로 지정해주는게 좋다

lifecycle
생명주기
컴포넌트의 생성과 사라지는 시점이 있다.


Mounting 생성
Updating 업데이트
Unmounting 제거.

    constructor()
: 해당 함수는 '맨 처음 생성될 때 한 번만 호출'되며 . this.state에 객체를 할당하여 지역 state를 초기화. 인스턴스에 이벤트 처리 메서드를 바인딩 하는데 사용됩니다. 따로 상태를 초기화하거나 메서드를 바인딩하는 작업이 없다면 생성자를 구현하지 않아도 됩니다. constructor()함수를 정의할 떄는 super()함수를 가장 위에 호출해야 합니다. super()함수는 프로퍼티와 생명 주기 상태 등을 초기화합니다. 또 constructor()내부에서만 this.state를 직접 할당할 수 있으며 그 외의 메서드에서는 this.setState()를 사용해야합니다.

	static getDerivedStateFromProps()
: 최초 마운트 시,업데이트 시 모두에서 render()를 호출하기 직전에 호출되는 함수입니다.
이 함수는 정적함수이기 떄문에 this.props나 this.state 같은 방법으로 props,state에 접근할 수 없습니다. 
접근하기 위해서는 인자로 전달받은 props,state를 이용해야 하며, 여기서의 props는 상위컴포넌트에서 전달된 값, state는 현재 컴포넌트의 state값입니다. 
따라서 상위컴포넌트에서 전달받은 프로퍼티로 state값을 연동할 때 주로 사용되며, 반환값으로 state를 변경합니다.

    render()
:
class컴포넌트에서 반드시 구현돼야하는 유일한 메서드로 새 화면을 그릴 떄 자동으로 호출되는 함수 입니다.
render()함수가 반환하는 JSX를 화면에 나타내줍니다.

	componentDidMount()
render()함수가 JSX를 화면에 나타낸 후 호출되는 함수로 컴포넌트가 화면에 모두 표현된 이후 필요한 작업들은 이 메서드에서 진행합니다.
 

## Hooks

리액트의 컴포넌트는 함수 컴포넌트와 클래스 컴포넌트 두가지이다
state로 렌더링에 필요한 데이터를 관리한다

클래스 컴포넌트는 생성자에서 state를 정의하고 setState()함수를 통해 업데이트.
Lifecycle methods 제공

함수 컴포넌트 state Lifecycle 사용 불가, <<== hooks 를 사용해 클래스 컴포넌트처럼 사용

이름앞에 use 를 붙여서 훅임을 알림.

Hook은 무조건 최상위레벨에서만 호출해야한다.
(함수 컴포넌트안에서의 최상위로, 반복문이나 조건문 안에 있으면 안된다.)
Hook은 컴포넌트가 렌더링 될 때 마다 같은 순서로 호출되어야한다.


예시

## useState()
state를 사용하기위한 훅이다.

사용법

    const [ 변수명 , set함수명 ] = useState(초기값);

변수 각각에 대해 set 함수가 따로 존재한다.

## useEffect() - 라이프사이클 함수와 동일한 기능을 수행할 수 있다.
side effect에 대한 처리
(다른 컴포넌트에 영향을 미칠 수 있고 렌더링 중에는 작업이 완료 될 수 없다.)

사용법 : 

 useEffect(이펙트 함수, 의존성 배열);
배열 안의 변수중 하나라도 값이 변경되었을 때 이펙트 함수가 실행된다.


만약 Effect 함수를 mount 와 unmount 에 한번만 실행하고 싶다면

 useEffect(이펙트 함수, []);
의존성 배열에 빈 배열을 넣으면 props 나 state에 의존되지 않으므로, 여러번 실행되지 않는다

만약 업데이트시마다 사용하고 싶다면.
    
    
 useEffect(이펙트 함수);
컴포넌트 업데이트때 마다 호출됨



useEffect의 에시

```js
import React, { useState, useEffect } from "react"

function Counter(props){
    const [count, setCount] = useState(0);


    // componentDidmount, componentDidUpdate 와 유사하게 작동
    useEffect(() => {
        document.title = `you clicked ${count} times `;
    });
//컴포넌트 마운트를 포함한 업데이트 시 마다 실행된다.
    return(
        <div>
            <p> 총 {count}번 클릭했습니다.</p>
            <button onClick={()=>setCount(count+1)}>
                클릭
            </button>
        </div>
    )
}
```

useEffect 로 componentDidUnmounted 구현하기.





useMemo

Memoization
비용이 높은(연산이 많은) 함수의 결과를 미리 가지고 있다가 재 호출시 전송.


>유의 렌더링이 일어나는동안 실행되기때문에 조심.

useCallback
useMemo와 비슷하지만 값이아닌 함수를 반환함.


useRef
레퍼런스 객체를 반환.  
refObject.current   
current 는 현재 참조하고있는 Element

```js
const refContainer = useRef(초깃값);
```


## Event 

카멜표기법 사용
중간에 나오는 새로운 글자를 대문자로 표기하여 구분.

    <button onClick= {}>

클래스 컴포넌트에선 바인딩을 해야한다.

바인딩
컴포넌트와 이벤트 함수를 연결(bind)한다

바인딩 하지 않아도 이벤트는 사용 가능하나, 어던 컴포넌트가 호출을 했는지 알 수 없기 때문에 클로벌스코프에서 호출되는데, props나 state 사용시 undefined 로 처리된다.


함수 컴포넌트에선 onClick 에 바로 함수를 넣어서 사용 가능


## Conditional Rendering


조건부 렌더링


두 컴포넌트 중 선택하여 보여주는 Greeting 컴포넌트
```js
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);
```


&& 연산자
```js
return(
    <div>
        { 조건 &&    
            조건 렌더링할 컴포넌트   
        }   
    </div>
)
```

삼항 연산자
```js
return (
    <div>
		{조건변수
			? <loginButton onClick={handleLogout}/>
			: <loginButton onClick={handleLogin}/>
		}
	</div>
)
```

특정 컴포넌트 렌더링을 안함
return null;


조건이 true 일때만 보여줌.

리액트의 Map 함수는 꼭 Key 값이 필요하다.




브랜치2