const _ = require('lodash');

module.exports = function (table_name, attributes, options) {
    var db = options;
    var addList = [];
    var oldList = [];
    return db.sequelize.query(`select A.COLUMN_NAME,A.DATA_TYPE  from user_tab_columns A where TABLE_NAME='${table_name}'`).then(res => {
        if (res[0].length) {
            _.each(res[0], item => {
                oldList.push(item.COLUMN_NAME.toLowerCase());
            })
            _.each(attributes, (item, key) => {
                if (!oldList.includes(key.toLowerCase())) {
                    addList.push({
                        key: key.toLowerCase(),
                        type: item.type,
                        allowNull: typeof (item.allowNull) == 'undefined' ? true : item.allowNull,
                        defaultValue: typeof (item.defaultValue) == 'undefined' ? undefined : item.defaultValue
                    })
                }
            })
            if (addList.length) {
                console.log(`【sequelize】table ${table_name} get new columns: ${_.map(addList, 'key').join(', ')} added right now`);
            }
            var addSql = '';
            if (addList.length) {
                _.each(addList, addItem => {
                    let typeName = addItem.type.constructor.name
                    if (typeName == 'DATE') {
                        addSql += `ADD ${addItem.key} TIMESTAMP(6) WITH LOCAL TIME ZONE ${addItem.defaultValue!=undefined?("DEFAULT '"+addItem.defaultValue+"'"):''} ${addItem.allowNull?'NULL':'NOT NULL'} `
                    } else if (typeName == 'INTEGER') {
                        addSql += `ADD ${addItem.key} NUMBER ${addItem.defaultValue!=undefined?("DEFAULT '"+addItem.defaultValue+"'"):''} ${addItem.allowNull?'NULL':'NOT NULL'} `
                    } else if (typeName == 'NUMBER') {
                        if (addItem.type.options && (addItem.type.options.precision || addItem.type.options.scale)) {
                            addSql += `ADD ${addItem.key} NUMBER(${addItem.type.options.precision||0},${addItem.type.options.scale||0}) ${addItem.defaultValue!=undefined?("DEFAULT '"+addItem.defaultValue+"'"):''} ${addItem.allowNull?'NULL':'NOT NULL'} `
                        }
                    } else if (typeName == 'STRING') {
                        if (addItem.type._length && addItem.type._length) {
                            addSql += `ADD ${addItem.key} VARCHAR2(${addItem.type._length}) ${addItem.defaultValue!=undefined?("DEFAULT '"+addItem.defaultValue+"'"):''} ${addItem.allowNull?'NULL':'NOT NULL'} `
                        }
                    } else if (typeName == 'TEXT') {
                        addSql += `ADD ${addItem.key} CLOB ${addItem.defaultValue!=undefined?("DEFAULT '"+addItem.defaultValue+"'"):''} ${addItem.allowNull?'NULL':'NOT NULL'} `
                    }
                })
                // console.log('=========');
                // console.log(`ALTER TABLE ${table_name} ${addSql}`);
                return db.sequelize.query(`ALTER TABLE ${table_name} ${addSql}`);
            }
        } else {
            return;
        }
    }).catch(err => {
        if (err.parent && err.parent.errorNum && (err.parent.errorNum == 1430 || err.parent.errorNum == 942)) {
            return;
        } else {
            throw new Error(err)
        }
    })
}