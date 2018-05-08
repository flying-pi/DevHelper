from sanic import Sanic
from sanic_jinja2 import SanicJinja2
from routers import base_blueprint

app = Sanic(__name__)
app.static('/static', './static')
app.blueprint(base_blueprint)


jinja = SanicJinja2(app, pkg_path='static/templates')
app.jinja = jinja

if __name__ == '__main__':
    # TODO use configuration
    app.run(host='0.0.0.0', port=7000, debug=True)
