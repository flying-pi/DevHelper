from sanic import response

from models import User


async def index(request):
    return request.app.jinja.render('mainWrapper.html', request, greetings='Booooooo!')


async def login(request):
    return request.app.jinja.render('login.html', request, greetings='Booooooo!')


async def registration(request):
    user = User(
        name=request.form.get('username'),
        email=request.form.get('email'),
        password=request.form.get('password'),
    )
    await user.commit()
    return response.json(user.dump())
    # return response.redirect('/home')


async def home():
    return response.json({'tor': 'coool'})
