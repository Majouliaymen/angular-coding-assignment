First of all, thank you for showing interest to become a part of Adad. We wish you best of luck for the test. Please read the entire document carefully before you start writing code.

# Coding Assignment
We want you to create an Angular application that replies to the following notes. You should use:
- Angular v18
- [Primeng library v17](https://v17.primeng.org/installation) along with [Primeflex library](https://primeflex.org/installation) CSS utility library to make the pages look nice.


### API
You do not need to create any API. Using [json-server](https://www.npmjs.com/package/json-server) NPM package installed globally in your local environment with **db.json** provided file, API will be available on your machine by simple command `json-server --watch db.json`\
Make sure to not change the db.json file content.
- To get list employees, use GET http://localhost:3000/employees
- To get an employee's details, use GET http://localhost:3000/employees/{employeeId}
- To get list projects, use GET http://localhost:3000/projects

### List of Employees
- Page route should be `/employees` and it should be the default route.
- On this page show:
  - Employee name
  - Email
  - Gender
  - Age
  - Recrutement date
  - Position
  - Score of the employee.
- To show the age, you should create a pipe.
- To show the score, you should create **a custom component**: an employee score is a number out of 100. A score is displayed as a [rating](https://v17.primeng.org/rating) of its score out of 10 (in mode readonly).\
Example: If an employee has 76 as score then 7 out of 10 stars should be displayed as rating.
- Show the list in a [card](https://v17.primeng.org/card) format rather than a simple list. Card should be **a custom component** with input parameters.
- At the top of employees list area add an [input text](https://v17.primeng.org/inputtext) to filter by employee's name.

### Employees statistics area
- At the top of employees page display a statistic area (it should be **a custom component**). It should provide these informations:
  - How many employees do we have?
  - How many male employees do we have?
  - How many female employees do we have?
  - How many teams do we have? 
  - Who's the employee of the year? (the employee of the year is the employee that has the highest score)
  - Who's the last employee who was hired?
- Each information should be displayed in a special div of 3 [column grid](https://primeflex.org/gridsystem).

### Employee details
- A click on an employee card should display employee details in a dedicated page with route `/employees/{employeeId}` with the following related data:
  - Employee name
  - Email
  - Position
  - Team
  - Seniority in the company: for how many years an employee has worked for the company
  - List of projects that he/she occupies
- All these data should be displayed via the [card](https://v17.primeng.org/card) based custom component.

# Assessment Criteria
- Code quality of the Angular Code.
- Code quality of the HTML and CSS.
- Unit tests code coverage.
- Look and feel of the statistics area and pages.
