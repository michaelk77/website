import base64

import sqlalchemy
from flask import Flask, jsonify, render_template, request
from sqlalchemy import MetaData, Table, Integer, String, \
    Column, select, update, Boolean
from sqlalchemy.orm import sessionmaker
import jwt
from models import Item, User

app = Flask(__name__)
engine = sqlalchemy.create_engine('sqlite:///webmarkt.db')
metadata = MetaData()

secret_key = "secretkey"  # Dont use it


@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html",
                           title='Home')


@app.route("/api/profile", methods=["PUT"])
def put_profile():
    token = request.args.get("token")
    print(token)
    if not token:
        return jsonify({"error": "Token is required"}), 400

    # Здесь вы можете произвести поиск пользователя по токену в вашей базе данных.
    user = get_user_by_token(token)
    if not user:
        return jsonify({"error": "User not found"}), 404

    data = request.get_json()
    email = data.get("email")
    address = data.get("address")
    update_user_profile(token, email, address)

    return jsonify({"success": True}), 200


def update_user_profile(token: str, email: str, address: str):
    Session = sessionmaker(bind=engine)
    session = Session()
    session.query(User).filter_by(overinfo=token).update({'email': email, 'adress': address})
    session.commit()


@app.route("/api/profile", methods=["GET"])
def get_profile():
    token = request.args.get("token")
    print(token)
    if not token:
        return jsonify({"error": "Token is required"}), 400

    # Здесь вы можете произвести поиск пользователя по токену в вашей базе данных.
    user = get_user_by_token(token)
    if not user:
        return jsonify({"error": "User not found"}), 404

    # Возвращаем профиль пользователя в виде JSON.
    return jsonify({"email": user.email, "address": user.adress}), 200


def get_user_by_token(token: str):
    Session = sessionmaker(bind=engine)
    session = Session()
    user = session.query(User).filter_by(overinfo=token).first()
    print(user)
    return user


@app.route("/profile")
def profile():
    return render_template("profile.html")


@app.route('/market')
def test():
    Session = sessionmaker(bind=engine)
    session = Session()
    items = session.query(Item).all()
    dict_to_js = {}
    i = 0
    for item in items:
        dict_to_js[i] = [item.name, item.price, item.overinfo]
        i += 1
    session.commit()
    return render_template("market.html",
                           title='Market', products=dict_to_js, len=len(dict_to_js))


@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    # Check the user's login credentials
    check=valid_login(username, password)
    if check == True:
        token = jwt.encode({"username": username}, secret_key, algorithm="HS256")
        return jsonify({"token": token}), 200
    else:
        return jsonify({"error": "Password do not much"}), 400


def valid_login(username: str, password: str):
    # Your code to check the user's login credentials
    Session = sessionmaker(bind=engine)
    session = Session()
    user = session.query(User).filter_by(name=username).first()
    if user:
        if user.hashpassword == password:
            return True
    else:
        item = User(name=username, hashpassword=
            password, overinfo=jwt.encode({"username": username}, secret_key,
                                                     algorithm="HS256"))  # Not encryption. Look for Fernet
        session.add(item)
        session.commit()
        return True

    return False


if __name__ == '__main__':
    app.run(port=5555, debug=True)
