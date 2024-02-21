# 코딩 유튜브 사이트
React 프레임워크와 Youtube API를 이용한 코딩 유튜브 사이트
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
### ⚠ Issue1
다른 페이지로 전환시 웹사이트가 제일 상단 영역부터 보여야 하는데 중간 영역부터 보여지는 문제가 발생했다.

**원인**
- React 애플리케이션에서 라우팅 변경 시 페이지가 맨 위로 스크롤되도록 하는 React 컴포넌트를 구현하지 않았다는 사실을 알게 되었다.

**해결**
- React 애플리케이션에서 라우팅 변경 시 페이지가 맨 위로 스크롤되도록 하는 React 컴포넌트 scrollTo를 만들어 Main.jsx에 scrollTo 컴포넌트 추가해주기
- React Router를 사용하여, 페이지 경로가 변경될 때마다 useEffect를 사용하여 스크롤 위치를 맨 위로 이동시킨다.

### ⚠ Issue2
Search를 통해 유튜브 영상을 카드 형식으로 보면 채널 소개가 나오면서 비디오 페이지가 없는 undefined 주소가 나오게 되고, 그러면 없는 페이지로 이동하게 되는 문제가 발생했다. 

**원인**
- 데이터를 불러올 때 채널 페이지를 불러오게 했다는 사실을 알게 되었다.

**해결**
- 데이터를 불러올 때 채널 페이지를 불러오지 않게 하면 된다.
- Search.jsx 페이지에서 데이터를 불러올 때 type=video를 추가해서 해결했다.
<br/><br/><br/>

## 프로젝트 실행
- **react를 설치** ➡  `npx create-react-app my_youtube`
- **react-router-dom을 설치** ➡ `npm install react-router-dom`
- **axios를 설치** ➡ `npm install axios`
- **react-icons을 설치** ➡ `npm install react-icons`
- **react-player를 설치** ➡ `npm install react-player`
- **sass를 설치** ➡ `npm install sass`
- **react-helmet-async를 설치** ➡ `npm install react-helmet-async`
- **swiper를 설치** ➡ `npm install swiper`
