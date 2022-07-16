// Step-01 : Creating data base guviZenClass
use guviZenClass;

// Step -02 : Inserting student collection and its data to data base
 db.student.insertMany(
    [
        {
            "name" : "Raghu",
            "rollNo" : 1,
            "emailId" : "raghu@gmail.com",
            "phoneNum" : 9848572501,
            "statastics" : {
                "codeKattaCompletion" : "95%",
                "tasksCompletion" : [1,2,3,6,7,8,11,13]
            },
            "companiesAttended" : [1,2,7,8,3],
            "mentorName" : "Roopan",
            "absentDates" : ["2022-09-06"]
        },
        {
            "name" : "Avinash",
            "rollNo" : 2,
            "emailId" : "avinash@gmail.com",
            "phoneNum" : 98485725802,
            "statastics" : {
                "codeKattaCompletion" : "70%",
                "tasksCompletion" : [1,2,5,6,7,9,11]
            },
            "companiesAttended" : [1,2,7,8,10],
            "mentorName" : "Raghav Kumar",
            "absentDates" : ["2022-11-16"]
        },
        {
            "name" : "Ramesh",
            "rollNo" : 3,
            "emailId" : "ramesh@gmail.com",
            "phoneNum" : 98485725803,
            "statastics" : {
                "codeKattaCompletion" : "85%",
                "tasksCompletion" : [1,2,3,6,10,8,11,12]
            },
            "companiesAttended" : [1,2,7,8,9],
            "mentorName" : "Raghav Kumar",
            "absentDates" : []
        },
        {
            "name" : "Phani",
            "rollNo" : 4,
            "emailId" : "phani@gmail.com",
            "phoneNum" : 98485725804,
            "statastics" : {
                "codeKattaCompletion" : "95%",
                "tasksCompletion" : [1,2,3,6,7,5,11,13]
            },
            "companiesAttended" : [1,2,7,8,6],
            "mentorName" : "Raghav Kumar",
            "absentDates" : ["2022-07-25"]
        },
        {
            "name" : "Barath",
            "rollNo" : 5,
            "emailId" : "barath@gmail.com",
            "phoneNum" : 9848572505,
            "statastics" : {
                "codeKattaCompletion" : "100%",
                "tasksCompletion" : [1,2,3,6,8,11,13]
            },
            "companiesAttended" : [1,2,7,8,5],
            "mentorName" : "Raghav Kumar",
            "absentDates" : []
        },
        {
            "name" : "SaiTeja",
            "rollNo" : 6,
            "emailId" : "saiteja@gmail.com",
            "phoneNum" : 9848572506,
            "statastics" : {
                "codeKattaCompletion" : "95%",
                "tasksCompletion" : [1,2,6,7,8,11,13]
            },
            "companiesAttended" : [1,2,7,8,4],
            "mentorName" : "Raghav Kumar",
            "absentDates" : ["2022-12-02"]
        },
        {
            "name" : "kishore",
            "rollNo" : 7,
            "emailId" : "kishore@gmail.com",
            "phoneNum" : 9848572507,
            "statastics" : {
                "codeKattaCompletion" : "85%",
                "tasksCompletion" : [1,2,4,6,7,8,11,13]
            },
            "companiesAttended" : [1,2,7,8,3],
            "mentorName" : "Raghav Kumar",
            "absentDates" : ["2022-09-16"]
        },
        {
            "name" : "Akhil",
            "rollNo" : 8,
            "emailId" : "akhil@gmail.com",
            "phoneNum" : 9848572508,
            "statastics" : {
                "codeKattaCompletion" : "80%",
                "tasksCompletion" : [1,2,3,4,6,7,8,11,13]
            },
            "companiesAttended" : [1,2,7,8,10],
            "mentorName" : "Raghav Kumar",
            "absentDates" : []
        },
        {
            "name" : "Ravi",
            "rollNo" : 9,
            "emailId" : "ravi@gmail.com",
            "phoneNum" : 9848572509,
            "statastics" : {
                "codeKattaCompletion" : "70%",
                "tasksCompletion" : [1,2,3,4,5,7,8,9,10,11,12,13]
            },
            "companiesAttended" : [1,2,7,8,9],
            "mentorName" : "Raghav Kumar",
            "absentDates" : []
        },
        {
            "name" : "Kohli",
            "rollNo" : 10,
            "emailId" : "kohli@gmail.com",
            "phoneNum" : 9848572510,
            "statastics" : {
                "codeKattaCompletion" : "60%",
                "tasksCompletion" : [1,2,3,4,5,6,8,9,10,11,12,13]
            },
            "companiesAttended" : [1,2,7,8,6],
            "mentorName" : "Raghav Kumar",
            "absentDates" : ["2022-09-17"]
        },
        {
            "name" : "Sachin",
            "rollNo" : 11,
            "emailId" : "sachin@gmail.com",
            "phoneNum" : 9848572511,
            "statastics" : {
                "codeKattaCompletion" : "95%",
                "tasksCompletion" : [1,2,3,4,5,6,7,9,10,11,12,13]
            },
            "companiesAttended" : [1,2,7,8,5],
            "mentorName" : "Raghav Kumar",
            "absentDates" : []
        },
        {
            "name" : "Sehwag",
            "rollNo" : 12,
            "emailId" : "sehwag@gmail.com",
            "phoneNum" : 9848572512,
            "statastics" : {
                "codeKattaCompletion" : "95%",
                "tasksCompletion" : [1,2,3,4,5,6,7,8,10,11,12,13]
            },
            "companiesAttended" : [],
            "mentorName" : "Raghav Kumar",
            "absentDates" : ["2022-07-14"]
        },
        {
            "name" : "Yuvraj",
            "rollNo" : 13,
            "emailId" : "yuvraj@gmail.com",
            "phoneNum" : 9848572513,
            "statastics" : {
                "codeKattaCompletion" : "95%",
                "tasksCompletion" : [1,2,3,4,5,6,7,8,9,11,12,13]
            },
            "companiesAttended" : [1,2,7,8,3],
            "mentorName" : "Raghav Kumar",
            "absentDates" : []
        },
        {
            "name" : "Kaif",
            "rollNo" : 14,
            "emailId" : "kaif@gmail.com",
            "phoneNum" : 9848572514,
            "statastics" : {
                "codeKattaCompletion" : "70%",
                "tasksCompletion" : [1,2,3,4,5,6,7,8,9,10,12,13]
            },
            "companiesAttended" : [1,2,7,8,10],
            "mentorName" : "Raghav Kumar",
            "absentDates" : []
        },
        {
            "name" : "Rohit",
            "rollNo" : 15,
            "emailId" : "rohit@gmail.com",
            "phoneNum" : 9848572515,
            "statastics" : {
                "codeKattaCompletion" : "95%",
                "tasksCompletion" : [1,2,3,4,5,6,7,8,9,10,11,13]
            },
            "companiesAttended" : [1,2,7,8,10],
            "mentorName" : "Raghav Kumar",
            "absentDates" : []
        },
        {
            "name" : "Shikhar",
            "rollNo" : 16,
            "emailId" : "Shikhar@gmail.com",
            "phoneNum" : 9848572516,
            "statastics" : {
                "codeKattaCompletion" : "80%",
                "tasksCompletion" : [1,2,3,4,5,6,7,8,9,10,11,12]
            },
            "companiesAttended" : [1,2,7,8,10],
            "mentorName" : "Raghav Kumar",
            "absentDates" : ["2022-09-25"]
        },
        {
            "name" : "Rishabh",
            "rollNo" : 17,
            "emailId" : "rishabh@gmail.com",
            "phoneNum" : 9848572517,
            "statastics" : {
                "codeKattaCompletion" : "60%",
                "tasksCompletion" : [1,2,3,4,5,6,7,8,9,10,11,12,13]
            },
            "companiesAttended" : [1,2,7,8,9],
            "mentorName" : "Raghav Kumar",
            "absentDates" : []
        },
        {
            "name" : "Hardik",
            "rollNo" : 18,
            "emailId" : "hardik@gmail.com",
            "phoneNum" : 9848572518,
            "statastics" : {
                "codeKattaCompletion" : "95%",
                "tasksCompletion" : [2,3,4,5,6,7,8,9,10,11,12,13]
            },
            "companiesAttended" : [1,2,7,8,9],
            "mentorName" : "Roopan",
            "absentDates" : ["2022-11-03"]
        },
        {
            "name" : "Jadeja",
            "rollNo" : 19,
            "emailId" : "jaddu@gmail.com",
            "phoneNum" : 9848572519,
            "statastics" : {
                "codeKattaCompletion" : "95%",
                "tasksCompletion" : [3,4,5,6,7,8,9,10,11,12,13]
            },
            "companiesAttended" : [1,2,7,8,9],
            "mentorName" : "Roopan",
            "absentDates" : []
        },
        {
            "name" : "Shami",
            "rollNo" : 20,
            "emailId" : "shami@gmail.com",
            "phoneNum" : 9848572520,
            "statastics" : {
                "codeKattaCompletion" : "95%",
                "tasksCompletion" : [4,5,6,7,8,9,10,11,12,13]
            },
            "companiesAttended" : [1,2,7,8,6],
            "mentorName" : "Roopan",
            "absentDates" : []
        },
        {
            "name" : "Bhuvneshwar",
            "rollNo" : 21,
            "emailId" : "bhuvi@gmail.com",
            "phoneNum" : 9848572521,
            "statastics" : {
                "codeKattaCompletion" : "85%",
                "tasksCompletion" : [6,7,8,9,10,11,12,13]
            },
            "companiesAttended" : [1,2,7,8,6],
            "mentorName" : "Thirupathi",
            "absentDates" : ["2022-08-15"]
        },
        {
            "name" : "Jasprit Bumrah",
            "rollNo" : 22,
            "emailId" : "jbumrah@gmail.com",
            "phoneNum" : 9848572522,
            "statastics" : {
                "codeKattaCompletion" : "95%",
                "tasksCompletion" : [5,6,7,8,9,10,11,12,13]
            },
            "companiesAttended" : [],
            "mentorName" : "Thirupathi",
            "absentDates" : []
        },
        {
            "name" : "Ashwin",
            "rollNo" : 23,
            "emailId" : "ashwin@gmail.com",
            "phoneNum" : 9848572523,
            "statastics" : {
                "codeKattaCompletion" : "70%",
                "tasksCompletion" : [7,8,9,10,11,12,13]
            },
            "companiesAttended" : [1,2,7,8,5],
            "mentorName" : "Thirupathi",
            "absentDates" : []
        },
        {
            "name" : "Gavaskar",
            "rollNo" : 24,
            "emailId" : "gavaskar@gmail.com",
            "phoneNum" : 9848572524,
            "statastics" : {
                "codeKattaCompletion" : "100%",
                "tasksCompletion" : [1,2,3,4,5,6,7,8]
            },
            "companiesAttended" : [1,2,7,8,5],
            "mentorName" : "Thirupathi",
            "absentDates" : ["2021-10-16","2021-10-18"]
        },
        {
            "name" : "Bradman",
            "rollNo" : 25,
            "emailId" : "bradman@gmail.com",
            "phoneNum" : 9848572525,
            "statastics" : {
                "codeKattaCompletion" : "95%",
                "tasksCompletion" : [1,2,3,4,5,6,7,8,13]
            },
            "companiesAttended" : [1,2,7,8,5],
            "mentorName" : "Anish",
            "absentDates" : ["2021-10-19"]
        },
        {
            "name" : "Ponting",
            "rollNo" : 26,
            "emailId" : "ricky@gmail.com",
            "phoneNum" : 9848572526,
            "statastics" : {
                "codeKattaCompletion" : "90%",
                "tasksCompletion" : [5,6,7,8,9,10,11,13]
            },
            "companiesAttended" : [],
            "mentorName" : "Anish",
            "absentDates" : ["2021-10-17"]
        },
        {
            "name" : "Devillers",
            "rollNo" : 27,
            "emailId" : "devillers@gmail.com",
            "phoneNum" : 9848572527,
            "statastics" : {
                "codeKattaCompletion" : "80%",
                "tasksCompletion" : [1,2,3,4,5,6,7,8,9,10,13]
            },
            "companiesAttended" : [1,2,7,8,4],
            "mentorName" : "Anish",
            "absentDates" : ["2022-10-05"]
        },
        {
            "name" : "Surya kumar",
            "rollNo" : 28,
            "emailId" : "sky@gmail.com",
            "phoneNum" : 9848572528,
            "statastics" : {
                "codeKattaCompletion" : "65%",
                "tasksCompletion" : [1,2,7,8,9,10,11,12,13]
            },
            "companiesAttended" : [1,2,7,8,4],
            "mentorName" : "Anish",
            "absentDates" : []
        },
        {
            "name" : "Chahal",
            "rollNo" : 29,
            "emailId" : "yuzi@gmail.com",
            "phoneNum" : 9848572529,
            "statastics" : {
                "codeKattaCompletion" : "70%",
                "tasksCompletion" : [1,2,3,4,5,6,12,13]
            },
            "companiesAttended" : [1,2,7,8,3],
            "mentorName" : "Roopan",
            "absentDates" : ["2022-09-05"]
        },
        {
            "name" : "Kuldeep",
            "rollNo" : 30,
            "emailId" : "kuldeep@gmail.com",
            "phoneNum" : 9848572530,
            "statastics" : {
                "codeKattaCompletion" : "80%",
                "tasksCompletion" : [1,2,3,4,5,6,7,8,12,13]
            },
            "companiesAttended" : [1,2,7,8,3],
            "mentorName" : "Roopan",
            "absentDates" : []
        },
        {
            "name" : "Kumble",
            "rollNo" : 31,
            "emailId" : "kumble@gmail.com",
            "phoneNum" : 9848572531,
            "statastics" : {
                "codeKattaCompletion" : "60%",
                "tasksCompletion" : [1,2,5,7,11]
            },
            "companiesAttended" : [1,2,7,8,3],
            "mentorName" : "Roopan",
            "absentDates" : []
        }
    ]
);

// Step -03 : Inserting topicntask collection and its data to data base
db.topicntask.insertMany(
    [
        {
            "topicNo" : 1,
            "topicName" : "HTML",
            "startDate" : "2021-06-01",
            "endDate"   : "2021-07-02",
            "tasks" : [
                {
                    "taskNo" : 1,
                    "taskName" : "HTML - Basic page building task"
                },
                {
                    "taskNo" : 2,
                    "taskName" : "HTML - Tables & Layouts task"
                }
            ] 
        },
        {
            "topicNo" : 2,
            "topicName" : "CSS",
            "startDate" : "2021-07-02",
            "endDate"   : "2021-07-20",
            "tasks" : [
                {
                    "taskNo" : 3,
                    "taskName" : "HTML & CSS - Usage of Flex & Grid task"
                }
            ] 
        },
        {
            "topicNo" : 3,
            "topicName" : "JS",
            "startDate" : "2021-07-21",
            "endDate"   : "2021-09-10",
            "tasks" : [
                {
                    "taskNo" : 4,
                    "taskName" : "HTML & CSS - Functions & MRF task"
                },
                {
                    "taskNo" : 5,
                    "taskName" : "Promise & Async-Await task"
                }
            ]  
        },
        {
            "topicNo" : 4,
            "topicName" : "React",
            "startDate" : "2021-09-11",
            "endDate"   : "2021-10-01",
            "tasks" : [
                {
                    "taskNo" : 6,
                    "taskName" : "Component Building & Hooks task"
                },
                {
                    "taskNo" : 7,
                    "taskName" : "API call task"
                },
                {
                    "taskNo" : 8,
                    "taskName" : "Formik & Yup task"
                }
            ]
        },
        {
            "topicNo" : 5,
            "topicName" : "MongoDB",
            "startDate" : "2021-10-02",
            "endDate"   : "2021-10-16",
            "tasks" : [
                {
                    "taskNo" : 9,
                    "taskName" : "Zenclass DB model creation task"
                }
            ]
        },
        {
            "topicNo" : 6,
            "topicName" : "NodeJs",
            "startDate" : "2021-10-17",
            "endDate"   : "2021-11-09",
            "tasks" : [
                {
                    "taskNo" : 10,
                    "taskName" : "Express App buiding task"
                },
                {
                    "taskNo" : 11,
                    "taskName" : "API call task through POSTMAN task"
                },
                {
                    "taskNo" : 12,
                    "taskName" : "Interconnection with React App task"
                }
            ]
        },
        {
            "topicNo" : 7,
            "topicName" : "Data Structures",
            "startDate" : "2021-11-09",
            "endDate"   : "2021-11-25",
            "tasks" : [
                {
                    "taskNo" : 13,
                    "taskName" : "Data Structures Task"
                }
            ]
        }
    ]    
);

// Step -04 : Inserting companies collection and its data to data base
db.companies.insertMany(
    [
        {
            "CompanyId" : 1,
            "companyName" : "TCS",
            "Date of Visit" : "2021-09-25",
            "no of selects" : 4
        },
        {
            "CompanyId" : 2,
            "companyName" : "Infosys",
            "Date of Visit" : "2021-10-17",
            "no of selects" : 3
        },
        {
            "CompanyId" : 3,
            "companyName" : "Schlumberger",
            "Date of Visit" : "2021-10-28",
            "no of selects" : 2
        },
        {
            "CompanyId" : 4,
            "companyName" : "Amazon",
            "Date of Visit" : "2021-11-5",
            "no of selects" : 2
        },
        {
            "CompanyId" : 5,
            "companyName" : "Flipkart",
            "Date of Visit" : "2021-11-18",
            "no of selects" : 3
        },
        {
            "CompanyId" : 6,
            "companyName" : "MakeMyTrip",
            "Date of Visit" : "2021-11-25",
            "no of selects" : 2
        },
        {
            "CompanyId" : 7,
            "companyName" : "OrangeScape",
            "Date of Visit" : "2021-12-07",
            "no of selects" : 6
        },
        {
            "CompanyId" : 8,
            "companyName" : "Twitter",
            "Date of Visit" : "2021-12-14",
            "no of selects" : 4
        },
        {
            "CompanyId" : 9,
            "companyName" : "Postman",
            "Date of Visit" : "2021-12-20",
            "no of selects" : 3
        },
        {
            "CompanyId" : 10,
            "companyName" : "Facebook",
            "Date of Visit" : "2021-12-29",
            "no of selects" : 2
        }
    ]
);