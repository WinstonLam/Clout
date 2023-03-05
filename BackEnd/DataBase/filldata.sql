Declare @Id int, @IdDB int
Declare @DB varchar(10), @USEDBquery varchar(20)
Declare @query varchar(max), @addQuery varchar(max), @insertDataQuery nvarchar(max)
SET @Id=0
SET @IdDB = 1

While @IdDB <= 1
BEGIN
    Set @DB = 'LINGO'
    SET @query = FORMATMESSAGE(N'CREATE DATABASE %s', @DB)
    SET @USEDBquery = FORMATMESSAGE('USE %s', @DB)
    -- Create Tables
    BEGIN TRY
        EXEC(@query)
        PRINT 'RUN QUERY FOR Adding Table '
        SET @addQuery = '
         CREATE Table words
            (
                    Id int identity primary key,
                    word nvarchar(50),
                    description nvarchar(50),
                    wordlistID int

            )
        CREATE Table wordlist
            (
                Id int identity primary key,
                Name nvarchar(50),
                description nvarchar(50),
                userID int
            )
        '
        SET @query = FORMATMESSAGE('%s %s', @USEDBquery, @addQuery)
        PRINT @query
        EXEC(@query)
        PRINT @DB + ' insert on ' + CAST(@Id as varchar(10))
    END TRY
    BEGIN CATCH
        PRINT 'ERROR on ' + @DB + ' : ' +  cast (ERROR_LINE() as varchar(10))
            + ' MSG:' + ERROR_MESSAGE()
    END CATCH

    -- INSERT DATA INTO TABLE
    SET @insertDataQuery = '
        Insert Into words values (''word - '' + CAST(@Id as nvarchar(10)),
        ''description - '' + CAST(@Id as nvarchar(10)) + '' test'',
        1)
        Insert Into wordlist values (''testList '' + CAST(@Id as nvarchar(10)),
        ''description of testList- '' + CAST(@Id as nvarchar(10)),
        1)
       '
    SET @insertDataQuery = FORMATMESSAGE('%s %s', @USEDBquery ,@insertDataQuery);
    PRINT @insertDataQuery
    While @Id <= 10
        Begin
            Begin TRY
                EXECUTE sp_executesql
                    @insertDataQuery,
                    N'@Id int',
                    @Id = @Id;

                SET @Id = @Id+1
            END TRY
            BEGIN CATCH
                PRINT 'ERROR on INSERT ' + @DB + ' : ' +  cast (ERROR_LINE() as varchar(10))
                    + ' MSG: ' + ERROR_MESSAGE()
                SET @Id = @Id+1
            END CATCH
        End
    SET @Id = 0
    SET @IdDB = @IdDB + 1

END

-- END
SELECT name FROM master.dbo.sysdatabases
SELECT TOP 10 * FROM MYDB10.dbo.tblAuthors
GO
