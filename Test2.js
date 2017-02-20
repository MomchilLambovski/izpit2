function Page(title, text) {
    if (typeof title !== 'string' || typeof text !== 'string') {
        console.log("Tuka iskam string!!")
    } {
        this.title = title;
        this.text = text
    }
}

Page.prototype = {
    constructor: Page,

    addText: function (text) {
        this.text += " " + text;
    },

    removeText: function () {
        this.text = "";
    },

    printText: function () {
        console.log(this.title);
        console.log(this.text);
    },

    searchWord: function (word) {
        var positionOfWord = this.text.search(word);
        console.log("Dumata se namira na " + positionOfWord + " poziciq.")
    }
}



function SimpleNotepad(numberOfPages) {
    if (isNaN(numberOfPages) || typeof numberOfPages !== 'number') {
        console.log("Kakvi sa tiq danni we? Tuka iskam chislo!!");
    } else {
        this.pages = new Array(numberOfPages);
    }
}

SimpleNotepad.prototype = Object.create(Page.prototype, {
    constructor: {
        value: SimpleNotepad
    },

    addPage: {

        value: function (pageName) {
            var length = this.pages.length;
            if (this.pages[length - 1] === undefined) {
                this.pages.unshift(pageName);
                this.pages.pop();
            } else {
                //Ako e pulen masiva, obrushtam stranicite, za da se podredqt pravilno,
                //zashotot po toq nachin mi gi redi v obraten red
                this.pages.reverse();
            }
        }
    },

    addTextToPage: {
        value: function (indexOfPage, textToAdd) {
            this.pages.forEach(function (element) {
                if (this.pages.indexOf(this.pages[indexOfPage]) == this.pages.indexOf(element)) {
                    this.pages[indexOfPage].text += " " + textToAdd;
                }
            }, this);
        }
    },

    removeTextAndAdd: {

        value: function (indexOfPage, textToAdd) {
            this.pages[indexOfPage].text = "";
            this.pages.forEach(function (element) {
                if (this.pages.indexOf(this.pages[indexOfPage]) == this.pages.indexOf(element)) {
                    this.pages[indexOfPage].text += textToAdd;
                }
            }, this);
        }
    },

    deleteText: {

        value: function (indexOfPage) {
            this.pages[indexOfPage].text = "";
        }
    },

    printPages: {
        value: function () {
            this.pages.forEach(function (element) {
                console.log(element.title);
                console.log(element.text);
            }, this);
        }
    },

    searchWordPage: {
        value: function (word) {
            this.pages.forEach(function (element) {
                element.searchWord(word);
            }, this);
        }
    }
})

function SecureNotepad(numberOfPages, password) {
    SimpleNotepad.call(this, numberOfPages);
    this.password = password;
}

SecureNotepad.prototype = Object.create(SimpleNotepad.prototype, {
    constructor: SecureNotepad,

    addTextToPageSecure: {
        value: function (password, indexOfPage, textToAdd) {
            if (password == this.password) {
                this.addTextToPage(indexOfPage, textToAdd);
            }
        }
    },

    removeTextAndAddSecure: {
        value: function (password, indexOfPage, textToAdd) {
            if (password == this.password) {
                this.removeTextAndAdd(indexOfPage, textToAdd);
            }
        }
    },

    deleteTextSecure: {
        value: function (password, indexOfPage) {
            if (password == this.password) {
                this.deleteText(indexOfPage);
            }
        }
    },

    printPagesSecure: {
        value: function (password) {
            if (password == this.password) {
                this.printPages();
            }
        }
    }
})

function ElectronicDevice() {
    this.isStarted = false;
}

ElectronicDevice.prototype = {
    constructor: ElectronicDevice,

    start: function () {
        if (this.isStarted != true) {
            this.isStarted = true;
        }
    },
    stop: function () {
        if (this.isStarted != false) {
            this.isStarted = false;
        }
    }
}

function ElectronicSecureNotepad(numberOfPages, password) {
    ElectronicDevice.call(this);
    SecureNotepad.call(this, numberOfPages, password);
    // if (this.isStarted != true) {
    //     console.log("ElectronicDevice must be started first!!")
    // }
}

ElectronicSecureNotepad.prototype = Object.create(SecureNotepad.prototype, {
    constructor: {
        value: ElectronicSecureNotepad
    }
})





var firstPage = new Page("1", "baba ganush e salata s magdanoz");
var secondPage = new Page("2", "baba ganush e salata s magdanoz");
var thirdPage = new Page("3", "baba ganush e salata s magdanoz");
var fourthPage = new Page("4", "baba ganush e salata s magdanoz");
var belejnik = new SimpleNotepad(5);

firstPage.addText("qica, chushki");
firstPage.printText();
firstPage.removeText();
firstPage.printText();

belejnik.addPage(firstPage);
belejnik.removeTextAndAdd(0, "blablabla");
belejnik.addTextToPage(0, "Niki go dobavqm tuka");
belejnik.printPages();
// console.log(belejnik);



var skritBelej = new SecureNotepad (5, "papam");
skritBelej.addPage(firstPage);
skritBelej.addPage(secondPage);
skritBelej.addTextToPageSecure('papam', 0, "hello leleoeleoel");
skritBelej.pages[0].searchWord("hello");
skritBelej.searchWordPage ("hello");
skritBelej.removeTextAndAddSecure("papam", 1, "hello leleoeleoel");
skritBelej.printPages();

var elecDev = new ElectronicDevice(10);
var elecDev1234 = new ElectronicSecureNotepad(10, "gaga");
elecDev.start();
elecDev.stop();
console.log(elecDev1234);