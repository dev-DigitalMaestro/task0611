// codewith-yeain.html에 적용

let comments = [
    {
        writer: '안현기',
        content: '1. myDay01 프로젝트 생성',
        date: '2023-06-14'
    },
    {
        writer: '안현기',
        content: '2. index.jsp 생성',
        date: '2023-06-14'
    },
    {
        writer: '안현기',
        content: '3. 사용자에게 나이를 입력받기',
        date: '2023-06-14'
    },
    {
        writer: '안현기',
        content: '4. MyServlet 서블릿 생성',
        date: '2023-06-14'
    },
    {
        writer: '안현기',
        content: '5. request.getParameter("key")로 나이 전달받기',
        date: '2023-06-14'
    },
    {
        writer: '안현기',
        content: '6. 전달받은 나이에 -1 하기',
        date: '2023-06-14'
    },
    {
        writer: '안현기',
        content: '7. 결과값을 result.jsp에 전송트 내용',
        date: '2023-06-14'
    },
    {
        writer: '안현기',
        content: '8. 쿼리스트링으로 전송하기 (...?key=value)',
        date: '2023-06-14'
    },
    {
        writer: '안현기',
        content: '9. result.jsp에서 request.getParameter("key")으로 받기',
        date: '2023-06-14'
    },
    {
        writer: '안현기',
        content: '10. 알맞은 태그 사이에 받은 값 넣기',
        date: '2023-06-14'
    }
];

const $comments = $("div.comments");
let text = '';

comments.forEach((comment) => {
  text += `
    <div class="comment">
      <div>${comment.content}</div>
      <div class="writer">
        <div>${comment.writer}</div>
        <span>${comment.date}</span>
      </div>
    </div>
  `;
});

$comments.html(text);
