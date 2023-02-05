import sqlalchemy
from flask import Flask, jsonify, render_template, request
from sqlalchemy import MetaData, Table, Integer, String, \
    Column, select, update, Boolean
from sqlalchemy.orm import sessionmaker

from models import Item

app = Flask(__name__)
engine = sqlalchemy.create_engine('sqlite:///webmarkt.db')
metadata = MetaData()


@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html",
                           title='Home')


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
    print(dict_to_js)
    session.commit()
    return render_template("market.html",
                           title='Market', products=dict_to_js, len=len(dict_to_js))


@app.route("/login", methods=["POST"])
def login():
    username = request.form["username"]
    password = request.form["password"]
    # Check the user's login credentials
    if valid_login(username, password):
        return {"success": True}
    else:
        return "Login failed"


def valid_login(username, password):
    # Your code to check the user's login credentials
    return True


if __name__ == '__main__':
    app.run(port=5555, debug=True)
