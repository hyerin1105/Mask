// Fetch API로 JSON Placeholder 테스트
const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))

// Fetch API로 POST 요청 날리기
// 생성할 Post 객체
let newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

fetch(url, {
    // HTTP 요청 메소드 사용 가능
    method: 'POST',
    // body는 직렬화해서 전송
    body: JSON.stringify(newPost),
    // Header를 추가해서 우리가 보내는 데이터에 대한 정보를 서버에 알려줌.
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => {
        console.log("response 타입: " + typeof (response));
        return response.json();
    })
    .then(json => {
        console.log("response.json() 타입: " + typeof (json));
        console.log(json)
    })