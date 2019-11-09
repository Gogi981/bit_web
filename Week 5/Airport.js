'use strict';

(function () {
    console.log("Hi");

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

        this.getData = function () {
            return this.name + " " + this.surname;
        }
    }

    function Seat(number, category) {
        this.number = (number || (Math.floor(91 * Math.random() + 10)));
        this.category = (category || "E");

        this.getData = function () {
            return this.number + ", " + this.category.toUpperCase();
        }
    };

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;

        this.getData = function () {
            return this.seat.getData() + ", " + this.person.getData();
        }
    };

    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.listPassengers = [];
        this.numberOfPassengers = 0;

        this.addPassenger = function (passenger) {
            this.listPassengers.push(passenger);
            this.numberOfPassengers++;
        };

        this.getData = function () {
            var result = this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", " + this.relation + "\n";
            for (var i = 0; i < this.listPassengers.length; i++) {
                result += "\t\t\t" + this.listPassengers[i].getData() + "\n";
            }
            return result;
        }
    };

    function Airport() {
        this.name = "Nikola Tesla";
        this.listFlights = [];
        this.numberOfPassengers = 0;

        this.addFlight = function (flight) {
            this.listFlights.push(flight);
            this.numberOfPassengers += flight.numberOfPassengers;
        };

        this.getData = function () {
            var result = "Airport: " + this.name + ", " + "total passengers: " + this.numberOfPassengers + "\n";
            for (var i = 0; i < this.listFlights.length; i++) {
                result += "\t\t" + this.listFlights[i].getData();
            }
            return result;
        }
    }

    function createFlight(relation, date) {
        return new Flight(relation, date);
    }

    function createPassenger(firstName, lastName, seatNumber, category) {
        var person = new Person(firstName, lastName);
        var seat = new Seat(seatNumber, category);
        return new Passenger(person, seat);
    };

    var airport = new Airport();

    var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
    var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

    var passenger1 = createPassenger("John", "Snow", 1, "b");
    var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
    var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
    var passenger4 = createPassenger("Tyrion", "Lannister");

    flight1.addPassenger(passenger1);

    flight1.addPassenger(passenger2);

    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);

    airport.addFlight(flight1);
    airport.addFlight(flight2);

    console.log(airport.getData());

})();