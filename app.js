setInterval(() => {
    var today = new Date();
    var day = today.getDay();
    var hour = today.getHours();
    var min = today.getMinutes();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("t").innerHTML=hour+":"+min;
    document.getElementById("time").innerHTML=hour+":"+min;
    document.getElementById("day").innerHTML=daylist[day];
    },1000);
  
  let msgList = [
      "Java is an object-oriented programming language that produces software for multiple platforms. When a programmer writes a Java application, the compiled code (known as bytecode) runs on most operating systems (OS), including Windows, Linux and Mac OS.",
      "Cascading Style Sheet(CSS) is used to set the style in web pages that contain HTML elements.",
      "HTML, in full hypertext markup language, a formatting system for displaying material retrieved over the Internet.",
      "JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more.",
    ];
    
    let selectMsg = (msgId) => {
      let msg = document.getElementById("showMsg");
      msg.style.display = "block";
      msg.textContent = msgList[msgId - 1];
    };
  
    //Media
    let smsState, musicState, watchState;
    smsState = musicState = watchState = false;
    function setOff() {
      let icons = document.querySelector(".icons").childNodes;
      icons[1].style.opacity = 0.5;
      icons[3].style.opacity = 0.5;
      icons[5].style.opacity = 0.5;
      document.querySelector(".time").style.display = "none";
      document.querySelector(".sms").style.display = "none";
      document.querySelector(".media").style.display = "none";
  }
  
    function selectScreen(s) {
      setOff();
      let icons = document.querySelector(".icons").childNodes;
      switch(s){
        case 0:
          document.querySelector(".time").style.display="flex";
          break;
        case 1:
          document.querySelector(".sms").style.display="flex";
          icons[s].style.opacity=1;
          break;
        case 3:
          document.querySelector(".media").style.display="flex";
          icons[s].style.opacity=1;
          break;
      }
    }