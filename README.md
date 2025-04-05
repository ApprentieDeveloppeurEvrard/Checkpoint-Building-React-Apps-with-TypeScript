Étapes générales de conversion vers TypeScript
Corriger les erreurs de syntaxe du code JavaScript original (avant même la conversion TS).

Définir les types des props dans les composants fonctionnels.

Définir les types d’état et des props dans les composants de classe.

Ajouter l’extension .tsx si vous êtes dans un fichier React.

Vérifier et ajuster l’importation de React (selon la version).

Exporter correctement les composants (export default).

🔧 Code 01 : Greeting (composant fonctionnel)
✅ Étapes :
On corrige la syntaxe (; mal placé).

On crée une interface GreetingProps pour typer la prop name.

On utilise la syntaxe TypeScript pour les props.



Code 02 : Counter (composant de classe)
✅ Étapes :
Corriger les erreurs de syntaxe (retours à la ligne, points-virgules, exporter → export default).

Utiliser une interface State pour typer l’état.

Étendre React.Component<{}, State> (pas de props ici donc {}).

Corriger la syntaxe JSX.
