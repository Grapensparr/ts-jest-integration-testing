# Resultat:

![image](https://user-images.githubusercontent.com/113124538/216907770-8772e1b5-e29a-4e0e-bbb1-97cfae05b7df.png)

![image](https://user-images.githubusercontent.com/113124538/216907864-89a4e7f1-a3d1-4fbc-9abb-158a1ad443fa.png)

![image](https://user-images.githubusercontent.com/113124538/216907668-f1dba0e1-9f38-400b-96db-f3cd29e8d91b.png)

# Inlämning - Integrationstester

Detta projekt skall fungera som mall för vad ni skall testa i denna del av kursen, asynkrona tester.

## Att göra

Klona ner detta repo och ta bort .git-mappen. Skapa ett eget repo och koppla det till er mapp (där det klonade projektet ligger). Nu har ni ett eget projekt att skriva tester för. Se till att ni installerar jest och alla beroenden som behövs för att kunna göra och köra era tester.

Ni behöver i detta projekt skriva tester som testar så många funktioner ni hinner i filerna:

- ts/movieApp.ts
- ts/functions.ts
- ts/services/movieservice.ts

Ni behöver inte testa main.ts i detta projekt.

## Förslag

Gå igenom koden i lugn och ro och se till att ni förstår vad den gör och hur information skickas till och från funktionerna i filerna. Börja därefter med att skriva tester för koden som är närmast datakällan, alltså movieservice.ts. Skriv därefter tester som använder sig av movieservice.ts och flytta er närmare och närmare webbläsaren. 

## Betygskriterier

För G:

- Skriv tester för minst 70% av funktionerna
- Skriva grundläggande integrationstester
- Använda enklare mock-objekt.
- Ha code coverage på minst 60%

För VG:

- Skriv tester för samtliga funktioner i filerna angivna ovan
- Bättre struktur på mock-objekten
- Kunna strukturera dina tester och visa på god förståelse i testerna.
- Ha code coverage på över 90%
