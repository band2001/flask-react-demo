## https://www.tutorialspoint.com/flask/flask_sqlite.htm

from flask import Flask, request
import sqlite3 as sql
from .CreateTable import Table

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello, World!"

@app.route("/create_table", methods=['POST', 'GET'])
def create_new_table():
    Table.create_table()
    return "Created table"

@app.route("/add_student", methods=['POST','GET'])
def add_student():
    data = request.json
    # print(data.get("name"))

    add_name = data.get("name")
    add_addr = data.get("addr")
    add_city = data.get("city")
    add_pin = data.get("pin")

    conn = sql.connect("database.db")
    cur = conn.cursor()
    cur.execute("INSERT INTO students VALUES(?,?,?,?)",[add_name,add_addr,add_city,add_pin])
    conn.commit()
    conn.close()

    return "Added Student"

@app.route("/view_students", methods=['POST', 'GET'])
def view_students():
    conn = sql.connect('database.db')
    # conn.row_factory = sql.Row

    cur = conn.cursor()
    cur.execute('SELECT * FROM students')

    rows = cur.fetchall()
    return rows
