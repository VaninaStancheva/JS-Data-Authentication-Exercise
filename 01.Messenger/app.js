
function attachEvents() {
    const url = `http://localhost:3030/jsonstore/messenger`;

    const textArea = document.getElementById('messages');
    const buttonSend = document.getElementById('submit');
    const buttonRefresh = document.getElementById('refresh');

    buttonSend.addEventListener('click', sendMessage);


    function sendMessage () {
        //post the information from labels to server
        const labelName = document.getElementById('author').value;
        const labelMessage = document.getElementById('content').value;

        const data = {
            author: labelName,
            content: labelMessage,
        }

        fetch(url, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data),
        })
        console.log(data)
    }

    buttonRefresh.addEventListener('click', getMessages);
    function getMessages() {
        //get info from server and display it
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let innerHtml = '';
                // textArea.innerText = `${data.author}: ${data.content}`;
                Object.values(data)
                    .forEach( el => {
                        innerHtml += `${el.author}: ${el.content}&#13;&#10`
                        textArea.innerHTML = innerHtml;
                    })
            })
    }







}

attachEvents();