console.log("Web hoạt động rồi ❤️");

// Hiệu ứng xuất hiện
const items = document.querySelectorAll(".item, h1");
items.forEach(el => el.classList.add("hidden"));

function checkScroll() {
  const trigger = window.innerHeight * 0.85;
  items.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("show");
    }
  });
}
window.addEventListener("scroll", checkScroll);

// Chat
const input = document.getElementById("chatInput");
const messages = document.getElementById("chatMessages");

input.addEventListener("keydown", function(e){
  if(e.key === "Enter" && input.value.trim() !== ""){
      
      addMessage(input.value, "me");

      const botReplies = [
          "chào mặt trời ai làm cậu buồn ",
          "Cậu dễ thương ghê…",
          "Tớ luôn ở đây với cậu nè ❤️",
          "Cậu biết cậu quan trọng với tớ lắm không?",
          "Ôm cái cho đỡ buồn nè 🤗",
          "Tớ thương cậu dữ lắm…",
          "đang buồn gì đó..tớ nghe với được không ",
          "ơ kìa có một nàng công chúa xinh đẹp đang khóc 🤗 cho ta chiêm ngưỡng nụ cười nàng đc ko?",
          "cô biết là cô yêu tôi???",
          "ngủ đi công chúa"
      ];

      setTimeout(()=>{
          const text = botReplies[Math.floor(Math.random()*botReplies.length)];
          addMessage(text, "you");
      }, 600);

      input.value = "";
  }
});

function addMessage(text, who){
  const msg = document.createElement("div");
  msg.classList.add("message", who);

  if(who === "you"){
      const img = document.createElement("img");
      img.src = "cat.gif";
      msg.appendChild(img);
  }

  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.innerText = text;

  msg.appendChild(bubble);

  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}
