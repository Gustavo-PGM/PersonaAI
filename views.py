from main import app
from flask import render_template
from google import generativeai
from dotenv import load_dotenv
import os

load_dotenv()
PersonaAI = os.getenv('CHAT_API_KEY')


def personai():
    client = generativeai.Client(api_key="CHAT_API_KEY")

    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents="Explain how AI works",
    )

    return response

    #print(response.text)


@app.route("/")
def home():
    return render_template("home.html")