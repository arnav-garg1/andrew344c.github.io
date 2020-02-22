function initMap() {
    var location = {
        lat: 37.494929,
        lng: -122.019418
    };
    var map = new google.maps.Map(
        document.getElementById('gun-map'), {
            zoom: 9,
            center: location
        });

    var marker = new google.maps.Marker({
        position: {
            lat: 37.3006,
            lng: -122.0046
        },
        map: map
            // icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'

    });
}

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCiz2IUpuVqPo7M45ayzsOucu7Ftzeughw",
    authDomain: "dvhacks-9ace0.firebaseapp.com",
    databaseURL: "https://dvhacks-9ace0.firebaseio.com",
    projectId: "dvhacks-9ace0",
    storageBucket: "dvhacks-9ace0.appspot.com",
    messagingSenderId: "403365043007",
    appId: "1:403365043007:web:8c0b55eb63ac47a4aa518a",
    measurementId: "G-K1K9WRSJ71"
};
// var firebase = require('firebase/database');
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// var database = firebase.database();
// var ref = database.ref('number');

var data = {
        number: 12
    }
    // ref.push(data);