let prompt = document.querySelector("#prompt");
let chatContainer = document.querySelector(".chat-container");
let imagebtn = document.querySelector('#image')
let image = document.querySelector('#image img')
let imageinput = document.querySelector("#image input");
let submitbtn = document.querySelector('#submit');
let chatArea = document.querySelector('.user-chat-area');

const Api_Url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBE6DtzWa8ExOpcnT7v5qWvFebfzUzVL2A";

let user = {
    message: null,
    file: {
        mime_type: null,
        data: null
    }
}

async function generateResponse(aiChatBox) {
    let text = aiChatBox.querySelector('.ai-chat-area');
    let RequestOption = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            "contents": [
                { "parts": [{ "text": user.message }, (user.file.data ? [{ "inline_data": user.file }] : [])] }
            ]

        })
    }

    try {
        let response = await fetch(Api_Url, RequestOption);
        let data = await response.json();
        let apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
        text.innerHTML = apiResponse;
        console.log(apiResponse);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" })

        image.src = 'img.svg';
        image.classList.remove("choose");

        user.file = {}
    }


}


function createChatBox(html, classes) {
    let div = document.createElement('div');
    div.innerHTML = html;
    div.classList.add(classes);
    return div;
}





function handlechatResponse(usermessage) {
    user.message = usermessage.trim();

    // Prevent empty chat from displaying
    if (!user.message && !user.file.data) {
        console.log("No content provided!");
        return;
    }

    // Create User Chat Box
    let html = ` 
        <img src="user.jpeg" alt="User Image" id="userImage">
        <div class="user-chat-area">
            ${user.message}
            ${user.file.data ? `<img src="data:${user.file.mime_type};base64,${user.file.data}" class="chooseimg"/>` : ""}
        </div>`;

    prompt.value = '';  // Clear input

    // Append User Chat Box
    let userChatBox = createChatBox(html, "user-chat-box");
    userChatBox.style.display = "block";  // Make the chat box visible
    chatContainer.appendChild(userChatBox);

    // Auto-scroll
    chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" });

    // Generate AI Response
    setTimeout(() => {
        let aiHtml = `
            <img src="ai.jpeg" alt="AI Image" id="aiImage">
            <div class="ai-chat-area"></div>`;
        let aiChatBox = createChatBox(aiHtml, "ai-chat-box");
        chatContainer.appendChild(aiChatBox);

        generateResponse(aiChatBox);
    }, 600);
}






prompt.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        console.log(prompt.value)
        handlechatResponse(prompt.value)
    }


})

submitbtn.addEventListener('click', () => {
    handlechatResponse(prompt.value)
});

imageinput.addEventListener('change', () => {
    const file = imageinput.files[0];
    if (!file) {
        return;
    }

    let reader = new FileReader();
    reader.onload = (e) => {
        let base64string = e.target.result.split(",")[1]
        user.file = {
            mime_type: file.type,
            data: base64string
        }
        image.src = `data:${user.file.mime_type};base64,${user.file.data}`;
        image.classList.add("choose")
    }


    reader.readAsDataURL(file);
})

imagebtn.addEventListener('click', () => {
    imagebtn.querySelector("input").click();
})



