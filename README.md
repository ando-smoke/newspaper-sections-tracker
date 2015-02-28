Newspaper Section Tracker
=========================

Manages a list of sections and their reporters for a mock newspaper
organization.

Installation
------------

Clone this project onto your local system. Open a terminal window
and change the directory by entering
`$ cd desktop/newspaper-section-tracker`. In order to run the app,
start up a local web server. In a Mac OSX environment, enter
`$ python -m SimpleHTTPServer`in the terminal
window and navigate to *localhost:8000* in a web browser. In a
Windows OS environment, download a program such as
[Mongoose](http://cesanta.com/mongoose.shtml), copy it to the project
folder, and double-click it to launch a server. Finally, open the page
in a browser. Of note, a HTML5-capable browser is required to utilize
form data validation elements within the app.

Usage
-----

Within the main app welcome html page, click on the 'View sections'
button. A summary of all currently stored newspaper sections will
be displayed in alphabetical order. Also on this page are forms for
adding a new section and filtering of displayed sections by
section name. Upon population of one or more sections, all reporters
working within these sections are displayed under each section name.
To add a new reporter, simply click on the desired section. A section
detail page will be displayed allowing for entry of one or more
reporters consisting of their name, birthdate and years of employment
within the newspaper section. Finally, on all html pages, reporter
detail data can be reviewed by clicking on any reporter name.

Known Bugs
----------

None as of 2015-02-27.

Author
-----

Andy Uppendahl

License
-------

MIT license
