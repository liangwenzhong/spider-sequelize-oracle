**spider-sequelize-oracle**
===================

Hey! I'm Bobolcaca, this project fork from cu8-sequelize-oracle. We just fixed several bug 

> **Note:**

  ######1.1.2
  - fix the bug of 1.1.1 about option "alter".

  ######1.1.1
  - provide a sequelize option named "alter" when defining sequlize (options.define.alter). When alter is set 'true', sequelize will auto add the new columns which were not exist in database but in code.

  ######1.1.0
  - fixed throwing error when run "npm install" and this package has been install.

  ######1.0.9
  - fixed upsert function, but we are NOT support upsert options now, maybe later we will fix it or not :) .

  ######1.0.8
  - fixed option "unique" when defining table model.

  ######1.0.7
  - fixed oracle's pool options do not work when creating pool. the attributes are the same as node-oracledb. You can read detail at "https://github.com/oracle/node-oracledb/blob/master/doc/api.md#-3311-createpool-parameters-and-attributes". The attributes are under #3.3.1.1

 - fixed:
  - After setting 'quoteIdentifiers' as false. Uppercase column name in oracle makes programer get results with uppercase column name. We fixed it into what you define it.
  - DataTypes.NUMBER OR DataTypes.DECIMAL CANNOT set precision and scale
  - make "auto_increment" just work when the "auto_increment" columns' value undefined.
  - provide a sequelize option named "maxRows" when defining sequelize. The priority of this option is maxRows (from query) > maxRows (from define) > default (99999)
  - fix TEXT(CLOB) warning ORA-01704 if you send the string literal over 4000
  

***_Change logs_***

 

**DataType: only this dataTypes are managed:**

    STRING (=VARCHAR2)
    CHAR
    DECIMAL (=NUMBER)
    BIGINT (=NUMBER(19,0))
    INTEGER
    FLOAT
    DOUBLE
    UUID (=CHAR 36)
    DATE (=TIMESTAMP WITH LOCAL TIME ZONE)
    DATEONLY (=DATETIME)
    BOOLEAN (=NUMBER(1))
    TEXT (=CLOB)
