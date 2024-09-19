from sqlalchemy.orm import Session
from models import Message

def create_message(db: Session, name: str, email: str, message: str):
    db_message = Message(nombre=name, correo=email, mensaje=message)
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message
