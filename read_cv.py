import sys
import pypdf

with open("UygarAliGocmenCV.pdf", "rb") as file:
    reader = pypdf.PdfReader(file)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
        
with open("cv_text.txt", "w", encoding="utf-8") as out:
    out.write(text.replace(" ", "").replace("\n\n", "\n") if "u y g" in text else text)
