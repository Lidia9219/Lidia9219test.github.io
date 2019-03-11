function getWelcomeMsg() {
    console.log();
    return "Wellcome to my site";
}

function getColor() {
    var date = new Date();
    console.log(date.getMinutes());
    if (date.getMinutes() > 19) {
        return "green"
    }
    return "green";
}


function hideHomePage() {
    document.getElementById('home-page').style.display = 'none';

}
function showSkillsPage() {
    document.getElementById('Skills-page').style.display = 'block';
}
function clickOnSkills() {
    hideHomePage();
    showSkillsPage();


}

function clickOnSkills() {
    hideHomePage();
    showSkillsPage();
}

var wellcome = getWelcomeMsg();
console.info(wellcome);

var summaryElement = document.getElementById("summary");
console.info("summaryElement", summaryElement);
var color = getColor();
summaryElement.style.color = color;





function hidePage(page) {
    document.getElementById(page).style.display = 'none';
 }
 function showPage(page) {
    document.getElementById(page).style.display = 'block';
 }
 