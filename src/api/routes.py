"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Empresa, Parada, Linea, Horario, Administrador, Usuario
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required



api = Blueprint('api', __name__)



@api.route("/usuario/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    usuario = Usuario.query.filter_by(email=email, password=password).first()

    if usuario is None:
        return jsonify({"msg": "Bad username or password"}), 401


    access_token = create_access_token(identity=usuario.id)
    return jsonify({ "token": access_token, "usuario_id": usuario.id, "email": usuario.email,"rol":"usuario"   })

@api.route("/empresa/login", methods=["POST"])
def login_empresa():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    empresa = Empresa.query.filter_by(email=email, password=password).first()

    if empresa is None:
        return jsonify({"msg": "Bad username or password"}), 401


    access_token = create_access_token(identity=empresa.id)
    return jsonify({ "token": access_token, "empresa_id": empresa.id, "email": empresa.email,"rol":"empresa"  })



@api.route('/linea', methods=['GET'])
def get_linea():
    linea_query = Linea.query.all()
    all_lineas = list(map(lambda x: x.serialize(), linea_query))

    return jsonify(all_lineas), 200

@api.route('/parada', methods=['GET'])
def get_parada():
    parada_query = Parada.query.all()
    all_paradas = list(map(lambda x: x.serialize(), parada_query))

    return jsonify(all_paradas), 200

@api.route('/horario', methods=['GET'])
def get_horario():
    horario_query = Horario.query.all()
    all_horarios = list(map(lambda x: x.serialize(), horario_query))

    return jsonify(all_horarios), 200

@api.route("/usuario/<email>", methods=["GET"])
@jwt_required()
def get_user(email):
    logged_user = get_jwt_identity()
    actual_user = Usuario.query.filter_by(id=logged_user, email=email).first()
    user = actual_user.serialize()
    return user, 200

@api.route("/empresa/<email>", methods=["GET"])
@jwt_required()
def get_empresa(email):
    logged_empresa = get_jwt_identity()
    actual_empresa = Empresa.query.filter_by(id=logged_empresa, email=email).first()
    empresa = actual_empresa.serialize()
    return empresa, 200


# @api.route('/usuario', methods=['GET'])
# def get_usuario():
#     usuario_query = Usuario.query.all()
#     all_usuarios = list(map(lambda x: x.serialize(), usuario_query))

#     return jsonify(all_usuarios), 200


@api.route('/linea', methods=['POST'])
@jwt_required()
def add_new_linea():
    logged_empresa = get_jwt_identity()
    body = request.get_json()
    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)
    if 'numero_linea' not in body:
        raise APIException('You need to specify the numero_linea', status_code=400)
    if 'origen' not in body:
        raise APIException('You need to specify the origen', status_code=400)
    if 'destino' not in body:
        raise APIException('You need to specify the destino', status_code=400)                                  
    linea = Linea(id_empresa=logged_empresa, numero_linea=body['numero_linea'], origen=body['origen'], destino=body["destino"])
    db.session.add(linea)
    db.session.commit()
    linea_query = Linea.query.all()
    all_lineas = list(map(lambda x: x.serialize(), linea_query))
    return jsonify(all_lineas), 200


@api.route('/parada', methods=['POST'])
@jwt_required()
def add_new_parada():
    body = request.get_json()
    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)
    if 'ubicacion' not in body:
        raise APIException('You need to specify the ubicacion', status_code=400)

                               
    parada = Parada(ubicacion=body['ubicacion'])
    db.session.add(parada)
    db.session.commit()
    parada_query = Parada.query.all()
    all_paradas = list(map(lambda x: x.serialize(), parada_query))
    return jsonify(all_paradas), 200

@api.route('/horario', methods=['POST'])
@jwt_required()
def add_new_horario():
    body = request.get_json()
    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)
    if 'id_linea' not in body:
        raise APIException('You need to specify the id_linea', status_code=400)
    if 'id_parada' not in body:
        raise APIException('You need to specify the id_parada', status_code=400)
    if 'tipo_dia' not in body:
        raise APIException('You need to specify the tipo_dia', status_code=400)
    if 'hora' not in body:
        raise APIException('You need to specify the hora', status_code=400)                                   
    horario = Horario(id_linea=body['id_linea'], id_parada=body['id_parada'], tipo_dia=body['tipo_dia'], hora=body['hora'])
    db.session.add(horario)
    db.session.commit()
    horario_query = Horario.query.all()
    all_horarios = list(map(lambda x: x.serialize(), horario_query))
    return jsonify(all_horarios), 200

@api.route('/usuario/registrar', methods=['POST'])
def add_new_usuario():
    body = request.get_json()
    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)
    if 'nombre' not in body:
        raise APIException('You need to specify the nombre', status_code=400)
    if 'email' not in body:
        raise APIException('You need to specify the email', status_code=400)
    if 'password' not in body:
        raise APIException('You need to specify the password', status_code=400)

    usuario = Usuario(nombre=body['nombre'], email=body['email'], password=body['password'])
    db.session.add(usuario)
    db.session.commit()
    usuario_query = Usuario.query.all()
    all_usuarios = list(map(lambda x: x.serialize(), usuario_query))
    return jsonify(all_usuarios), 200

@api.route('/empresa/registrar', methods=['POST'])
def add_new_empresa():
    body = request.get_json()
    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)
    if 'nombre' not in body:
        raise APIException('You need to specify the nombre', status_code=400)
    if 'email' not in body:
        raise APIException('You need to specify the email', status_code=400)
    if 'password' not in body:
        raise APIException('You need to specify the password', status_code=400)

    empresa = Empresa(nombre=body['nombre'], email=body['email'], password=body['password'])
    db.session.add(empresa)
    db.session.commit()
    empresa_query = Empresa.query.all()
    all_empresas = list(map(lambda x: x.serialize(), empresa_query))
    return jsonify(all_empresas), 200

@api.route('/linea/<numero_linea>', methods=['DELETE'])
@jwt_required()
def delete_linea(numero_linea):
    logged_empresa = get_jwt_identity()
    linea = Linea.query.filter_by(numero_linea=numero_linea, id_empresa=logged_empresa).first()

    if linea is None:
        raise APIException('linea not found', status_code=404)
    db.session.delete(linea)
    db.session.commit()
    linea_query = Linea.query.all()
    all_linea = list(map(lambda x: x.serialize(), linea_query))
    return jsonify(all_linea), 200

@api.route('/parada/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_parada(id):
    parada = Parada.query.get(id)

    if parada is None:
        raise APIException('parada not found', status_code=404)
    db.session.delete(parada)
    db.session.commit()
    parada_query = Parada.query.all()
    all_parada = list(map(lambda x: x.serialize(), parada_query))
    return jsonify(all_parada), 200

@api.route('/horario/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_horario(id):
    horario = Horario.query.get(id)

    if horario is None:
        raise APIException('horario not found', status_code=404)
    db.session.delete(horario)
    db.session.commit()
    horario_query = Horario.query.all()
    all_horario = list(map(lambda x: x.serialize(), horario_query))
    return jsonify(all_horario), 200

@api.route('/usuario/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_usuario(id):
    logged_user = get_jwt_identity()
    usuario = Usuario.query.get(id)

    if usuario is None:
        raise APIException('usuario not found', status_code=404)
    db.session.delete(usuario)
    db.session.commit()
    usuario_query = Usuario.query.all()
    all_usuario = list(map(lambda x: x.serialize(), usuario_query))
    return jsonify(all_usuario), 200

@api.route('/linea/<numero_linea>', methods=['PUT'])
@jwt_required()
def modify_linea(numero_linea):
    logged_empresa = get_jwt_identity()
    body = request.get_json()
    linea =Linea.query.filter_by(numero_linea=numero_linea, id_empresa=logged_empresa).first()
    if linea is None:
        raise APIException('linea not found', status_code=404)
    
    linea.id_empresa = body["id_empresa"]
    linea.numero_linea = body["numero_linea"]
    linea.origen = body["origen"]
    linea.destino = body["destino"]

    db.session.commit()
    linea_query = Linea.query.all()
    all_linea = list(map(lambda x: x.serialize(), linea_query))
    return jsonify(all_linea), 200    

@api.route('/parada/<int:id>', methods=['PUT'])
@jwt_required()
def modify_parada(id):
    body = request.get_json()
    parada = Parada.query.get(id)
    if parada is None:
        raise APIException('parada not found', status_code=404)
    
    parada.ubicacion = body["ubicacion"]

    db.session.commit()
    parada_query = Parada.query.all()
    all_parada = list(map(lambda x: x.serialize(), parada_query))
    return jsonify(all_parada), 200    


@api.route('/horario/<int:id>', methods=['PUT'])
@jwt_required()
def modify_horario(id):
    body = request.get_json()
    horario = Horario.query.get(id)
    if horario is None:
        raise APIException('horario not found', status_code=404)
    
    horario.id_linea = body["id_linea"]
    horario.id_parada = body["id_parada"]
    horario.tipo_dia = body["tipo_dia"]
    horario.hora = body["hora"]

    db.session.commit()
    horario_query = Horario.query.all()
    all_horarios = list(map(lambda x: x.serialize(), horario_query))
    return jsonify(all_horarios), 200    

@api.route('/usuario/<int:id>', methods=['PUT'])
@jwt_required()
def modify_usuario(id):
    body = request.get_json()
    usuario = Usuario.query.get(id)
    if usuario is None:
        raise APIException('usuario not found', status_code=404)
    
    usuario.nombre = body["nombre"]
    usuario.email = body["email"]
    usuario.password = body["password"]

    db.session.commit()
    usuario_query = Usuario.query.all()
    all_usuarios = list(map(lambda x: x.serialize(), usuario_query))
    return jsonify(all_usuarios), 200   

