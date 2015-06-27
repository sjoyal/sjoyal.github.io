## GitHub

#### How can I fetch all Issues from the API:
 * Assigned to a specific user?

    `https://api.github.com/search/issues?q=assignee?access_token=USERTOKEN`

 * Created in a specific repo?

    `https://api.github.com/repos/kmattiko/kmattiko.github.io/issues?access_token=USERTOKEN`

 * Assigned to a specific milestone? ...to any milestone? ...to none?

    `https://api.github.com/repos/TheIronYard--Orlando/2015--SUMMER--FEE/milestones?access_token=USERTOKEN`

 * That are still open? ...closed? ...either?

    `https://api.github.com/repos/TheIronYard--Orlando/2015--SUMMER--FEE/milestones/17?state=open?access_token=USERTOKEN`
    `https://api.github.com/repos/TheIronYard--Orlando/2015--SUMMER--FEE/milestones/17?state=closed?access_token=USERTOKEN`
    `https://api.github.com/repos/TheIronYard--Orlando/2015--SUMMER--FEE/milestones/17?state=all?access_token=USERTOKEN`

#### What is the structure of an Issue resource?

  * Dictionary / object literal, nested array for label included within

#### What fields are always returned?

  * User dictionary
  * Label dictionary
  * Issue number and title
  * Assignee dictionary
  * Milestone dictionary
  * Description
  * Number of comments
  * State (open / closed)

#### What fields are optionally returned?

  * Comments

    `https://api.github.com/repos/TheIronYard--Orlando/2015--SUMMER--FEE/milestones/17/comments?access_token=USERTOKEN`

#### What are the types and sample contents of all returned fields?

    Strings (including URLs), number, object literal, array

#### How can I fetch all Milestones from the API? ...Labels?

    `https://api.github.com/repos/TheIronYard--Orlando/2015--SUMMER--FEE/milestones?access_token=USERTOKEN`
    `https://api.github.com/repos/TheIronYard--Orlando/2015--SUMMER--FEE/labels?access_token=USERTOKEN`

#### What is the structure of the Milestone and Label resources?

    * Milestones are an array of dictionaries including various keys, including:
      * `url`, `id`, `number`, `title`, `description`, `creator` (dictionary within dictionary), `state` (open/closed), `date info`
    * Labels are an array of dictionaries with the following keys: `url`, `name`, `color`

#### How would I fetch:
 * All the open Issues from a specific repo?

    `https://api.github.com/repos/TheIronYard--Orlando/2015--SUMMER--FEE/issues?state=open?acess_token=USERTOKEN`

 * With the label "Attendance"?

    `https://api.github.com/repos/TheIronYard--Orlando/2015--SUMMER--FEE/issues?state=open?labels=Attendance?access_token=USERTOKEN`

 * Sorted oldest first?

    `https://api.github.com/repos/TheIronYard--Orlando/2015--SUMMER--FEE/issues?state=open?labels=Attendance?sort=created?direction=asc?access_token=USERTOKEN`

 * With 100% task completion?

    * Additional research needed


### BEAST MODE
#### How would I:
 * Fetch Issues for an assigned Milestone...
 * Group them by Label...
 * And calculate percentage of total Issues?
