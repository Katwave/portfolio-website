// Animating the labels

const labels = document.getElementsByTagName("label");
const input = document.getElementsByTagName("input");
const textarea = document.getElementsByTagName("textarea")[0];

if (input[0].value) {
  labels[0].style = "top:0px";
} else if (input[1].value) {
  labels[1].style = "top:0px";
} else if (textarea.value) {
  labels[2].style = "top:0px";
}

for (let i = 0; i < labels.length - 1; i++) {
  input[i].addEventListener("click", (e) => {
    labels[i].style = "top:0px";
  });
  textarea.addEventListener("click", (e) => {
    labels[2].style = "top:0px";
  });
}

// Submitting the form

const submit = document.getElementById("submit");
const form = document.getElementsByTagName("form")[0];

const emailRegx = /@/;
submit.addEventListener("click", (e) => {
  if (emailRegx.test(input[1].value)) {
    input[1].style = "border-bottom: 3px solid green";
    form.action = "/thank-you";
  } else if (!emailRegx.test(input[1].value)) {
    e.preventDefault();
    input[1].style = "border-bottom: 3px solid red";
    form.action = "";
  } else {
    form.action = "/thank-you";
  }
});
