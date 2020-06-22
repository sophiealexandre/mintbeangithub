
function getValue() {
    // Select input
    var input = document.getElementById("in").value;

    // Retrieve information in API
    fetch('https://api.github.com/users/'+input)
              .then(response => response.json())
              .then(data => {

                var login = data.login;
                if (login == null) {
                  var login = "Nobody";
                } else {
                  var login = data.login;
                }

                var name = data.name;
                if (name == null) {
                  var name = "a top secrey name :)";
                } else {
                  var name = data.name;
                }

                var company = data.company;
                if (company == null) {
                  var company = "a top secrey company :)";
                } else {
                  var company = data.company;
                }

                var followers = data.followers;
                if (followers == null) {
                  var followers = "zero";
                } else {
                  var followers = data.followers;
                }

                var following = data.following;
                if (following == null) {
                  var following = "zero";
                } else {
                  var following = data.following;
                }

                var avatar = data.avatar_url;
                if (avatar == null) {
                  var avatar = "http://sophiealexandre.eu/imagesgithub/mojojojo.png";
                } else {
                  var avatar = data.avatar_url;
                }


                txt1 = "Meet " + login + " !" ;
                document.getElementById("meet1").innerHTML = txt1;

                txt2 ="Meet " + login + " who's real name, believe it or not, is " + name  + " and spends most of one's time working for " + company + ". " + login +  "'s fanbase is composed of " + followers + " followers." +  " As any serious github user, " + login + "  follows " + following + " github users.";
                document.getElementById("meet2").innerHTML = txt2;

                document.getElementById("myImg").src = avatar;

                var x = document.getElementById("cat");
                  if (x.style.display === "none") {
                    x.style.display = "block";
                  } else {
                    x.style.display = "none";
                  }
                var y = document.getElementById("who");
                  if (y.style.display === "none") {
                    y.style.display = "block";
                  } else {
                    y.style.display = "none";
                  }

                var z = document.getElementById("hide");
                  if (z.style.display === "none") {
                    z.style.display = "block";
                  } else {
                    z.style.display = "none";
                  }

                  var l = document.getElementById("hide2");
                  if (l.style.display === "none") {
                    l.style.display = "block";
                  } else {
                    l.style.display = "none";
                  }





                });
}



