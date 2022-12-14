"""Models for Cupcake app."""
from flask_sqlalchemy import SQLAlchemy
from traitlets import default

db=SQLAlchemy()
DEFAULT_IMG_URL = "https://tinyurl.com/demo-cupcake"
def connect_db(app):
    """Connect this database to provided Flask app.
    You should call this in your Flask app."""
    db.app=app
    db.init_app(app)

class Cupcake(db.Model):
    """"""
    __tablename__='cupcakes'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    flavor = db.Column(db.Text, nullable = False)
    size = db.Column(db.Text, nullable = False)
    rating = db.Column(db.Float, nullable = False)
    image = db.Column(db.Text, nullable = False, default=DEFAULT_IMG_URL)

    def serialize(self):
        return {
            'id':self.id,
            'flavor':self.flavor,
            'size':self.size,
            'rating':self.rating,
            'image':self.image
        }