# Vue Tutorials

## Project01 - Start [-ing]

> Make tiny projects using **Vue ~~v2~~ v3** (boilerplate `vue-cli`)

<details>
  <summary>시작</summary>

조만간 뷰를 다뤄야 할 일정(`Vue → React migration`)이 있어서 미리 뷰에 대해서 알아보기 위해서 뷰를 시작해본다. 또한 (만나보게 될 프로젝트가) 레거시 프로젝트이기 때문에 적어도 최신 버전인 Vue 3보다는 Vue 2를 먼저 접해보는 것이 나을 것으로 판단되어 처음 프로젝트는 `Vue 2`로 시작하게 되었다. 이 곳에서는 뷰를 활용하여 미니 프로젝트 형식으로 이것 저것 만들어볼 예정이다.

그런데 말입니다...

Vue2 + Typescript 조합으로 만드는 중에 수많은 오류를 마주하였다. 우선 Vue2에서 Typescript를 사용하기 위해서 Vue.extend()를 사용해야했는데, 이것은 data에 대한, 특히 객체 타입을 자동추론해주는 못하는 버그(인지, 오류인지)가 있었다. 또 Vuex를 사용할 때, Vue2는 Vuex3을 사용해야했는데, 이로 인해서 $store에 대한 타입추론이 어려웠다. 타입정의 파일도 작성하고, 여러가지 방법들을 찾아봤지만, 간단한 방법으로는 해결하기 어려웠고, 하나가 해결되면 또 다른 부분에서 타입오류가 나타났다. 그러다가 이런 [글](https://meetup.nhncloud.com/posts/182)을 읽게 되었다. Vue2에서 Typescript를 사용하기 위해선 class형으로 사용하는 것이 좋다는 글이다. 나의 경험과 이런 글을 접하고 나니, 현재 회사의 레거시 뷰 프로젝트가 대부분 class형으로 작성된 것이 어느정도 이해가 되었다. 그래서 나는 이 프로젝트는 우선은 `Vue3에 Option API`를 통해서 구현하는 것으로 변경하였다.

</details>

<details>
  <summary>Content</summary>
   
  - [x] TodoApp
  - [ ] 매칭게임 with DragNDrop
  - [x] 메모리 게임
  - [ ] 영화리스트 with 애니메이션
    - [참고](https://www.freecodecamp.org/news/animations-with-vuejs-transition-api/)
    - 영화 리스트 + 좋아요 처리(localstorage 이용) 
 
</details>

## Project02 - Hacker News Clone

> with Reference : 📺 [Vue.js 완벽 가이드](https://www.inflearn.com/course/vue-js)

> Vue2(based class component) + Typescript

- [x] vuex 로직 추가
- [x] header UI 수정
- [x] List UI 수정
- [x] 레이아웃 수정
- [x] fetch data 로직 통합
- [x] user 페이지 추가( + style)
- [x] mixin
- [ ] 페이지네이션
- [ ] 페이지네이션 버튼 분기처리 필요! -> 리스트에서만 노출되어야함! + sticky로 하면 좋을듯
- [x] 로딩 스피너 넣기 (로딩 상태)
- [ ] Page 통합
- [ ] 리스트 아이템 분기처리
      -> URL이 외부URL일수도 내부URL 일수도 있음!
- [x] ask 상세 페이지 구현
- [ ] comment UI 및 노출하는 로직(재귀)
