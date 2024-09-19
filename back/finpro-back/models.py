
from sqlalchemy import Column, Integer, String
from database import Base

class Message(Base):
    __tablename__ = "contacto"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, index=True)
    correo = Column(String, index=True)
    mensaje = Column(String)
