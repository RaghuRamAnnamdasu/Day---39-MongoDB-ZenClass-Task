// Question-01 : Find all the topics and tasks which are thought in the month of October
db.topicntask.find(
    {$or: 
        [
            { startDate: { $gte: "2021-10-01", $lte :"2021-10-31" } }, 
            { endDate: {$lte : "2021-10-31",  $gte: "2021-10-01"} } 
        ]
    }
).pretty();

// Question-02 : Find all the company drives which appeared between 15 oct-2021 and 31-oct-2021
db.companies.find(
    {"Date of Visit": {$gte: "2021-10-15", $lte: "2021-10-31"}}
).pretty();

// Question-03: Find all the company drives and students who are appeared for the placement.
db.student.aggregate( [
    {
       $lookup:
          {
             from: "companies",
             localField: "companiesAttended",
             foreignField: "CompanyId",
             as: "enrollee_info"
         }
    },
    {
        $match : 
         {
            "enrollee_info" : {$ne : []}
         }
    },
    {
        $project : {"rollNo" : 1,"Student Name": "$name" , "Companies Attended": "$enrollee_info.companyName", "_id":0}
    }
 ] ).pretty()

// Question-04: Find the number of problems solved by the user in codekata
db.student.find({},{"rollNo": 1, "name": 1, "CodeKatta Completion Percentage" : "$statastics.codeKattaCompletion", "_id" : 0})

// Question-05 : Find all the mentors with who has the mentee's count more than 15
db.student.aggregate([
    {
        $group : {
            "_id": "$mentorName","Count of Mentees" : {$sum : 1}
        }
    },
    {
        $match : {
            "Count of Mentees": {$gt : 15}
        }
    }
])

// Question-06 : Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
 db.student.find( 
    {
       "statastics.tasksCompletion": {$nin: [9, 10, 11, 12]}
    },
    {
        "name" : 1, "rollNo" : 1, "_id":0
    }
  ).pretty()
 