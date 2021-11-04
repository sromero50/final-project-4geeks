from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Empresa(db.Model):
    __tablename__ = 'empresa'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
        
    

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
    __tablename__ = 'administrador'
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

class Linea(db.Model):
    __tablename__ = 'linea'
    id = db.Column(db.Integer, primary_key=True)
    numero_linea = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return '<Linea %r>' % self.numero_linea

    def serialize(self):
        return {
            "id": self.id,
            "numero_linea": self.numero_linea
           
        }

class Parada(db.Model):
    __tablename__ = 'parada'
    id = db.Column(db.Integer, primary_key=True)
    ubicacion = email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<Parada %r>' % self.ubicacion

    def serialize(self):
        return {
            "id": self.id,
            "ubicacion": self.ubicacion
           
        }

class Horario(db.Model):
    __tablename__ = 'horario'
    id = db.Column(db.Integer, primary_key=True)
    id_linea = db.Column(db.Integer, db.ForeignKey('linea.id'))
    id_parada = db.Column(db.Integer, db.ForeignKey('parada.id'))
    tipo_dia = db.Column(db.String(80), unique=False, nullable=False)
    hora = db.Column(db.String(80), unique=False, nullable=False)

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

# class Parada_nombre(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     parada_ubicacion = db.Column(db.String(120), db.ForeignKey('parada.ubicacion'))
#     tipo_dia = db.Column(db.String(120), db.ForeignKey('horario.tipo_dia'))
#     hora = db.Column(db.String(120), db.ForeignKey('horario.hora'))