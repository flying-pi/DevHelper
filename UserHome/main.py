from sanic import Sanic
from sanic.response import json
from sanic_jinja2 import SanicJinja2

app = Sanic()
app.static('/static', './static')

jinja = SanicJinja2(app,pkg_path='static/templates')


@app.route('/')
async def index(request):
    return jinja.render('index.html', request, greetings='Booooooo!')


@app.route('/login')
async def index(request):
    return jinja.render('login.html', request, greetings='Booooooo!')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7000, debug=True)
