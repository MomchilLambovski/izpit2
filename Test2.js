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
        this.text += text;
    },

    removeText: function () {
        this.text = "";
    },

    printText: function () {
        console.log(this.title);
        console.log(this.text);
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

    addTexToPage: {
        value: function (indexOfPage, textToAdd){
            this.pages.forEach(function(element) {
                if (this.pages.indexOf(this.pages[indexOfPage]) == this.pages.indexOf(element)) {
                    this.pages[indexOfPage].text += " " + textToAdd;
                }
            }, this);
        }
    },

    removeTextAndAdd: {

        value: function (indexOfPage, textToAdd){
            this.pages[indexOfPage].text = "";
            this.pages.forEach(function(element) {
                if (this.pages.indexOf(this.pages[indexOfPage]) == this.pages.indexOf(element)) {
                    this.pages[indexOfPage].text += " " + textToAdd;
                }
            }, this);
        }
    }, 

    deleteText: {

        value: function (indexOfPage){
            this.pages[indexOfPage].text = "";
        }
    },

    printPage: {
        value: function (indexOfPage){
            console.log()
        }
    }
})

var firstPage = new Page("baba ganush", "baba ganush e salata s magdanoz");
var secondPage = new Page("2", "baba ganush e salata s magdanoz");
var thirdPage = new Page("3", "baba ganush e salata s magdanoz");
var fourthPage = new Page("4", "baba ganush e salata s magdanoz");
var belejnik = new SimpleNotepad(5);

belejnik.addPage(firstPage);
belejnik.addPage(secondPage);
belejnik.addPage(thirdPage);
belejnik.addPage(fourthPage);
belejnik.addPage(fourthPage);
belejnik.addPage(fourthPage);

belejnik.deleteText(0);


console.log(belejnik);