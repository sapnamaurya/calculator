const count = document.getElementById("inputBox");

function addBtn(v) {
  count.value += v;
}

function ac() {
  count.value = "";
}

function equal() {
  count.value = eval(count.value);
}

function del() {
  count.value = count.value.substr(0, count.value.length - 1);
}
