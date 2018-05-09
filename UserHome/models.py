from umongo import Document
from umongo.fields import StringField

import app


@app.umongo_instance.register
class User(Document):
    name = StringField(required=True, allow_none=False)
    email = StringField(required=True, allow_none=False)
    password = StringField(required=True, allow_none=False)
