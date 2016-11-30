function inject() {
    var x = document.getElementsByClassName("srednia");

    document.getElementById("calyRokHeader").style.display = "";
    document.getElementById("ocenySemestrIHeader").colSpan = 3;
    document.getElementById("ocenySemestrIIHeader").colSpan = 3;

    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "";
        x[i].style.width = "10%";
    }
}

// set up the mutation observer
var observer = new MutationObserver(function (mutations, me) {
  // `mutations` is an array of mutations that occurred
  // `me` is the MutationObserver instance
  console.log(++i);
  console.log(mutations[mutations.length-1].addedNodes[0].id);
  if (mutations[mutations.length-1].addedNodes[0].id == "tooltip") {
      inject();
      disconnect(me);
      return;
  }
});

var i = 0;

// start observing
observer.observe(document, {
  childList: true,
  subtree: true
});
