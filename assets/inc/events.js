function clicker(el, callback) {
  var array = document.querySelectorAll(el);
  for (var index = 0; index < array.length; index++) {
    var element = array[index];
    element.addEventListener("click", function (e) {
      callback(this, el, e);
    });
  }
}

function hasClass(ele, cls) {
  if (ele.getAttribute("class") === null) {
    ele.setAttribute("class", "");
  }
  return !!ele
    .getAttribute("class")
    .match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

function addClass(ele, cls) {
  var array;
  if (typeof ele == "string") {
    array = document.querySelectorAll(ele);
    for (var index = 0; index < array.length; index++) {
      var element = array[index];
      if (!hasClass(element, cls)) {
        var clsName = element.getAttribute("class").replace(/\s+/g, " ").trim();
        element.setAttribute("class", clsName + " " + cls);
      }
    }
  } else {
    if (!hasClass(ele, cls)) {
      var clsName = ele.className;
      ele.getAttribute("class").replace(/\s+/g, " ").trim();
      ele.setAttribute("class", clsName + " " + cls);
    }
  }
}

function removeClass(ele, cls) {
  var array;
  if (typeof ele == "string") {
    array = document.querySelectorAll(ele);
    for (var index = 0; index < array.length; index++) {
      var element = array[index];
      var classes = cls.split(" ");

      for (var i = 0; i < classes.length; i++) {
        var c = classes[i];
        if (hasClass(element, c)) {
          var reg = new RegExp("(\\s|^)" + c + "(\\s|$)");
          //element.className = element.className.replace(reg, " ");
          element.setAttribute(
            "class",
            element.getAttribute("class").replace(reg, " ")
          );
        }
      }
    }
  } else {
    var eles = ele;
    if (typeof eles.length != "undefined") {
      for (var index = 0; index < eles.length; index++) {
        if (hasClass(eles[index], cls)) {
          var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
          eles[index].setAttribute(
            "class",
            eles[index].getAttribute("class").replace(reg, " ")
          );
        }
      }
    } else {
      if (hasClass(ele, cls)) {
        var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        ele.setAttribute("class", ele.getAttribute("class").replace(reg, " "));
      }
    }
  }
}

function select(ele) {
  var element = document.querySelectorAll(ele);
  var res = "";

  if (typeof element == "undefined") {
    res = [];
  } else if (element.length < 2 && element.length > 0) {
    res = element[0];
  } else {
    res = element;
  }

  return res;
}
