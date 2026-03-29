---
permalink: web-clipper/troubleshoot
---
Jos kohtaat ongelmia [[Johdanto Obsidian Web Clipperiin|Web Clipperin]] kanssa, voit saada apua [virallisella Discord-kanavalla](https://discord.com/channels/686053708261228577/1285652864089198672). Voit myös raportoida virheitä [GitHub-repositoriossa](https://github.com/obsidianmd/obsidian-clipper).

## Yleistä

### Osa sisällöstä puuttuu

Oletuksena Web Clipper yrittää kaapata sisältöä sivulta älykkäästi. Se ei kuitenkaan välttämättä onnistu tässä kaikilla verkkosivuilla.

Web Clipper käyttää [Defuddlea](https://github.com/kepano/defuddle) kaapattaakseen vain sivun pääsisällön. Tämä sulkee pois ylä- ja alatunnisteen sekä muut elementit, mutta joskus se voi olla liian konservatiivinen ja poistaa sisältöä, jonka haluat säilyttää. Voit [raportoida virheitä](https://github.com/kepano/defuddle) Defuddlelle.

Ohittaaksesi Defuddlen Web Clipperissä käytä seuraavia menetelmiä:

- Valitse teksti tai käytä `Cmd/Ctrl+A` valitaksesi kaiken tekstin.
- [[Verkkosivujen korostaminen|Korosta sisältöä]] valitaksesi tarkalleen, mitä haluat kaapata.
- Käytä [[Obsidian Web Clipper/Mallineet|mukautettua pohjaa]] sivustolle.

### Obsidianiin ei ilmesty sisältöä

Jos et näe mitään sisältöä Obsidianissa, kun napsautat **Lisää Obsidianiin**:

- Tarkista virheet Obsidianin [[Apua ja tuki#Capture console logs|kehittäjäkonsolista]].
- Tarkista, että holvin nimi Web Clipperin asetuksissa vastaa täsmälleen *holvin nimeä* Obsidianissa, *ei holvin polkua*.
- Tarkista, että kansion nimi on oikein muotoiltu.

## Linux

#### Obsidian ei avaudu

- Varmista, että [[Obsidian URI]] -protokolla [[Obsidian URI#Register Obsidian URI|on rekisteröity]].
- Jos käytät Firefoxia, saatat joutua [rekisteröimään sen selaimen asetuksissa](https://kb.mozillazine.org/Register_protocol).

#### Obsidian avautuu, mutta vain tiedostonimi tallentuu

Todennäköisesti Obsidian ei pääse käsiksi leikepöytääsi. Leikepöydän käyttöoikeus on välttämätön tietojen siirtämiseksi selaimesta Obsidianiin. Kokoonpanosi voi vaikuttaa siihen, miten sovellukset on eristetty, sekä leikepöydän käyttöoikeuksiin.

Jos käytät Waylandia, varmista, että Obsidianilla on oikeudet lukea leikepöytää, kun sovellus ei ole kohdistettuna. Tämä asetus saattaa olla ikkunointiohjelmassasi, esim. Hyprland tai Sway.

Jos käytät Hyprlandia:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Jos käytät Swayta:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Jos käytät Flatpakia, kokeile [virallisesti tuettua Obsidian-versiota](https://obsidian.md/download).
- Jos käytät KDE:tä, siirry kohtaan **Järjestelmäasetukset** → **Ikkunoiden hallinta** → **Ikkunasäännöt** ja salli Obsidianin ottaa kohdistus, [[web-clipper-kde.png|katso kuvakaappaus]].
- Varavaihtoehtona kokeile vaihtaa **Yhteensopivuustilaan** kohdassa **Web Clipper -asetukset** → **Yleiset**. Tämä ohittaa leikepöydän ja tallentaa sisällön suoraan URI:n kautta. Huomaa, että tämä rajoittaa leikattavien merkkien määrää selaimesi ja Linux-jakelusi mukaan.

## iOS ja iPadOS

Web Clipper -laajennuksen käyttöönotto Safarissa:

1. Avaa Safari ja napauta URL-palkin vasemmanpuoleisinta painiketta, joka näyttää suorakulmiolta, jonka alla on viivoja.
2. Napauta **Hallinnoi laajennuksia**.
3. Ota **Obsidian Web Clipper** käyttöön laajennusluettelossa.
4. Poistu valikosta.
5. Käyttääksesi laajennusta **napauta palapelin palakuvaketta** URL-palkissa.

Web Clipperin salliminen kaikilla verkkosivustoilla:

1. Siirry iOS:n kohtaan **[[Asetukset]]** → **Sovellukset** → **Safari** → **Laajennukset**.
2. Salli **Käyttöoikeudet**-kohdassa sen suorittaminen kaikilla verkkosivustoilla.

Obsidianin salliminen vastaanottamaan Web Clipper -sisältöä aina:

1. Siirry iOS:n kohtaan **[[Asetukset]]** → **Sovellukset** → **Obsidian**.
2. Aseta **Liitä muista sovelluksista** -asetukseksi **Salli**.
