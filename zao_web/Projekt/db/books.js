/* jshint node: true */

var TAFFY = require('taffy');

var books = TAFFY([
    {"title":  "Złota księga bajek",
     "author": "Opracowanie zbiorowe",
     "genre":  "bajki"
    },
    {"title":  "Kopciuszek",
     "author": "Januszewska Hanna",
     "genre":"bajki"},
    {"title":  "Cuda Polski. Zamki i pałace",
     "author": "Opracowanie zbiorowe",
     "genre":"albumy"},
    {"title":  "Język C++. Kompendium wiedzy",
     "author": "Stroustrup Bjarne",
     "genre":"informatyka"},
    {"title":  "Node.js, MongoDB, AngularJS. Kompendium wiedzy",
     "author": "Dayley Brad",
     "genre":"informatyka"},
    {"title":  "Elementy grafiki komputerowej",
     "author": "Michał Jankowski",
     "genre":"informatyka"},
    {"title":  "AngularJS. Profesjonalne techniki",
     "author": "Freeman Adam",
     "genre":"informatyka"},
    {"title":  "Laravel. Tworzenie aplikacji. Receptury",
     "author": "Matula Terry",
     "genre":"informatyka"},
    {"title":  "HaemelOpenGL SuperBible: Comprehensive Tutorial and Reference (6th Edition) ",
     "author": "Graham Sellers, Richard S. Wright, Jr., Nicholas Haemel",
     "genre":"informatyka"},
    {"title":  "Prawo podatkowe. Przepisy 2015",
     "author": "Prus Anna",
     "genre":"prawo"},
    {"title":  "Zbiór cywilny 2015",
     "author": "Opracowanie zbiorowe",
     "genre":"prawo"},
    {"title":  "Zbiór karny 2015",
     "author": "Opracowanie zbiorowe",
     "genre":"prawo"},
    {"title":  "Potęga podświadomości",
     "author": "Murphy Joseph",
     "genre":"psychologia"},
    {"title":  "Test Marshmallow",
     "author": "Mischel Walter",
     "genre":"psychologia"},
    {"title":  "Kobiety, które kochają za bardzo",
     "author": "Norwood Robin",
     "genre":"psychologia"},
    {"title":  "Warszawa lata 60",
     "author": "Opracowanie zbiorowe",
     "genre":"sztuka"},
    {"title":  "Odczuwanie architektury",
     "author": "Rassmusen Steen Eiler",
     "genre":"sztuka"},
    {"title":  "Najpiękniejsze mosty świata",
     "author": "Irteński Tadeusz",
     "genre":"albumy"},
    {"title":  "Adobe Photoshop CS6 onDemand",
     "author": "Steve Johnson",
     "genre":"Guide Books"},
    {"title":  "Sony Vegas Pro 11 - Beginner's Guide",
     "author": "Duncan Wood",
     "genre":"Guide Books"},
    {"title":  "C# Game Programming For Serious Game Creation",
     "author": "Daniel Schuller",
     "genre":"Guide Books"},
    {"title":  "This book loves You",
     "author": "PewDiePie",
     "genre":"Teen & Young Adult Internet Books"},
    {"title":  "Cyberbullying (Introducing Issues with Opposing Viewpoints)",
     "author": "Lauri S. Friedman",
     "genre":"Teen & Young Adult Internet Books"},
    {"title":  "Smarter Faster Better: The Secrets of Being Productive in Life and Business",
     "author": "Charles Duhigg",
     "genre":"Business & Money"}
]);

module.exports = books;

