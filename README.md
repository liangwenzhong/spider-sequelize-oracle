**spider-sequelize-oracle**
===================

Hey! I'm Bobolcaca, this project fork from cu8-sequelize-oracle. We just fixed several bug 

> **Note:**

 - fixed:
  - After setting 'quoteIdentifiers' as false. Uppercase column name in oracle makes programer get results with uppercase column name. We fixed it into what you define it.
  - DataTypes.NUMBER OR DataTypes.DECIMAL CANNOT set precision and scale

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
