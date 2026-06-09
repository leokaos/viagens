lista = [1, 2, 3, 4, 5]
print([i * 2 for i in lista])  # vezes 2

lista = [1, 2, 3, 4, 5]
print([i for i in lista if i % 2 == 0])  # apenas pares

lista = [10, 20, 30, 40]
print([int(i / 10) for i in lista])  # cada número dividido por 10

palavra = "python"
print([c.upper() for c in palavra])  # lista de letras maiúsculas

lista = [1, 2, 3]
print([i * i for i in lista])  # cada número ao quadrado

lista = [1, 2, 3, 4, 5, 6]
print([i for i in lista if i > 3])  # só números maiores que 3

lista = [-3, -1, 0, 2, 4]
print([i for i in lista if i > 0])  # só números positivos (ignore zero) → [2, 4]

lista = [1, 2, 3, 4, 5]
print(["par" if i % 2 == 0 else "impar" for i in lista])  # "par" se for par, "ímpar" se for ímpar

lista = [1, 2, 3, 4]
print([i * 3 for i in lista if i % 2 != 0])  # só ímpares e multiplicados por 3 → [3, 9]

lista = [1, 2, 3, 4, 5, 6]
print([i for i in lista if i % 2 == 0 or i % 3 == 0])  # números divisíveis por 2 ou 3 → [2, 3, 4, 6]

lista = ["ana", "joao", "maria", "pedro"]
print([s for s in lista if len(s) > 3])  # → só strings com mais de 3 letras → ["joao", "maria", "pedro"]

lista = ["gato", "cachorro", "passaro"]
print([s.capitalize() for s in lista])  # → primeira letra maiúscula → ["Gato", "Cachorro", "Passaro"]

lista = ["java", "python", "go", "javascript"]
print([s for s in lista if 'ja' in s])  # → só palavras com "ja" → ["java", "javascript"]

lista = [" oi ", " tudo bem ", " legal"]
print([s.strip() for s in lista])  # → remove espaços → ["oi", "tudo bem", "legal"]

lista = ["casa", "carro", "moto", "bicicleta"]
print([f'{s}{len(s)}' for s in lista])  # → palavra + tamanho → ["casa4", "carro5", "moto4", "bicicleta9"]

lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print([i for i in lista if i > 4 and i % 2 == 0])  # → pares e maiores que 4 → [6, 8]

lista = [10, 15, 20, 25, 30]
print([i for i in lista if i % 5 == 0 and i < 25])  # → divisíveis por 5 e menores que 25 → [10, 15, 20]

lista = ["a", "bb", "ccc", "dddd"]
print([s * len(s) for s in lista])  # → letras repetidas o número do tamanho → ["a", "bb", "ccc", "dddd"] (dica: string * tamanho)

lista = [2, 3, 4, 5]
print([i for i in [j * j for j in lista] if i > 10])  # → [4, 9, 16, 25] (quadrado) depois filtra só > 10 → [16, 25]

lista = ["joao", "maria", "jose", "ana", "julia"]
print([s for s in lista if s.startswith('j') and len(s) == 4])  # → começa com "j" e tem 4 letras → ["joao", "jose"]
