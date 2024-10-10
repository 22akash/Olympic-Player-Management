from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
from db_config import get_db_connection

app = Flask(__name__)
# CORS(app)
# app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])


#app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:430320@localhost/players_db'

# Create a player (POST)
@app.route('/api/players', methods=['POST'])
def create_player():
    data = request.get_json()
    print(data)
    id = data['id']
    country = data['country']
    gender = data['gender']
    sport = data['sport']
    name = data['name']
    print(id,country,gender,sport,name)

    db = get_db_connection()
    cursor = db.cursor()
    query = "INSERT INTO Players (id,country, gender, sport, name) VALUES (%s, %s, %s, %s, %s)"
    cursor.execute(query, (id, country, gender, sport, name))
    db.commit()
    cursor.close()
    db.close()

    return jsonify({"message": "Player created successfully!"}), 201


# Read all players (GET)
@app.route('/api/players', methods=['GET'])
def get_players():
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM Players")
    rows = cursor.fetchall()
    cursor.close()
    db.close()

    players = []
    for row in rows:
        players.append({
            "id": row[0],
            "country": row[1],
            "gender": row[2],
            "sport": row[3],
            "name":row[4]
        })

    return jsonify(players), 200

# Update a player (PUT)
@app.route('/api/players/<int:id>', methods=['PUT'])
def update_player(id):
    data = request.get_json()
    country = data['country']
    gender = data['gender']
    sport = data['sport']
    name = data['name']

    db = get_db_connection()
    cursor = db.cursor()
    query = "UPDATE Players SET country=%s, gender=%s, sport=%s, name=%s WHERE Id=%s"
    cursor.execute(query, (country, gender, sport, name, id))
    db.commit()
    cursor.close()
    db.close()

    return jsonify({"message": "Player updated successfully!"}), 200

# Delete a player (DELETE)
# @app.route('/api/players/<int:id>', methods=['DELETE'])
# def delete_player(id):
#     db = get_db_connection()
#     cursor = db.cursor()
#     query = "DELETE FROM Players WHERE Id=%s"
#     cursor.execute(query, (id,))
#     db.commit()
#     cursor.close()
#     db.close()
#
#     return jsonify({"message": "Player deleted successfully!"}), 200

@app.route('/api/players/<int:id>', methods=['GET'])
def get_player(id):
    db = get_db_connection()
    cursor = db.cursor()

    # Fetch player from the database
    query = "SELECT * FROM Players WHERE Id = %s"
    cursor.execute(query, (id,))
    player = cursor.fetchone()

    cursor.close()
    db.close()

    if player:
        return jsonify({
            'id': player[0],        # Assuming the first column is Id
            'country': player[1],   # Assuming the second column is Country
            'gender': player[2],    # Assuming the third column is Gender
            'sport': player[3],     # Assuming the fourth column is Sport
            'name': player[4]       # Assuming the fifth column is Name
        }), 200
    else:
        return jsonify({"error": "Player not found."}), 404


@app.route('/api/players/<int:id>', methods=['DELETE'])
def delete_player(id):
    db = get_db_connection()
    cursor = db.cursor()

    # Delete player from the database
    query = "DELETE FROM Players WHERE Id = %s"
    cursor.execute(query, (id,))
    db.commit()

    cursor.close()
    db.close()

    return jsonify({"message": "Player deleted successfully!"}), 200

if __name__ == '__main__':
    app.run(port=5000, debug=True)
