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

# DSpace BIBBOX application

This container can be installed as [BIBBOX APP](http://silicolabv4.bibbox.org/applications "BIBBOX App Store") or standalone

* initial E-Mail/password: **test@test.edu / admin**
* after the docker installation goto http://silicolabv4.bibbox.org/instances

## Standalone Installation 

To install the app locally execute the commands:

`git clone https://github.com/bibbox/app-dspace`

`cd app-dspace`

`mkdir data`

`sudo chmod -R 777 data/`

`docker-compose up -d --build`

## IMPORTANT after this you have to do docker-compose restart

After the Installation open "http://localhost:4000" in your browser

The dafault port of the Dspace Angular container is 4000

If necessary change the ports in the environment file .env and the volume mounts in `docker-compose.yml`.

## Install within BIBBOX

You can use the [BIBBOX APP Store](http://bibbox.readthedocs.io/en/latest/admin-documentation/ "BIBBOX App Store") to install a lot of software tools. 

## Docker Images Used
  * [dspace/dspace:dspace-7_x-test](https://hub.docker.com/r/dspace/dspace) (Rest API; this container is not listed in this repository but is pullable)
  * [dspace/dspace-angular](https://hub.docker.com/r/dspace/dspace-angular) (Frontend; this container can be pulled but is currently being created locally when running docker-compose up, since some custom angular code is used)
  * [dspace/dspace-postgres-pgcrypto](https://hub.docker.com/r/dspace/dspace-postgres-pgcrypto) (Database)
  * [dspace/dspace-solr](https://hub.docker.com/r/dspace/dspace-solr) (Apache Solr; Search engine and indexing)

## Install Environment Variables
  None
  
  The default values for the standalone installation are:
    
    No settings required
  
## Mounted Volumes
   ### Dspace Rest API:
   * _./data/assetstore_ will be mounted to _/dspace/assetstore_
   * _./images/ROOT_ will be mounted to _/usr/local/tomcat/webapps/ROOT_
   * _./images/configs/local.cfg.template_ will be mounted to _/dspace/config/local.cfg.template_
   * _./images/configs/sed.sh_ will be mounted to _/dspace/config/sed.sh_
   ### Dspace Solr ###
   * _./images/configs/solr/authority_  will be mounted to /opt/solr/server/solr/configsets/authority
   * _./images/configs/solr/oai_ will be mounted to  /opt/solr/server/solr/configsets/oai
   * _./images/configs/solr/search_ will be mounted to /opt/solr/server/solr/configsets/search
   * _./images/configs/solr/statistics_ will be mounted to _/opt/solr/server/solr/configsets/statistics_
   * _./data/solr_data_ will be mounted to _/var/solr/data_
   ### Dspace Database ###
   * _./data/pgdata_ will be mounted to _/pgdata_
  
