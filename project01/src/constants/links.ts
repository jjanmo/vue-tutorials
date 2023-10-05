interface Link {
  type: 'video' | 'document';
  title: string;
  url: string;
  status: 'todo' | 'doing' | 'done';
  version: 2 | 3;
}

export const links: Link[] = [
  {
    type: 'video',
    title: '[개발자의 품격] 한시간만에 끝내는 Vue.js 입문',
    url: 'https://www.youtube.com/watch?v=sqH0u8wN4Rs&list=PLqbWuGdVBJd3T1y8tVBdeuX-cDL3LEzt_&index=5&t=147s',
    status: 'done',
    version: 2,
  },
  {
    type: 'video',
    title: '[코지코더] Vue.js 2 기초 익히기 기본 강좌',
    url: 'https://www.youtube.com/playlist?list=PLB7CpjPWqHOtYP7P_0Ls9XNed0NLvmkAh',
    status: 'doing',
    version: 2,
  },
  {
    type: 'document',
    title:
      '21 Vue.js Example Projects to Learn From (Open-source, Beginner to Intermediate Level)',
    url: 'https://dev.to/syakirurahman/21-vue-js-example-projects-to-learn-from-open-source-beginner-to-intermediate-level-5bnk',
    status: 'doing',
    version: 2,
  },
  {
    type: 'document',
    title: 'Vue2 공식사이트',
    url: 'https://v2.ko.vuejs.org/',
    status: 'doing',
    version: 2,
  },
  {
    type: 'document',
    title: 'Vue3 공식사이트',
    url: 'https://v3-docs.vuejs-korea.org/',
    status: 'todo',
    version: 3,
  },
  {
    type: 'video',
    title: '[짐코딩] Vue3 완벽 마스터: 기초부터 실전까지 - "기본편"',
    url: 'https://v3-docs.vuejs-korea.org/',
    status: 'todo',
    version: 3,
  },
  {
    type: 'video',
    title: '[짐코딩] Vue3 완벽 마스터: 기초부터 실전까지 - "실전편"',
    url: 'https://v3-docs.vuejs-korea.org/',
    status: 'todo',
    version: 3,
  },
];
