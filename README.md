# 코딩 유튜브 사이트
<br/><br/><br/>


## 🖥 완성작 보기
🟥 [Codingtube](https://codingyoutube.netlify.app/)

![youtube_preview](https://github.com/kanghyejiny/my_youtube/assets/112097855/9e69f84a-ac84-4721-8a11-399e16db6085)
<br/><br/><br/>


## 🛠 사용 기술 및 라이브러리
<p>
 <img src="https://img.shields.io/badge/nodedotjs-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
 <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=react&logoColor=white">
 <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=react&logoColor=white">
 <img src="https://img.shields.io/badge/youtube-FF0000?style=for-the-badge&logo=youtube&logoColor=white">
 <img src="https://img.shields.io/badge/rapid-0055DA?style=for-the-badge&logo=rapid&logoColor=white">
 <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=rapid&logoColor=white">
 <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
 <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</p>
<br/><br/><br/>


## 💡 주요 기능
#### ✳ 추천 영상
- 메인 페이지와  메뉴의 추천 영상에서 오늘의 유튜브 영상을 추천해줘요! 영상을 클릭하면  영상을 볼 수 있어요.

#### ✳ 추천 개발자
- 메인 페이지와 메뉴의 추천 개발자에서 코딩 유튜버들을 소개해줘요! 채널을 클릭하면 채널 프로필 사진과 설명, 업로드 된 영상들을 볼 수 있어요. 

#### ✳ React / JavaScript / Vue / 웹서버 개발
- 메인 페이지와 메뉴에서 유튜브 재생 목록을 볼 수 있어요! 영상을 클릭하면 영상이 바로 재생되요.

#### ✳ 검색 / 필터링
- 더 많은 유튜브 영상을 보고싶다면 검색창에 검색어를 입력해보세요! 다양한 유튜브 영상들을 볼 수 있어요. 
- 메뉴의 키워드를 눌러보세요! 검색 결과가 필터링되어 나타나게 되요.  

#### ✳ 유튜브 영상
- 영상 재생 공간에서 영상과 관련된 정보들을 볼 수 있어요! 조회수, 좋아요, 댓글수도 보여지게 돼요. 
<br/><br/><br/>

## 🔥 Troubleshooting
#### Issue1  
- 다른 페이지로 전환시 웹사이트가 제일 상단 영역부터 보여야 하는데 중간 영역부터 보여지는 문제가 발생함

React 애플리케이션에서 라우팅 변경 시 페이지가 맨 위로 스크롤되도록 하는 React 컴포넌트 scrollTo를  만들어 Main.jsx 에 scrollTo 컴포넌트 추가해주기
React Router를 사용하여, 페이지 경로가 변경될 때마다 useEffect를 사용하여 스크롤 위치를 맨 위로 이동시킨다.
                            
                            
                                import 문 : 코드 상단에 React의 useEffect와 useLocation 훅을, 그리고 React Router의 useLocation 훅을 가져옵니다.
                                ScrollTo 컴포넌트 : 함수형 컴포넌트로 선언되며, 페이지 내의 다른 곳에서 이 컴포넌트를 사용할 수 있습니다.
                                useLocation 훅을 사용하여 현재 페이지의 경로를 가져옵니다. 이 pathname 변수는 현재 페이지의 경로를 나타냅니다.
                                useEffect 훅 : 페이지의 컴포넌트가 렌더링될 때마다 실행되는 부수 효과 함수를 정의합니다. 이 부수 효과 함수는 pathname이 변경될 때마다 실행됩니다.
                                window.scrollTo(0, 0) : useEffect 함수 내에서, window.scrollTo 함수를 호출하여 페이지의 스크롤 위치를 (0, 0)으로 이동시킵니다. 이렇게 하면 페이지의 맨 위로 스크롤이 이동합니다.
                                [pathname] 의존성 배열 : useEffect 함수가 pathname의 변경을 감지하고 그 때에만 실행되도록 하기 위해 의존성 배열에 pathname을 포함시킵니다.
                                return null; : 이 컴포넌트는 화면에 렌더링되는 것이 아니라 스크롤을 조작하는 용도로만 사용됩니다. 따라서 렌더링되는 내용이 없으므로 null을 반환합니다.



## 프로젝트 실행
- **react를 설치** ➡  `npx create-react-app my_youtube`
- **react-router-dom을 설치** ➡ `npm install react-router-dom`
- **axios를 설치** ➡ `npm install axios`
- **react-icons을 설치** ➡ `npm install react-icons`
- **react-player를 설치** ➡ `npm install react-player`
- **sass를 설치** ➡ `npm install sass`
- **react-helmet-async를 설치** ➡ `npm install react-helmet-async`
- **swiper를 설치** ➡ `npm install swiper`
