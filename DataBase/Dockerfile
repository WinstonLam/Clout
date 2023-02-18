FROM djewey/docker-sql-lingo:initial
ENV ACCEPT_EULA=Y
ENV MSSQL_SA_PASSWORD='DevOps2023!'
ENV MSSQL_PID=Developer
ENV MSSQL_TCP_PORT=1433
WORKDIR /src
COPY filldata.sql ./filldata.sql
RUN (/opt/mssql/bin/sqlservr --accept-eula & ) | grep -q "Service Broker manager has started" &&  /opt/mssql-tools/bin/sqlcmd -S127.0.0.1 -Usa -PDevOps2023! -i filldata.sql
