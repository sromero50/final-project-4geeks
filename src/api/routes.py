"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Empresa, Usuario
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/login', methods=['POST', 'GET'])
def login():

    if request.method=='POST': 
        email=request.json["email"]
        password=request.json["password"]
        if email is None or password is None:
            return jsonify("Ingresa el usuario o password")
        
        user=Usuario.query.filter_by(email=email).first()
        if not user:
            jsonify({"message":"Email o password incorrectos"}),400
        
        #Creacion de token
        accessToken=create_access_token(identity=email)
        
        return jsonify({"token":accessToken}), 200