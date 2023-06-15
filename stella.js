let comments = [
  {
    main: '이제 첫걸음이네요',
    person: '작성자: 김지은',
    date: '2023.06.12',
  },
  {
    main: '두번째 부터 떨릴 줄이야...',
    person: '작성자: 엘사',
    date: '2023.06.12',
  },
  {
    main: '세번째 나이를 왜 궁금해 하는거지?',
    person: '작성자: 익명',
    date: '2023.06.13',
  },
  {
    main: '네번째 숫자도 입력을 못한다ㅋㅋㅋㅋ',
    person: '작성자: 3살',
    date: '2023.06.14',
  },
  {
    main: '다섯번째 내가 시작했지만 제일 하기 싫다',
    person: '작성자: 후회',
    date: '2023.06.15',
  },
  {
    main: '여섯번째 다들 열심히 해줘서 고마워요',
    person: '작성자: 팀장',
    date: '2023.07.05',
  },
  {
    main: '일곱번째 으앗 이제 좀 자고 싶다',
    person: '작성자: 열대야',
    date: '2023.08.10',
  },
  {
    main: '여덟번째 아이디어 고갈',
    person: '작성자: AI',
    date: '2023.08.11',
  },
  {
    main: '아홉번째 어째 이게 더 힘든것 같다',
    person: '작성자: 자승자박',
    date: '2023.09.01',
  },
  {
    main: '열번째 이제 끝!!',
    person: '작성자: 초심',
    date: '2023.09.02',
  },
];

//객체에 있는 데이터를 화면에 뿌리기
//append('HTML')-> +추가, html('HTML') -> 덮어쓰기

const $div = $('div');
let text = '';

comments.forEach((comment) => {
  text += `
    <div class="comment">
    <div class="main">${comment.main}</div>
    <div class="writer">
    <div class="person">${comment.person}</div>
    <span class="date">${comment.date}</span>
    </div>
    </div>
    `;
});

$div.html(text);
