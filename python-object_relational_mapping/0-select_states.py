#!/usr/bin/python3
# Lists all states from the database hbtn_0e_0_usa.
import sys
import MySQLdb

if __name__ == "__main__":
    db = MySQLdb.connect(host="localhost", port=3306, user=argv[1], passwd=argv[2], db=argv[3])
    c = db.cursor()
    c.execute("SELECT * FROM `states` ORDER BY states.id ASC")
    [print(state) for state in c.fetchall()]
