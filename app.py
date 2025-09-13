from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="SugamAI Demo Backend")

class InputText(BaseModel):
    text: str
    lang: str = "en"

@app.get("/")
def home():
    return {"message": "SugamAI backend is running"}

@app.post("/generate")
def generate_caption(payload: InputText):
    # Dummy implementation
    return {"caption": f"[{payload.lang}] Generated caption for: {payload.text}"}
