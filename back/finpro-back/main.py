from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import Base
from crud import create_message
from contact_message import ContactMessage

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/contact/")
async def create_message_endpoint(contact_message: ContactMessage, db: Session = Depends(get_db)):
    try:
        created_message = create_message(db=db, name=contact_message.name, email=contact_message.email, message=contact_message.message)
        return {
            "status": 200,
            "msg": "Mensaje enviado exitosamente.",
            "data": {
                "id": created_message.id,
                "nombre": created_message.nombre,
                "correo": created_message.correo,
                "mensaje": created_message.mensaje
            }
        }
    except Exception as e:
        return {
            "status": 500,
            "msg": "Error al enviar el mensaje. Inténtalo nuevamente."
        }
