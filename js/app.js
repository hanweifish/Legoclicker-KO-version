
/* ======= Knockout Version ======= */

var initialLegos = [
    {
        clickCount : 0,
        name : 'Grand Carousel',
        imgSrc : 'img/Creator-Carousel-10196-2.jpg',
        imgAttribution : 'https://www.lego.com'
    },
    {
        clickCount : 0,
        name : 'Cargo Train',
        imgSrc : 'img/7939.png',
        imgAttribution : 'https://www.lego.com'
    },
    {
        clickCount : 0,
        name : "Santa's Workshop",
        imgSrc : 'img/LEGO-2014-Winter-Village-Santas-Workshop-10245-Set-e1408126000342.jpg',
        imgAttribution : 'https://www.lego.com'
    },
    {
        clickCount : 0,
        name : 'Grand Emporium',
        imgSrc : 'img/10211.png',
        imgAttribution : 'https://www.lego.com'
    },
    {
        clickCount : 0,
        name : 'MINI Cooper',
        imgSrc : 'img/q3i6vycvluxercnyv5sy.jpg',
        imgAttribution : 'https://www.lego.com'
    },
    {
        clickCount : 0,
        name : 'Town Hall',
        imgSrc : 'img/10224_Back_01.jpg',
        imgAttribution : 'https://www.lego.com'
    }
]

var Lego = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
}


var ViewModel = function() {
    var self = this;

    this.legoList = ko.observableArray([]);

    initialLegos.forEach(function(legoItem) {
        self.legoList.push(new Lego(legoItem));
    });

    this.currentLego = ko.observable(this.legoList()[0]);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.setCurrentLego = function(lego) {
        self.currentLego (lego);
    };
}

ko.applyBindings(new ViewModel());
