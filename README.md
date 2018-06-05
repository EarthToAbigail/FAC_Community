# Founders and Coders Community App

## Genearal Idea

Create and application where FAC students and mentors can log in and keep in touch with their ongoing cohort
or other cohorts happening anywhere in the World. The idea is first to have all the FAQ for each campus in one place and also have an online platform where
it's possible to see what is going on in different cohorts. Students and mentors can create "moments" which are 
are like pages in their personal FAC diary. With the help of a calendar, people can create "moments" whithin their FAC journey and record notes,
personal impressions, media, etc. 

## Login and Profile

People can create an account by login with their Github account. A check should be made to make sure that who ever is signing up is a legitimate
student or mentor (have the API check if the user is part of the FAC repository?).

## Informative Purposes

Keep a record of essential FAQs for each campuses.

## Individual Profile

Each user has access to a personal editing platform which is meant to feel like a **diary**. What makes it special is that
users can create different pages that are related to specific moments in time. For example, someone could have a general experience moment
where pictures, notes, experiences throughout the course is recorded and then have various subpages to record a specific moment or event in
the course. For example, someone could choose to record 2 weeks of working with the same team, a special party, or any kind of key event meaningful for them.
Those **moments** can be edited "blog style" and are kept private unless someone chooses to share it. The user can input a timeline on the calendar
for the moments he/she chooses to create with a tag name. If he/she chooses to import a specific photo in the app, he/she can tag it with the right label
so that the picture gets added to right page of the diary making editing moments easy. Same could be done with other types of files 
(text files for notes) or text can be added and edited directly in the app.

## Community Sharing

There is a dedicated page/forum for people to share their "moments" if they choose to which could help for the global community to feel 
connected together. Users can also edit their personal moments to create a more suitable public version (so someone can have a set of public edits
as well as private ones. Each moment opens on a new tab with the community page giving only a sample of it. Users can react to moments by writing comments.

## Dynamic Calendar 

A calendar page filled in with the key timeline of the user's cohort comes already preloaded with information when the user sings up.
Then each user can edit it according to their needs and label timelines for their moments (beginning and end date, unique name which
helps for moment editing).

## Technnical Details

* Using OAuth for authentication through Github
* Using the Github API to populate the calendar.
* Use a database to hold user information, updates on status (ex: from student to mentor), moments and posts and comments on the community page
* Find appropriate technology for editing of moments, needs to be intuitive and pleasant to look at and work on.
 
**For the platform to function properly, it would need to be moderated (mainly for schedule changes and updates)**
