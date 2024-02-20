import sqlite3

class Table:    
    def __init__():
        return
    
    def create_table():

        conn = sqlite3.connect("database.db")
        print("Opened database successfully")

        conn.execute('CREATE TABLE students (name TEXT, addr TEXT, city TEXT, pin TEXT)')
        print("Table created successfully")

        conn.close()