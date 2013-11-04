eamemes
=======

Deliverable and buzzword generator for Enterprise Architects

About
-----
eamemes is a framework for generating random phrases consisting of one or more adjectives and a noun from a central dictionary. This application uses random words from the Enterprise Architecture discipline and generates clever but meaningless buzzword-like phrases.

Technology
----------
eamemes was built using Node.js with the Express framework with NeDB. The application does not have any other external dependencies and should run on any platform supporting node.  

Installation
------------
1 Clone the repository using: git clone https://github.com/ajensenwaud/eamemes.git 
2 Enter the new directory: cd eamemes/
3 eamemes comes with a sample database, which is ready to go. If you want to populate your own database, delete the NeDB file eamemes.nedb and regenerate after editing the dictionary files in input/. Run the following scripts to generate a new database file: node load-adjectives.js && node load-nouns.js
4 Run node app.js to start the application on http://localhost:3000/

