# app-patho-catalogue

App for the D-Space PathologyCatalogue:

To run locally clone this repository and change the permissions of the data folder:

$sudo chmod -R 777 data/

after this just run:

docker-compose up -d --build
The app will spin up and you can Open your browser and reach the frontend at: 

http://localhost:4000

## IMPORTANT after this you have to do docker-compose restart

Login data is:

E-Mail: test@test.edu

PW: admin
-------------------------------------------------------------------------------------------------------

To test the app on the Bibbox go to:

http://silicolabv4.bibbox.org/applications

and click on DSpace and choose install choose a Name and Display name. After the istallation has finished goto
the Instances Tab and klick on the on off icon for the Dspace App with your chosen Display Name.

E-Mail: test@test.edu

PW: admin

---------------------------------------------------------------------------------------------------------

Notes: 

Custom angular files used ! Currently only available within this repository:

See ./images/src

