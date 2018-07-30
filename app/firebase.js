var config = {
    apiKey: "AIzaSyBIcRO7v_GMREZTKY8DLiEKCrLGLImZJDI",
    authDomain: "havok-app.firebaseapp.com",
    databaseURL: "https://havok-app.firebaseio.com",
    projectId: "havok-app",
    storageBucket: "havok-app.appspot.com",
    messagingSenderId: "706756433273"
  };
  firebase.initializeApp(config);

  const auth = firebase.auth();

  $(document).ready(function(){
  $('.modal').modal();
});
