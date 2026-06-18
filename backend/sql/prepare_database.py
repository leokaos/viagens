import os

from sqlalchemy import text

from app.core import postgres

session = next(postgres.get_session())

scripts = [file for file in os.listdir() if file.endswith('.sql')]
scripts.sort()

for file in scripts:

    caminho = os.path.join(os.getcwd(), file)
    with open(caminho, "r", encoding="utf-8") as f:
        sql = f.read()
        try:
            session.execute(text(sql))
            session.commit()
        except Exception as e:
            session.rollback()
