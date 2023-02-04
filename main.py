from flask import Flask, jsonify, render_template, request

app = Flask(__name__)


@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html",
                           title='Home')


@app.route('/market')
def test():
    products = {0: ["iphone 14", "1000"], 1: ["macbook", "2000"]}
    return render_template("market.html",
                           title='Market',products=products,len=len(products))


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
