#Create MySQL Image for JSP Tutorial Application
FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD DevOps2023!
ADD filldata.sql /docker-entrypoint-initdb.d
EXPOSE 1433
