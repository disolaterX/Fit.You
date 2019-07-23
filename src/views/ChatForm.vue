<template>
  <div>
    <span id="closethechatbutton" @click="()=>{this.$router.push('/')}">&#10006;</span>
    <div id="chatBot">
      <div class="row notuserside">
        <img src="../assets/svg/bot.svg" />
        <p
          v-if="this.$store.state.isAuth == true"
          class="chat bot"
        >Hello , {{this.$store.state.cUser.displayName}}</p>
        <p v-else class="chat bot">Hello Stranger</p>
      </div>
    </div>
    <div v-if="botting == true" id="botting">
      <img src="../assets/svg/bot.svg" />
      <div id="usertypingdots">
        <span />
        <span />
        <span />
      </div>
    </div>
    <div id="typerforuser">
      <input autocomplete="off" v-model="currentData" id="chatinput" type="text" />
      <v-icon @click="submitData(currentQuery)" id="sendiconchat">send</v-icon>
    </div>
  </div>
</template>
<script>
import kk from "../assets/svg/bot.svg";
export default {
  data() {
    return {
      currentData: "",
      botting: false,
      currentQuery: 0,
      botQuery: 0,
      userInfo: [],
      botQuestion: [
        { question: "Want new diet plan ?", title: "Need Plan" },
        { question: "Enter you full name", title: "Name" },
        { question: "Your Age", title: "Age" },
        { question: "Your Gender", title: "Gender" },
        { question: "Your Weight", title: "Weight" },
        { question: "Your Height", title: "Height" },
        { question: "Vegetarian/Non-vegetarian", title: "Vegan" },
        { question: "Do you work out ?", title: "Workingout" },
        { question: "Working or Student", title: "Student" },
        { question: "Can you afford high cost food", title: "Rich" }
      ]
    };
  },
  created() {
    this.$store.state.showNav = false;
  },
  destroyed() {
    this.$store.state.showNav = true;
  },
  methods: {
    submitData(i) {
      if (this.botQuery < 9) {
      var userDiv = document.querySelector("#chatBot");
      var innerDiv = document.createElement("div");
      innerDiv.classList = "row userside";
      innerDiv.style = "display: flex;width: 100%;flex-flow: row-reverse;";
      userDiv.appendChild(innerDiv);
      console.log(i);

      userDiv = document.querySelectorAll(".userside")[i];
      console.log(userDiv);

      innerDiv = document.createElement("img");
      innerDiv.src = kk;
      innerDiv.style = "width: 35px;padding: 5px";
      userDiv.appendChild(innerDiv);
      innerDiv = document.createElement("p");
      innerDiv.classList = "chat self";
      innerDiv.innerHTML = this.currentData;
      this.userInfo.push(this.currentData);
      innerDiv.style =
        "float: right;background: whitesmoke;color: black;padding: 10px;border-radius: 15px;width: 60%;margin: 10px 0;";
      userDiv.appendChild(innerDiv);
      this.currentQuery++;
        this.botTyping();
      }
    },
    botTyping() {
      this.botting = true;
      this.currentData = "";
      if (this.botQuery < 9) {
        console.log(this.userInfo);

        setTimeout(() => {
          var userDiv = document.querySelector("#chatBot");
          var innerDiv = document.createElement("div");
          innerDiv.classList = "row notuserside";
          innerDiv.style = "display: flex;width: 100%;flex-flow: row;";
          userDiv.appendChild(innerDiv);
          userDiv = document.querySelectorAll(".notuserside")[
            this.currentQuery
          ];
          innerDiv = document.createElement("img");
          innerDiv.src = kk;
          innerDiv.style = "width: 35px;padding: 5px";
          userDiv.appendChild(innerDiv);
          innerDiv = document.createElement("p");
          innerDiv.classList = "chat bot";
          innerDiv.innerHTML = this.botQuestion[this.botQuery].question;
          innerDiv.style =
            "float: right;background: #fd9000;color: white;padding: 10px;border-radius: 15px;width: 60%;margin: 10px 0;";
          userDiv.appendChild(innerDiv);

          this.botQuery++;
          this.botting = false;
        }, 1000);
      } else {
        var userDiv = document.querySelector("#chatBot");
        var innerDiv = document.createElement("div");
        innerDiv.classList = "row notuserside";
        innerDiv.style = "display: flex;width: 100%;flex-flow: row;";
        userDiv.appendChild(innerDiv);
        userDiv = document.querySelectorAll(".notuserside")[this.currentQuery];
        innerDiv = document.createElement("img");
        innerDiv.src = kk;
        innerDiv.style = "width: 35px;padding: 5px";
        userDiv.appendChild(innerDiv);
        innerDiv = document.createElement("p");
        innerDiv.classList = "chat bot";
        innerDiv.innerHTML =
          "Thanks for your responce We Will get back to you ASPS";
        innerDiv.style =
          "float: right;background: #fd9000;color: white;padding: 10px;border-radius: 15px;width: 60%;margin: 10px 0;";
        userDiv.appendChild(innerDiv);
        this.botting = false;
      }
    }
  }
};
</script>

<style scoped>
#chatBot {
  height: 100%;
  padding: 0 0 45px 0;
  background: white;
}
.chat {
  padding: 10px;
  border-radius: 15px;
  width: 60%;
  margin: 10px 0;
}

.row {
  display: flex;
  width: 100%;
}

.userside {
  flex-flow: row-reverse;
}

.notuserside {
  flex-flow: row;
}

.self {
  float: left;
  background: whitesmoke;
}
.bot {
  float: right;
  background: #fd9000;
  color: white;
}
img {
  width: 35px;
  padding: 5px;
}

#botting {
  display: flex;
  bottom: 61px;
  position: fixed;
}

#typerforuser {
  position: fixed;
  bottom: 0;
  background: white;
  width: 100%;
  height: 54px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.16) !important;
}

#typerforuser .MuiOutlinedInput-root {
  height: 40px;
}

#typerforuser .MuiFormControl-marginNormal {
  margin-top: 0px;
  margin-bottom: 0px;
}

#sendiconchat {
  transform: rotate(-40deg);

  position: absolute;

  right: 0;

  margin: 5px 20px;
  color: white;
  background: #ff5722;
  padding: 10px;
  border-radius: 25px;
}

#chatinput {
  height: 40px;

  border: none;

  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: medium;

  width: 75%;

  margin-right: 50px;
  outline: none;
  font-size: 18px;
  height: 54px;
}

#closethechatbutton {
  position: fixed;
  right: 0;
  padding: 10px;
  font-size: 24px;
}

#usertypingdots {
  float: left;
  margin: 4px 10px;
}
#usertypingdots span {
  width: 10px;
  height: 10px;
  background-color: #ff5722;
  display: inline-block;
  margin: 1px;
  border-radius: 50%;
}
#usertypingdots span:nth-child(1) {
  -webkit-animation: bounce 1s infinite;
  animation: bounce 1s infinite;
}
#usertypingdots span:nth-child(2) {
  -webkit-animation: bounce 1s infinite 0.3s;
  animation: bounce 1s infinite 0.3s;
}
#usertypingdots span:nth-child(3) {
  -webkit-animation: bounce 1s infinite 0.6s;
  animation: bounce 1s infinite 0.6s;
}

@-webkit-keyframes bounce {
  0% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
  50% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }
  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}

@keyframes bounce {
  0% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
  50% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }
  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}
</style>

