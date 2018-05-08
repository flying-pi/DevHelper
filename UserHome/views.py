from sanic import response


async def index(request):
    return request.app.jinja.render('mainWrapper.html', request, greetings='Booooooo!')


async def login(request):
    return request.app.jinja.render('login.html', request, greetings='Booooooo!')


async def registration():
    return response.redirect('/home')


async def home():
    return response.json({'tor': 'coool'})
