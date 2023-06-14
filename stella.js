let replies = [
  {
    main: '이제 첫걸음이네요',
    person: '김지은',
    date: '2023.06.12',
  },
  {
    main: '두번째 부터 떨릴 줄이야...',
    person: '김지은',
    date: '2023.06.12',
  },
  {
    main: '세번째',
    person: '김지은',
    date: '2023.06.13',
  },
  //   {
  //     writer: '작성자4',
  //     content: '테스트 내용4',
  //   },
  //   {
  //     writer: '작성자5',
  //     content: '테스트 내용5',
  //   },
  //   {
  //     writer: '작성자6',
  //     content: '테스트 내용6',
  //   },
  //   {
  //     writer: '작성자7',
  //     content: '테스트 내용7',
  //   },
];

//객체에 있는 데이터를 화면에 뿌리기
//append('HTML')-> +추가, html('HTML') -> 덮어쓰기

const $div = $('div');
let text = '';

// replies.forEach((reply) => {
//   text += `
//           <li>
//               <div class="reply">
//                   <div class="writer">${reply.writer}</div>
//                   <div class="content">${reply.content}</div>
//               </div>
//           </li>
//       `;
// });

$div.html(text);
replies.forEach((reply) => {
  text += `
    <div class="comment">
        <div class="main">${reply.main}</div>
        <div class="writer">
            <div class="person">${reply.person}</div>
            <span class="date">${reply.date}</span>
        </div>
    </div>
    `;
});

//   <ul>
//       <li>
//         <div class="reply">
//           <div class="writer">작성자</div>
//           <div class="content">댓글 내용</div>
//         </div>
//       </li>
