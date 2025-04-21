# birthday_invite_app

For my first Software Development project, I decided to create a google calendar friendly birthday invitation application, so that users can manually add birthday events to the application, and then send personalized birthday event email invitations that gmail recognizes as calendar events. 

Here is the scope of the Software System Requirements Specifications:  

As an authenticated user service, the application should be able to allow users to manually add and save birthday events to the application, then send a personalized invitation via an event form with details like date, time, attendee email addresses, a from email address, a 500 character email body for personalization, and a subject line.

The events should be detected by gmail as an event to add to google calendar using schema.org’s SocialEvent schema. 

As a visitor or general user service, non-authenticated users should be able to view a static page with a navigation bar with components for logging in, viewing an about me and a contact us page.


Here is the scope of the System Requirements Specifications:

Frontend: React.js
Backend: Django + Django REST Framework
Database: SQLite3
Deployment: Docker, Theia IDE
