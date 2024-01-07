import todayView01 from "../assets/img/today/todayView01.jpg";
import todayView02 from "../assets/img/today/todayView02.jpg";
import todayView03 from "../assets/img/today/todayView03.jpg";
import todayView04 from "../assets/img/today/todayView04.jpg";
import todayView05 from "../assets/img/today/todayView05.jpg";
import todayView06 from "../assets/img/today/todayView06.jpg";

export const todayText = [
    {
        img: todayView01,
        title: "React 기초 5강 : state 맘대로 변경하는 법 (setState는 넘 옛날이고염)",
        desc : "0. 일단 상단에 useState가 잘 import 되어있는지 확인하시고 1. useState만들 때 함께 만들어놨던 따봉변경() 글제목변경() 이런 함수를 쓰시면 됩니다. 2. 근데 array 자료라면 그냥 대충 등호 이런걸로 변경하면 안되고 사본을 만들어서 그걸 변경하셔야합니다. 3. 사본 만드는 법은 let newArray = [...기존state이름] 이렇게 만드신 다음 newArray를 수정해서 글제목변경(newArray) 이렇게 하셔야 제대로 state 변경이 가능합니다. 4. 이걸 글로 설명하면 어려우니 영상제작한것임 영상보셈 ",
        author : "codingapple",
        channelId: "UCSLrpBAzr-ROVGHQ5EmxnUg",
        date: "2020.07.03",
        page: "/reactb"
    },{
        img: todayView02,
        title: "실용 자바스크립트 4강 : 파라미터 왜 쓰는지 알려줌 (쓸데없음)",
        desc : "파라미터는 function을 업그레이드할 때 필요한 문법입니다. 파라미터로 구멍을 뚫어놓으면 다양한 기능을 하는 function이 탄생하니까요. 파라미터로 구멍뚫는게 어려우면 안쓰면 됩니다. 그냥 function 함수 여러개 만드는거랑 똑같음",
        author : "codingapple",
        channelId: "UCSLrpBAzr-ROVGHQ5EmxnUg",
        date: "2020.12.09",
        page: "/jsb"
    },{
        img: todayView03,
        title: "Vue 6강 : 상품목록 만들기 진짜 데이터로 (import / export)",
        desc : "실은 Vue 문법아니고 그냥 자바스크립트 import / export 시간입니다. 하지만 지금은 서버가 없기 때문에 서버에서 가져왔다고 생각하고 상품목록이나 만들어봅시다.",
        author : "codingapple",
        channelId: "UCSLrpBAzr-ROVGHQ5EmxnUg",
        date: "2021.04.10",
        page: "/vue"
    },{
        img: todayView04,
        title: "(Ep. 1) 서버에 대해 존나쉽게 설명해드림 (Node.js + MongoDB로 2시간만에 웹서버 만들기)",
        desc : "(Ep. 1) 서버에 대해 존나쉽게 설명해드림. 본격 노드js로 서버만들기 전에 사전지식이 필요합니다. 하지만 책만 달랑보고 서버가 뭔지 이해하기란 매우 어렵습니다. 한줄요약 : 서버는 요청을 처리하는 기계일 뿐입니다. 근데 요청은 종류가 여러가지임 끝",
        author : "codingapple",
        channelId: "UCSLrpBAzr-ROVGHQ5EmxnUg",
        date: "2020.01.13",
        page: "/webserver"
    },{
        img: todayView05,
        title: "(Ep.2-1) Node.js가 뭔지 알아보자 (Node.js + MongoDB로 2시간만에 웹서버 만들기)",
        desc : "Node.js가 뭔지 설명해드리겠습니다. 실은 별거 아닙니다. 자바스크립트라는 언어와 노드쨩의 탄생비화를 알고 싶다면 계속 들으시고 아니면 그냥 다음 강의 (2-2) 로",
        author : "codingapple",
        channelId: "UCSLrpBAzr-ROVGHQ5EmxnUg",
        date: "2020.01.13",
        page: "/webserver"
    },{
        img: todayView06,
        title: "Vue 2강 : 데이터바인딩 문법인데 이딴거 왜하는지 알려드림",
        desc : "이런 식으로 문법만 쭉 설명하는 강의 들어봤자 의미가 없습니다. 혼자 코드를 못짬. 문법의 용도를 함께 배우셔야합니다. 데이터 바인딩 왜 하는겁니까 왜임 웹앱 만든다고 하지 않았습니까 그래서 데이터바인딩 하는 것입니다 끝",
        author : "codingapple",
        channelId: "UCSLrpBAzr-ROVGHQ5EmxnUg",
        date: "2021.03.26",
        page: "/vue"
    },
]