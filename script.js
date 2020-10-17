


function getValue () {

  var whatev = "v9NhEK-GdeNdPaKbfKZmE3LzoihGxzCZ7vesawNF6Wo"
  var query = document.getElementById('in').value;

  fetch('https://api.unsplash.com/search/photos/?client_id='+ whatev + '&query=' + query)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(data.results[0].urls.small);



      var result1 = data.results[0].urls.small
      var result2 = data.results[1].urls.small
      var result3 = data.results[2].urls.small
      var result4 = data.results[3].urls.small
      var result5 = data.results[4].urls.small
      var result6 = data.results[5].urls.small
      var result7 = data.results[6].urls.small
      var result8 = data.results[7].urls.small
      var result9 = data.results[8].urls.small

      document.getElementById("result1").src = result1
      document.getElementById("result2").src = result2
      document.getElementById("result3").src = result3
      document.getElementById("result4").src = result4
      document.getElementById("result5").src = result5
      document.getElementById("result6").src = result6
      document.getElementById("result7").src = result7
      document.getElementById("result8").src = result8
      document.getElementById("result9").src = result9
    })

    var show = document.getElementById("allpic");
    if (show.style.display === "none") {
      show.style.display = "block";
    } else {
      show.style.display = "none";
    }
}



