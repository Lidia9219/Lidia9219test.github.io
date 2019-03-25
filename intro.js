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
 
 function initMenu() {
    var links = document.querySelectorAll("#top-menu-bar a");
    console.info(links);
    for(var i = 0; i < links.length; i++) {
        links[i].onclick = clickOnMenuItem;
    }
 }

 function clickOnMenuItem () {
     console.warn('clicked on menu', this);
     hideAllPages();
     var pageId = this.getAttribute('data-page');
     console.warn({pageId});
     showPage(pageId);
    //  show this page (current page)
 }

 function hideAllPages() {
     var pages = document.querySelectorAll('.page');
     for(var i = 0; i < pages.length; i++) {
         pages[i].style.display = 'none';       
     }
 }
 initMenu();

 function showSkills() {
     //var allEndorsements = [8, 12, 19, 3];
     //var skills = ['html', 'css', 'js', 'nodejs'];
     var skills = [
         {name: 'js', endorsements: 20, endorsedBy: 'Andrei I'}, 
         {name: 'html', endorsements: 8}, 
         {name: 'css', endorsements: 12, endorsedBy: 'Vasile I'}, 
         {name: 'nodejs', endorsements:3}
     ];

     var htmlSkills = skills.map(function(skill) {
         var endorsedBy = skill.endorsedBy ? ' - ' + skill.endorsedBy : '';
         var endorsements = ` <span class= "endorsement">(${skill.endorsements}${endorsedBy})</span>`;
        return '<li>' + skill.name.toUpperCase() + endorsements + '</li>';
    });

    var ul = document.querySelector('#skills-page ul');
    ul.innerHTML = htmlSkills.join(' ');
 }

 hideAllPages();
 showPage('skills-page');

 showSkills();