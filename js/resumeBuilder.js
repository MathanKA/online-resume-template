var bio = {
    "name": "Mathan K A",
    "role": "UI Developer",
    "contacts": {
        "mobile": "8015571079",
        "email": "hello@mathanka.in",
        "github": "mathanka",
        "twitter": "mathanka",
        // "location": "Coimbatore,Tamilnadu"
    },
    "welcomeMessage": "Web UI/UX Designer and Front End Developer Based in Dubai,UAE.Take a look at some of my works, and if you like them, feel free to contact me.Let’s create something WOW!",
    "skills": ["HTML5 & CSS3","Javascript","jQuery","Photoshop","Illustrator"],
    "biopic": "images/mathan.jpg",
};

var education = {
    "schools": [
    {
        "name": "SVS College of Engineering",
        "location": "Coimbatore",
        "degree": "Bachelor of Engineering",
        "majors": ["Computer Science"],
        "dates": "May 2010 - May 2014",
        "url": "http://www.svsce.edu.in/"
    },
    {
        "name": "Kikani Higher Sec. School",
        "location": "Coimbatore",
        "degree": "Senior Secondary",
        "majors": ["Computer Science","Maths","Physics"],
        "dates": "2008 - 2010",
        "url": ""
    },
    {
        "name": "St.Thomas Higher Sec. School",
        "location": "Erode",
        "degree": "High School",
        "majors": ["Science","Maths","biology","arts"],
        "dates": "2008",
        "url": ""
    }],

    "onlineCourses": [
    {
        "title": "Front End developer",
        "school": "Udacity",
        "date": "June,2016 - July 2016",
        "url": "https://profiles.udacity.com/?_ga=1.191526058.1657317119.1460480024"
    }]
};

var work = {
    "jobs": [
    {
        "employer": "Blue Web Solutions",
        "title": "UI Developer",
        "location": "Coimbatore",
        "dates": "2014 - 2016",
        "description": "To develop the required web pages for the above site, Monitoring and managing the website administration, Maintenance of database and web server, Html5 designs for emails and Leading the social media marketing team in the company.",
        "link": "http://bluewebsolutions.in/"
    },
    {
        "employer": "Red Solutions",
        "title": "UI Developer",
        "location": "Chennai",
        "dates": "2012 - 2014",
        "description": "To develop the required web pages for the above site, Monitoring and managing the website administration, Maintenance of database and web server, Html5 designs for emails and Leading the social media marketing team in the company.",
        "link": "http://bluewebsolutions.in/"
    }]
};

var projects = {
    "projects": [
    {
        "title": "Website Design",
        "dates": "Jan 2014 - feb 2015",
        "description": "I am one of the member in the development team. I have also worked on static pages on this website.",
        "images": ["images/projects/pro1.png", "images/projects/pro12.png"]
    },
    {
        "title": "Website Design",
        "dates": "Jan 2015 - feb 2015",
        "description": "I am one of the member in the development team. I have also worked on static pages on this website.",
        "images": ["images/projects/pro2.png", "images/projects/pro22.png"]
    }]
};


//Bio Functions //
bio.display = function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        //displaying
        $("#header").prepend(formattedName,formattedRole);
        $(".bio-entry").append(formattedPic, formattedMessage);
        //contact List//
        var formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation;
        for (var contact in bio.contacts){
            formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            formattedEmail  = HTMLemail.replace("%data%", bio.contacts.email);
            formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
            formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            // formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        }
        $("#topContacts, #footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
        // $("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);

        if (bio.skills.length > 0){
            $(".bio-entry").append(HTMLskillsStart);
                // for (var i=0; i < bio.skills.length; i++){
                //     var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                //     $("#skills").append(formattedSkills);
                // }
            // for (var skill in bio.skills){
            bio.skills.forEach(function(skill){
                // if (bio.skills.hasOwnProperty(skill)) {
                var formattedSkills = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkills);
            })
        }
};


//Work Function //
work.display = function(){
    $("#workExperience").append(HTMLworkStart);

    // for (var job in work.jobs){
    work.jobs.forEach(function(job){
        var formattedEmp = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedDate = HTMLworkDates.replace("%data%", job.dates);
        var formattedDesc = HTMLworkDescription.replace("%data%", job.description);
        var formatworkLoc = HTMLworkLocation.replace("%data%", job.location);
        var formatworkUrl = HTMLworkSiteUrl.replace("%data%", job.link);
        $(".work-entry").append(formattedEmp + formattedTitle);
        $(".work-entry").append(formattedDate);
        $(".work-entry").append(formatworkLoc);
        $(".work-entry").append(formattedDesc);
        $(".work-entry").append(formatworkUrl);

    })
};

//Projects Function //
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    // for (var project in projects.projects){
    projects.projects.forEach(function(project){
        var formprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formprojectDate = HTMLprojectDates.replace("%data%", project.dates);
        var formprojectDesc = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry").append(formprojectTitle);
        $(".project-entry").append(formprojectDate);
        $(".project-entry").append(formprojectDesc);
        // for (var image in projects.projects[project].images){
        for(var i=0; i < project.images.length; i++){
             var formprojectImage = HTMLprojectImage.replace("%data%", project.images[i]);
             $(".project-entry:last").append(formprojectImage);
         }
    })
};

// //Education Function //
education.display = function(){
    $("#education").append(HTMLschoolStart);
    // for (var school in education.schools){
    education.schools.forEach(function(school){
        var formatschoolName = HTMLschoolName.replace("%data%", school.name);
        var formatschooldeg = HTMLschoolDegree.replace("%data%", school.degree);
        var formatschoolmajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formatschooldates = HTMLschoolDates.replace("%data%", school.dates);
        var formatschoolLoc = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry").append(formatschoolName + formatschooldeg);
        $(".education-entry").append(formatschooldates);
        $(".education-entry").append(formatschoolmajor);
        $(".education-entry").append(formatschoolLoc);
    })
};
education.displayonlinecourse = function(){
    $("#education:last").append(HTMLonlineClasses);
    $("#education:last").append(HTMLschoolStart);
    // for (var onlineCourse in education.onlineCourses){
    for (var i=0; i < education.onlineCourses.length; i++){
        var formatonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formatonlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formatonlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
        var formatonlineurl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formatonlineTitle + formatonlineschool);
        $(".education-entry:last").append(formatonlinedates);
        $(".education-entry:last").append(formatonlineurl);
    }
};


//Google Map code//

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

function inName(name) {
    console.log(name);
    var newName = name;
    newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();
    return newName;
}

bio.display();
education.display();
work.display();
projects.display();
education.displayonlinecourse();
