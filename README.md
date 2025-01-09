### instalation
```
$ yarn create react-app la-maison-jungle
```
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### yarn create react-app la-maison-jungle

src/index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Navbar/>
      <Hero/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
componente/Button.js
```js
import '../styles/Button.css'
function Button(){
    return (
        <a href="https://example.com" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Hello</a>
    )
}

export default Button
```

### Ajouter enue photo react

```js
import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    const title = 'La maison jungle'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner
```

### inline style

```js
<div>
    style={{
        colot:'black',
        textAlign: 'right',
        borderBottom: '1px solid black'
    }}
</div>
```

###  boucle .map

```js
export default function ShoppingList(){
    const plantList = [
        'monstera',
        'ficus lyrata',
        'pothos argenté',
        'yucca',
        'palmier'
    ]
   return(
        <ul>
            {plantList.map((plant, index)=> (
                <li key={`${plant}-${index}`}>{plant}</li>
            ))}
        </ul>
   )
}
```

### condition

```js
{plantList.map((plant) => (
    <li key={ plant.id }>
        {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
    </li>
))}
```

il y a une maniere plus simple d'ecrire ce code : 

```js
{plant.isBestSale && <span>🔥</span>}
```

Vous pouvez d'ailleurs chaîner les conditions.

Si par exemple, vous vouliez afficher le 🔥 pour les plantes qui sont des  isBestSale   ET dans la category classique :

```js
{plant.isBestSale && plant.category === "classique" && <span>🔥</span>}
```

De la même manière, si vous aviez voulu que le 🔥 s'affiche à côté des plantes qui sont  isBestSale   OU dans la category classique :

```js
{(plant.isBestSale || plant.category === "classique") && <span>🔥</span>}
```

on peut faire aussi une condition ternaire qui retourne du html et pous cela on va utiliser une autre techmique
aussi que c'est de mettre la condition dans une variable const et appeler la variale directement dans le code

```js
const recommendation = isSprint ? (
    <div>C'est le printemps</div>
) : (
    <div>C'est pas le printemps</div>
)

// on utilise la variale qui a la condition
{recomendation}
```

### PROPS

on vient ajouter un composant  CareScale   et on lui passe la prop value :

```js
<CareScale scaleValue={plant.light} />
```

et là on a la fonction du component CareScale et en paramettre on a les props et pour le recouperer on a qu'a
faire props.la_value_souhaitee
```js
function CareScale(props) {
    const scaleValue = props.scaleValue
    return <div>{scaleValue}☀️</div>
}
    
export default CareScale
```


En maintenent on va utiliser les boucles, il faudra modifier un peu la fonction

```js
function CareScale(props) {
    const scaleValue = props.scaleValue

    const range = [1, 2, 3]

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : null
            )}
        </div>
    )
}
```

### la déstructuration.

 Elle permet directement de déclarer une variable et de lui assigner la valeur d'une propriété d'un objet.
Ici on peut donc faire :
voici la technique :
```js
const {scaleValue, careType} = props
```

Et de cette façon je peux le faire dans une fonction, et on pourrait utiliser les deux paramettres
deja dans notre code
```js
function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}
```

### Faites descendre les données, des parents vers les enfants
Les props nous permettent donc de configurer nos composants.
Elles répondent à la logique même de React selon laquelle les données descendent
à travers notre arborescence de composants : il s'agit d'un flux de données unidirectionnel.

Il existe chez React des props qui ont un comportement un peu particulier : nous les appelons les props techniques. 🛠

La syntaxe de cette prop est particulière, puisqu'elle n’est pas fournie à l’aide d’un attribut, mais en imbriquant des composants à l’intérieur du composant concerné.

Ce qui nous donne :

```js
<Parent>
    <Enfant1 />
    <Enfant2 />
</Parent>
```
Par exemple, si on utilise  children   pour réécrire la Banner, cela nous donnerait dans  App.js  :

```js
<Banner>
    <img src={logo} alt='La maison jungle' />
    <h1 className='lmj-title'>La maison jungle</h1>
</Banner>
```

Et on peut acceder aux props dans la fonction de cette façon là : 
du coup dans la div on aura les infos des props qu'on a passé a notre banner

```js
function Banner({ children }) {
    return <div className='lmj-banner'>{children}</div>
}
```

Cette manière d'utiliser  children   est particulièrement utile lorsqu'un composant ne connaît
pas ses enfants à l'avance, par exemple pour une barre de navigation (Sidebar) ou bien pour une modale.

### PropTypes
En manipoulant les props on pourrais faire des erreurs
Pour cela, React a créé les PropTypes, qui nous permettent de préciser dès le début 
le type d'une prop, si elle est requise, et de lui attribuer une valeur par défaut. 
Nous ne les verrons pas dans ce cours, mais vous pouvez y jeter un œil dès maintenant.

### Evenements

On va d'abord creer le code html du component ou on va avoir un evenement onClick a qui
on va passer une fonction handleClick qui va a etre executer quand on click l'element li


```html
<li className='lmj-plant-item' onClick={() => handleClick(name)} >
    <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
    {name}
    <div>
        <CareScale careType='water' scaleValue={water} />
        <CareScale careType='light' scaleValue={light} />
    </div>
</li>
```

En suite on va creer la fonction handleClick qui va creer une alert qui va á être
executée quand on aura lancé l'evenement click
```js
function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}
```

pour faire des evenements en lien avec les formulaires un peut les formulaires contrôlés (on pourrais utiliser
des formulaires non controles aussi notament utilisant preventDefault mais React conseil d'utiliser plutot des
formulaires controles)

```js
import { useState } from 'react'

const [inputValue, setInputValue] = useState("Posez votre question ici")


function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

export default QuestionForm
```

### States
On peut appeler useState de cette façon là
```js
import { useState } from 'react'
...
const [cart, updateCart] = useState(0) // cette syntaxe  s'agit en fait de la même pratique que nous avions vue dans la partie précédente : la déstructuration. Sauf qu'ici, ça s'appelle la décomposition, parce qu'il s'agit d'un tableau et non d'un objet.
...

function Cart() {
    const monsteraPrice = 8
    const [cart, updateCart] = useState(0)

    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <div>
                Monstera : {monsteraPrice}€
                <button onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
            </div>
            <h3>Total : {monsteraPrice * cart}€</h3>
        </div>
    )
}
```


### Partagez votre state entre différents composants

```js
function App() {
    const [cart, updateCart] = useState([])
    
    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
        </div>
    )
}

export default App
```

```js
function Cart({ cart, updateCart }) {
    const monsteraPrice = 8
    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            <h2>Panier</h2>
            <h3>Total : {monsteraPrice * cart}€</h3>
            <button onClick={() => updateCart(0)}>Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart
```

```js
function ShoppingList({ cart, updateCart }) {
// Petite précision : categories nous vient de la partie précédente pour récupérer toutes les catégories uniques de plantes.

    const categories = plantList.reduce(
        (acc, elem) =>
            acc.includes(elem.category) ? acc : acc.concat(elem.category),
        []
    )

    return (
        <div className='lmj-shopping-list'>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light }) => (
                    <div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} />
                        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList
```

### Effects

Pour importer useEffect on doit juste appeler useEffect comme on a fait avec useState

```js
import { useState, useEffect } from 'react'
```

Il y a plusieurs façons d'utiliser useEffect :

```js
useEffect(() => {
    console.log("ce log s'affiche a chaque rendu du component ou le useEffect est declaré")
})
```

```js
useEffect(() => {
    console.log("ce log s'affiche seulement au premier rendu du component")
}, [])// on doit lui paser un tableau vide
``` 


```js
useEffect(() =>  {
    console.log("ce log s'affiche la premiere fois que ce component est rendu mais aussi de que cart sera mis a jour")
},[cart])
```

```js
useEffect(() =>  {
    return()=>
        console.log("ce log s'affiche quqand le component est retiré du DOM")
})
```


Intégrez quelques règles
Comme je vous l'ai expliqué au chapitre précédent,  useEffect   est un hook,
une fonction qui permet de « se brancher » sur la fonctionnalité des effets de React.
Mais quelques règles particulières s'appliquent au hook  useEffect :

Appelez toujours  useEffect   à la racine de votre composant. Vous ne pouvez 
pas l'appeler à l’intérieur de boucles, de code conditionnel ou de fonctions imbriquées. Ainsi,
vous vous assurez d'éviter des erreurs involontaires.

Comme pour  useState,  useEffect   est uniquement accessible dans un composant fonction React.
Donc ce n'est pas possible de l'utiliser dans un composant classe, ou dans une simple fonction JavaScript.

Par ailleurs, je vous conseille de séparer les différentes actions effectuées dans différents useEffect.
Cela est plutôt une bonne pratique qu’une règle.


### React StrictMode

```js
<React.StrictMode>
    ...
<React.StrictMode/>
```