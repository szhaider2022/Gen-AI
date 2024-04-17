/*
13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
var fav_mode_transport = ['Bike', 'Car', 'Bus', 'Train'];
var fav_transport_name = ['Honda', 'Toyota', 'Hino', 'Tezgam'];
for (var a = 0; a < fav_mode_transport.length; a++) {
    //for (var b=0;b<fav_transport_name.length;b++) {
    console.log("I would like to own a ".concat(fav_transport_name[a], " ").concat(fav_mode_transport[a]));
}
