from flask import Flask, jsonify, render_template

app = Flask(__name__)


@app.route('/')
@app.route('/index')
def index():
    user = {'nickname': 'Михаил'}  # выдуманный пользователь
    return render_template("index.html",
                           title='Home',
                           user=user)


if __name__ == '__main__':
    app.run(port=5555)
