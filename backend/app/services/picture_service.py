import io
import os

from PIL import Image

LARGURA_MAXIMA = 800
QUALIDADE = 85
FOLDER = 'D:\\Projetos\\viagens\\backend\\static'


def create_imagem_and_save(foto_bytes: bytes, nome_arquivo: str):
    imagem_na_memoria = io.BytesIO(foto_bytes)
    img = Image.open(imagem_na_memoria)

    if img.mode in ('RGBA', 'LA', 'P'):
        rgb = Image.new('RGB', img.size, (255, 255, 255))
        rgb.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
        img = rgb
    elif img.mode != 'RGB':
        img = img.convert('RGB')

    img.thumbnail((LARGURA_MAXIMA, LARGURA_MAXIMA), Image.Resampling.LANCZOS)

    output_bytes = io.BytesIO()
    img.save(output_bytes, format='JPEG', quality=QUALIDADE, optimize=True)
    output_bytes.seek(0)

    conteudo_final = output_bytes.getvalue()

    caminho_completo = os.path.join(FOLDER, nome_arquivo)
    with open(caminho_completo, "wb") as f:
        f.write(conteudo_final)
