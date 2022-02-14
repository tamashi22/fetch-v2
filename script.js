document.getElementById('fetchDataBtn').addEventListener('click', fetchData);

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(arr => {
            let output = '<ul>';
            arr.forEach(function (item) {
                output += `
                            <li>
                            "userId": ${item.userId}
                            </li>
                            <li>
                            "id": ${item.id}
                        </li>
                        <li>
                        "title": ${item.title}
                        </li>
                        <li>
                        "body": ${item.body}
                        </li>
                        
                        <br>
                        `;
            });
            output += '</ul>'
            document.getElementById("response").innerHTML = output;
        });
}