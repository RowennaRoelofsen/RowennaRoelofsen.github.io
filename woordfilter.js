/*Woordfilter script*/
var bang = ['ongemakkelijk', 'schaamte', 'schamen', 'beschamend', 'schaamde', 'geschaamd', 'nerveus', 'doodnerveus', 'onzeker', 'onzelfverzekerd', 'niet zelfverzekerd', 'afgewezen', 'afwijzing', 'afwijzend', 'afwijzen', 'angst', 'angstig', 'bang', 'bangig', 'kwetsbaar', 'machteloos', 'gekwetst', 'kwetsend', 'kwetste', 'kwetsbaar'];

var slecht = ['lelijk', 'oerlelijk', 'stom', 'dik', 'vreselijk', 'rotleven', 'walging', 'walgen', 'walg', 'niet knap', 'niet lief', 'niet mooi', 'slecht', 'naar', 'zuur', 'kut', 'klote', 'verdrietig', 'verdriet', 'ongelukkig', 'boos', 'rot', 'niet prettig', 'verschrikkelijk', 'afschuwwekkend', 'vervelend', 'belachelijk', 'gefrustreerd', 'frustrerend', 'frustreer', 'ongelukkig', 'niet leuk'];


var ontmoedigd = ['nooit meer heen', 'nooit meer doen', 'niet meer heen', 'niet meer doen', 'nooit weer', 'niet weer', 'opgegeven', 'opgeven', 'geef het op', 'gefaald', 'falen', 'faal', 'radeloos', 'ontmoedigd', 'geen vooruitgang', 'geen voldoening', 'niet voldoenend', 'niet tevreden', 'radeloos', 'geen lef', 'geen moed', 'geen steun', 'verlies', 'verloren', 'pessimistisch', 'niet optimistisch', 'teleurgesteld', 'teleurstellend', 'stelde teleur'];

var exception = ['maar', 'echter', 'desondanks']
var modal = document.getElementById('myModal');
var submit = document.getElementById('submit');
var span = document.getElementsByClassName("close")[0];
var overlay = document.getElementById("overlay");
var aanpasButton = document.getElementById("berichtAanpassen");
var plaatsenButton = document.getElementById("berichtPlaatsen");

submit.addEventListener("click", checkEmpty);

// When the button is clicked check if the text field is empty or not. If empty, show a modal which reminds user to write a message first, otherwise run the function correct
function checkEmpty ( ) {
    var text = document.getElementById('text').value;
    var empty = true;

    if (text.length !== 0) {
        empty = false;
    }

    if (empty===true) {
        modal.style.display = "block";
        overlay.style.display = "block";
        document.getElementById("span-text").innerHTML = " Je bent vergeten een bericht in te voeren!"
    }

    else {
        correct();
    }
};


// check if a word is used from the variables bang, slecht & ontmoedigd. If so show modal with the correct text, or else go to the next page
function correct ( ) {
    var text = document.getElementById('text').value;
    var textLower = text.toLowerCase();
    var found = false;

    for (var x=0;x<bang.length;x++) {
        if (textLower.search(bang[x]) !== -1) {
            found = true;
             document.getElementById("span-text").innerHTML =  (bang[x]) + " bericht voor als iemand zich bang voelt "
        }
    }

    for (var x=0;x<slecht.length;x++) {
        if (textLower.search(slecht[x]) !== -1) {
            found = true;
            document.getElementById("span-text").innerHTML =  (slecht[x]) + " bericht voor als iemand zich slecht voelt"
        }
    }

    for (var x=0;x<ontmoedigd.length;x++) {
        if (textLower.search(ontmoedigd[x]) !== -1) {
            found = true;
            document.getElementById("span-text").innerHTML =  (ontmoedigd[x]) + " bericht voor als iemand zich ontmoedigd voelt "
        }
    }

    for (var x=0;x<exception.length;x++) {
        if (textLower.search(exception[x]) !== -1) {
            modal.style.display = "none";
            overlay.style.display = "none";
            window.location.href = "risico.html";
        }
    }

    if (found===true) {
            modal.style.display = "block";
            overlay.style.display = "block";
            aanpasButton.style.display = "block";
            plaatsenButton.style.display = "block";
    }

    else {
        window.location.href = "risico.html";
    }
};


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none";
};


// When the user clicks on the aanpas button close the modal, if he clicks on the plaatsen button go to the risico page.
aanpasButton.onclick = function () {
    modal.style.display = "none";
    overlay.style.display = "none";
}

plaatsenButton.onclick = function () {
    window.location.href = "risico.html";
}






/*
BRONNEN
- Modal: http://www.w3schools.com/howto/howto_css_modals.asp
Word restrict: http://stackoverflow.com/questions/26126076/how-to-restrict-certain-words-in-text-field-using-javascript
- var found idea: Dave Bitter
*/
