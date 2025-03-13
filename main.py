from flask import Flask
from dotenv import load_dotenv
import os

app = Flask(__name__)

from views import *

load_dotenv()


flask_env = os.getenv('FLASK_ENV', 'production')

debug_mode = flask_env == 'development'

if __name__ == "__main__":
    app.run(debug=debug_mode)
