**spider-sequelize-oracle**
===================

Hey! I'm Bobolcaca, this project fork from cu8-sequelize-oracle. We just fixed several bug 

> **Note:**

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
