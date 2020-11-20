const year = document.getElementById("year").innerHTML;
let n = year.includes(Date().getFullYear);

function Check() {
  if (n == false) {
    document.getElementById("year").innerHTML = "&copy; " + new Date().getFullYear();
  } else {
    return;
  }
}

Check();