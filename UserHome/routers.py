import views
from sanic import Blueprint

base_blueprint = Blueprint('base')

base_blueprint.add_route(views.index, '/mainWrapper')
base_blueprint.add_route(views.login, '/login')
base_blueprint.add_route(views.registration, '/registration', methods=['POST'])
base_blueprint.add_route(views.home, '/home')
base_blueprint.add_route(views.home, '/')