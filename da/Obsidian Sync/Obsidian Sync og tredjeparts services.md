[Introduktion til Obsidian Sync|Obsidian Sync]] er en service til at synkronisere dine noter på tværs af enheder. Selvom den har nyttige funktioner, såsom [[Versionshistorik]], så er den ikke egnet til at tage backup af din boks.

Selvom vi anbefaler, at du regelmæssigt tager backup af din boks, så vær opmærksom på at **brugen af tredjeparts synkroniserings services kan resultere i datatab i forbindelse med Obsidian Sync**.

Hvis du opsætter samme tredjeparts service på flere enheder, f.eks. din mobil, risikerer du at servicen konkurrerer med Obsdidian Sync, hver gang du foretager en ændring i din boks. Det kan føre til konflikter, dublikerede filer, eller ødelagte filer.

For at tage backup af din boks ved hjælp af en tredjeparts service, så konfigurer servicen, så der kun tages backup af din primære enhed. F.eks. hvis du skriver mest på den bærbare computer, så er det den, du skal skal tage backup af.

Vi anbefaler, at du kun anvender en backup service, som ikke automatisk opdaterer data på din lokale enhed fra din backup.

> [!important] Filer "on-demand"
> Nogle cloud løsninger, såsom OneDrive, tillader, at der kun donwloades filer, når du bruger dem, hvorefterden fjerner dem lokalt for at frigøre plads. Da filerne ikke længere er tilfængelige lokalt, tror Obsidian Sync, at de er blevet slettet, og vil fjerne dem fra din fjernboks.
> 
> Så hvis du anvender Obsidian Sync sammen med en sådan eller lignende service, så konfigurer den til altid at beholde filerne på enheden.
