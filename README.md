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

- [ ] LoL 챔피언 순서 맞추기

- https://joshua1988.github.io/vue-camp/legacy/jquery-to-vue.html#%E1%84%87%E1%85%B2-%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%A1%E1%84%80%E1%85%A1-%E1%84%86%E1%85%A1%E1%84%8C%E1%85%AE%E1%84%92%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB-%E1%84%92%E1%85%A7%E1%86%AB%E1%84%89%E1%85%B5%E1%86%AF

</details>

## Project02

> Vue2 + Typescript + Webpack + SSR

> 현재 회사의 레거시 뷰 프로젝트에서 사용하는 스택과 버전처럼 초기 구성을 만들어보기!

> use class component
