window.onload = Function => {
  
  var day_ask = document.getElementById("day");
  var day_res = document.getElementById("day-res");
  var text = document.getElementById("text");
  var time_ask = document.getElementById("time-ask")
  var time_res = document.getElementById("time-res");
  var name_in = document.getElementById("name-in");
  var name_submit = document.getElementById("name-submit");
  var post_list = document.getElementById("post-list");
  
  console.log('Hello World!');
  text.innerHTML = "click me";
  text.style.fontSize = "40px";
  
  var click_time = 0;
  text.onclick = Function => {
    click_time++;
    let x = click_time == 1 ? "" : " " + click_time + "time";
    text.innerHTML = "you clicked me" + x;
    console.log("clicked " + click_time + " time");
  }
  
  day_ask.onclick = Function => {
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
         day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    }
    day_res.innerHTML = "today is: " + day;
  }
  
  time_ask.onclick = () => time_res.innerHTML = Date();
  
  name_submit.onclick = Function => {
    alert(name_in.value ? "hello, " + name_in.value : "no input");
  }
  try {
    const url='https://jsonplaceholder.typicode.com/posts';
      success: fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonResponse) {
        var posts = "";
        jsonResponse.forEach((item) => {
          posts += "<li>" + item["title"] + "</li>";
        })
        post_list.innerHTML = posts;
      });
  } catch(e) {
    post_list.innerHTML = "<p>Unable to load posts</p>";
  }
}