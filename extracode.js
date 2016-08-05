    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('topContacts').style.display = 'none';
    }
    if(document.getElementsByTagName('h1').length === 0) {
      document.getElementById('header').style.display = 'none';
    }
    if(document.getElementsByClassName('work-entry').length === 0) {
      document.getElementById('workExperience').style.display = 'none';
    }
    if(document.getElementsByClassName('project-entry').length === 0) {
      document.getElementById('projects').style.display = 'none';
    }
    if(document.getElementsByClassName('education-entry').length === 0) {
      document.getElementById('education').style.display = 'none';
    }
    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('lets-connect').style.display = 'none';
    }
    if(document.getElementById('map') === null) {
      document.getElementById('mapDiv').style.display = 'none';
    }


var work = {
    "jobs": [
    {
        "employer": "Blue Web Solutions",
        "title": "UI Developer",
        "location": "Coimbatore",
        "Date": "2014-Present"
    },
    {
        "employer": "Blue Web Solutions",
        "title": "UI Developer",
        "location": "Coimbatore",
        "Date": "2014-Present"
    }
    ],
    "Part-time": "MSP",
    "intern": [
        {
            "nameof company": "company1",
            "title": "MVP"
        }
    ]
}


var projects = {
    "project": [
        {
            "Title":"Pro1",
            "Date worked": "Date",
            "desc": "kjasnklndsnflsandlka",
            "image": "http://placekitten.com/400/200"
        },
        {
            "Title":"Pro1",
            "Date worked": "Date",
            "desc": "kjasnklndsnflsandlka",
            "image": "http://placekitten.com/400/200"
        }
        ]
}

var bio = {
    "Name": " Mathan K A",
    "Role": "UI Developer",
    "WelcomeMess": "Welcome to my page",
    "contacts": {
        "Mobile": "8015571079",
        "Mail": "hello2mathanka.in",
        "FB": "mathanka",
        "Skype": "mathanka"
    },
    "skills": [
        {
            "name": "Technical"

        },
        {
             "name": "software"
        }
    ]
}

var education = {
    "college":
    {
        "Name": "SVS College",
        "Location":"Coimbatore",
        "Major":"B.E. Computer Science and Engineering",
        "Date": "2010 to 2014"
    },
    "schools": [
    {
        "Name": "Kikani Higher Secondary school",
        "Class": "HSC"
     },
     {
        "Name": "Kikani Higher Secondary school",
        "Class": "HSC"
     }
     ]
}

