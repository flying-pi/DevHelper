from sanic import Sanic
from sanic_jinja2 import SanicJinja2
from umongo import MotorAsyncIOInstance
from sanic_mongodb_ext import MongoDbExtension
import os

app = Sanic(__name__)

app.config.update({
    "MONGODB_DATABASE": os.environ["MONGODB_APPLICATION_DATABASE"],
    "MONGODB_URI":
        f'mongodb://'
        f'{os.environ["MONGODB_APPLICATION_USER"]}'
        f':{os.environ["MONGODB_APPLICATION_PASS"]}'
        f'@{os.environ["MONGODB_HOST"]}:27017/{os.environ["MONGODB_APPLICATION_DATABASE"]}',
    "LAZY_UMONGO": MotorAsyncIOInstance(),
})
MongoDbExtension(app) # uMongo client is available as `app.mongodb` or `app.extensions['mongodb']`
umongo_instance = app.config["LAZY_UMONGO"]  # For a structured applications the lazy client very useful


jinja = SanicJinja2(app, pkg_path='static/templates')
app.jinja = jinja


app.static('/static', './static')


from routers import base_blueprint
app.blueprint(base_blueprint)