let i = 0;

function timedCount() {
  //   let i = 0;
  i = i + 2;
  this.postMessage(i);
  this.setTimeout("timedCount()", 1000);
}

timedCount();
