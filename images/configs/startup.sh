#!/bin/bash

bash /usr/local/tomcat/bin/startup.sh
/dspace/bin/dspace dsrun org.dspace.app.util.InitializeEntities -f /dspace/config/relationship-types.xml
tail -f logs/catalina.out