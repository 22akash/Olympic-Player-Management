# db_config.py

import mysql.connector

def get_db_connection():
    connection = mysql.connector.connect(
        host="localhost",
        user="root",      # Replace with your MySQL username
        password="430320",  # Replace with your MySQL password
        database="players_db"
    )
    return connection
