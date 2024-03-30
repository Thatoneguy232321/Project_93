var firebaseConfig = {
      apiKey: "AIzaSyAlMFYZcnyVTblwzznPpMDmPRKRBZfPrNI",
      authDomain: "kwitter-7edab.firebaseapp.com",
      databaseURL: "https://kwitter-7edab-default-rtdb.firebaseio.com",
      projectId: "kwitter-7edab",
      storageBucket: "kwitter-7edab.appspot.com",
      messagingSenderId: "931685798264",
      appId: "1:931685798264:web:2aa40fdf0473a2b249788d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

        document.getElementById("msg").value = "";
      }
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
