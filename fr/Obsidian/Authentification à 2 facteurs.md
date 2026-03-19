---
permalink: 2fa
localized: '2026-03-18'

---
Si vous avez un [compte Obsidian](https://obsidian.md/fr/account), vous pouvez activer l'authentification à deux facteurs (2FA) pour protéger votre compte avec une étape de vérification supplémentaire.

## Activer la 2FA

- Connectez-vous à [votre compte Obsidian](https://obsidian.md/fr/account/profile) depuis votre navigateur web.
- Dans la section **Profile**, allez à **2-factor authentication** et sélectionnez **Enable**.
- Une fenêtre contextuelle apparaîtra pour vous inviter à connecter une application d'authentification avec soit un **QR code**, soit une **clé de configuration**.

> [!hint]- Applications d'authentification populaires
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [Trousseau iCloud](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Une fois connectée, votre application d'authentification vous fournira un code à six chiffres. Entrez ce code sous la section **QR code/clé de configuration**, à l'étape 3.
- Enfin, entrez votre mot de passe actuel.
- Sélectionnez **Complete set up**.
- La fenêtre contextuelle sera remplacée par une fenêtre de confirmation et vos codes de récupération. Veuillez télécharger vos codes de récupération, car vous en aurez besoin pour déverrouiller votre compte.

Votre 2FA est maintenant configurée.

> [!warning]- Sauvegardes du QR code/clé de configuration
> Si vous décidez de conserver une sauvegarde de votre **QR code** ou de votre **clé de configuration** en plus de vos codes de récupération, nous recommandons fortement de les conserver dans un système protégé par un mot de passe.

## Générer des codes de récupération

Si vous avez activé la 2FA avant que les codes de récupération ne soient disponibles, ou si vous souhaitez renouveler vos codes de récupération, suivez ces étapes :

- Connectez-vous à [votre compte Obsidian](https://obsidian.md/fr/account/profile) depuis votre navigateur web.
- À côté de 2-factor authentication, sélectionnez **Refresh recovery codes**.
- Dans la fenêtre contextuelle, entrez votre **mot de passe** et votre **code d'authentification à 6 chiffres**.
- Une fenêtre de confirmation affichera vos codes de récupération. Vous avez deux options :
    - **Copy recovery codes** : Copier les codes pour les coller ailleurs.
    - **Download recovery codes** : Télécharger un fichier `obsidian-recovery-codes.txt` contenant vos codes.
- Sélectionnez **Got it** pour fermer la fenêtre contextuelle.

Vous pouvez utiliser un code de récupération **une seule fois** à la place de votre **code d'authentification à 6 chiffres**. Vous pouvez également renouveler vos codes de récupération à tout moment.

## Désactiver la 2FA

- Connectez-vous à [votre compte Obsidian](https://obsidian.md/fr/account/profile) depuis votre navigateur web.
- Dans la section **Profile**, allez à **2-factor authentication** et sélectionnez **Disable**.
- Entrez votre mot de passe Obsidian.
- Entrez le code à six chiffres actuel depuis votre application d'authentification.
- Sélectionnez **Disable 2FA**.
- Vous serez redirigé vers l'écran de gestion du compte.

Le paramètre **2-factor authentication** affichera à nouveau un bouton **Enable**, indiquant que la 2FA a été désactivée.

## FAQ

**J'ai activé la 2FA. Serai-je déconnecté de mes appareils Obsidian actuels ?**
Non. L'activation de la 2FA ne vous déconnecte pas de partout, par souci de commodité. Si vous en avez besoin, vous pouvez le faire manuellement depuis la page de votre compte, puis vous reconnecter sur chacun de vos appareils.

**J'ai activé, puis désactivé la 2FA. J'aimerais la configurer à nouveau. Puis-je utiliser le QR code ou la clé de configuration d'origine ?**
Non. Vous recevrez un nouveau **QR code** et une nouvelle **clé de configuration** à chaque fois que vous lancerez une nouvelle configuration de la 2FA.

**J'ai activé la 2FA. On ne m'a toujours pas demandé de l'utiliser après plusieurs tentatives de déconnexion/connexion. Est-ce que cela fonctionne ?**
Le cache de votre navigateur peut vous donner l'impression que vous effectuez des modifications sur la page (comme vous connecter ou déconnecter) alors qu'en réalité vous accédez aux données stockées. Essayez d'utiliser une fenêtre de navigation privée pour vous connecter et confirmer que la 2FA fonctionne.

Si vous continuez à rencontrer ce comportement, veuillez [soumettre un rapport de bug](https://forum.obsidian.md/c/bug-reports/7).

**J'ai perdu mes codes de récupération, mon application d'authentification et tout ce qui est nécessaire pour me connecter à mon compte. Que dois-je faire ?**

Si vous avez perdu vos codes de récupération et votre application d'authentification, veuillez envoyer un e-mail à [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) pour obtenir de l'assistance afin de retrouver l'accès à votre compte.
