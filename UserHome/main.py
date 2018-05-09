import os

from app import app

if __name__ == '__main__':
    # TODO use configuration
    app.run(host='0.0.0.0', port=7000, debug=os.environ['DEBUG'])
