function function_li() {
  var inputText = document.getElementById("inputId").value;

  // console.log(LiList.length);
  if (inputText == "") {
    // console.log(typeof inputText.value);
    alert("Field Cannot be empty!");
  } else {
    var li_tag = document.createElement("li");
    var textContent = document.createTextNode(inputText);
    li_tag.appendChild(textContent);
    document.getElementById("ul_Id").appendChild(li_tag);

    var LiList = document.getElementsByTagName("li");
    for (var i = 0; i < LiList.length; i++) {
      var btn = document.createElement("button");
      var txt = document.createTextNode("🚮");
      btn.className = "list_button";
      btn.appendChild(txt);
      LiList[i].appendChild(btn);
    }

    //  close button to hide
    console.log("list_button");
    var close_button = document.getElementsByClassName("list_button");
    for (var i = 0; i < close_button.length; i++) {
      close_button[i].onclick = function () {
        var x = this.parentElement;
        x.style.display = "none";
      };
    }
  }
}
