from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Empresa(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    linea = db.relationship("Linea", backref="empresa")

    def __repr__(self):
        return '<Empresa %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "email": self.email,
            "password": self.password
           
        }

class Administrador(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return '<Administrador %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "email": self.email,
            "password": self.password
           
        }

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    reserva = db.relationship("Reserva", backref="usuario")

    def __repr__(self):
        return '<Usuario %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "email": self.email,
            "password": self.password
           
        }

class Linea(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    id_empresa = db.Column(db.Integer, db.ForeignKey('empresa.id'))
    nombre_linea = db.Column(db.String(120), unique=True, nullable=False)
    destino = db.Column(db.String(120), unique=True, nullable=False)
    horario = db.relationship("Horario", backref="linea")
    parada = db.relationship("Parada", backref="linea")
    reserva = db.relationship("Reserva", backref="linea")


    def __repr__(self):
        return '<Linea %r>' % self.nombre_linea

    def serialize(self):
        return {
            "id": self.id,
            "nombre_linea": self.nombre_linea,
            "id_empresa": self.id_empresa,
            "destino": self.destino
                       
        }

class Parada(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    ubicacion = db.Column(db.String(120), unique=True, nullable=False)
    latitud = db.Column(db.Float(53), unique=True, nullable=False)
    longitud = db.Column(db.Float(53), unique=True, nullable=False)
    horario = db.relationship("Horario", backref="parada")
    id_linea = db.Column(db.Integer, db.ForeignKey('linea.id'))

    def __repr__(self):
        return '<Parada %r>' % self.ubicacion

    def serialize(self):
        return {
            "id": self.id,
            "ubicacion": self.ubicacion,
            "id_linea": self.id_linea,
            "latitud": self.latitud,
            "longitud": self.longitud
           
        }

class Horario(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    id_linea = db.Column(db.Integer, db.ForeignKey('linea.id'))
    id_parada = db.Column(db.Integer, db.ForeignKey('parada.id'))
    tipo_dia = db.Column(db.String(80), unique=False, nullable=False)
    hora = db.Column(db.String(80), unique=False, nullable=False)
    reserva = db.relationship("Reserva", backref="horario")

    def __repr__(self):
        return '<Horario %r>' % self.hora

    def serialize(self):
        return {
            "id": self.id,
            "id_linea": self.id_linea,
            "id_parada": self.id_parada,
            "tipo_dia": self.tipo_dia,
            "hora": self.hora
           
        }

class Reserva(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_linea = db.Column(db.Integer, db.ForeignKey('linea.id'))
    id_horario = db.Column(db.Integer, db.ForeignKey('horario.id'))
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuario.id'))
    asiento = db.Column(db.String(80), unique=False, nullable=False)
    fecha = db.Column(db.String(80), unique=False, nullable=False)
    codigo_reserva = db.Column(db.String(80), unique=True, nullable=False)

    def __repr__(self):
        return '<Reserva %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "id_linea": self.id_linea,
            "id_horario": self.id_horario,
            "asiento": self.asiento,
            "id_usuario": self.id_usuario,
            "fecha": self.fecha,
            "codigo_reserva": self.codigo_reserva,

           
        }

