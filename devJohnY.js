let comments = [
  {
    title: '1. myDay01 프로젝트 생성',
    writer1: '작성자 : 아몰라',
    writeDate: '404.06.01',
  },
  {
    title: '2. index.jsp 생성',
    writer1: '작성자 : 짱구',
    writeDate: '1988.06.02',
  },
  {
    title: '3. 사용자에게 나이를 입력받기',
    writer1: '작성자 : 팅커벨',
    writeDate: '2000.06.03',
  },
  {
    title: '4. MyServlet 서블릿 생성',
    writer1: '작성자 : 코난',
    writeDate: '2003.06.04',
  },
  {
    title: '5. request.getParameter("key")로 나이 전달받기',
    writer1: '작성자 : 피카츄',
    writeDate: '2007.06.11',
  },
  {
    title: '6. 전달받은 나이에 -1 하기!',
    writer1: '작성자 : 염소',
    writeDate: '2020.06.12',
  },
  {
    title: '7. 결과값을 result.jsp에 전송',
    writer1: '작성자 : 코로나',
    writeDate: '2022.06.14',
  },
  {
    title: '8. 쿼리스트링으로 전송하기 (...?key=value)',
    writer1: '작성자 : 에볼라',
    writeDate: '2023.06.16',
  },
  {
    title: '9. result.jsp에서 request.getParameter("key")으로 받기',
    writer1: '작성자 : 배수지',
    writeDate: '2028.06.23',
  },
  {
    title: '10. 알맞은 태그 사이에 받은 값 넣기',
    writer1: '작성자 : 방탄소년단',
    writeDate: '2099.06.44',
  },
];

const $ul = $('ul');
let text = '';

comments.forEach((comment) => {
  text += `
  <li>
  <div class="comment">
    <div class="title">${comment.title}</div>
    <div class="writer">
      <div class="writer1">${comment.writer1}</div>
      <span class="writeDate">${comment.writeDate}</span>
    </div>
    <!-- <div class="line"></div> -->
  </div>
</li>
  `;
});

$ul.html(text);
