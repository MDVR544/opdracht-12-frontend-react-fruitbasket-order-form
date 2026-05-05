
import './App.css'
import {useState} from "react";


function App() {
    const [strawberryAmount, setStrawberryAmount] = useState(0);
    const [bananaAmount, setBananaAmount] = useState(0);
    const [appleAmount, setAppleAmount] = useState(0);
    const [kiwiAmount, setKiwiAmount] = useState(0);


    return (
    <>
        {/*opdracht 1*/}
        <h1>Fruitmand bezorgservice</h1>

            <article className='fruitTile'>
                <h2>Aardbeien</h2>
                <button type="button"
                onClick={() => strawberryAmount !== 0 ? setStrawberryAmount(strawberryAmount - 1) : 0}
                >-</button>
                {strawberryAmount}
                <button
                    type="button"
                    onClick={() => setStrawberryAmount(strawberryAmount + 1)}
                >+</button>
            </article>

        <article className='fruitTile'>
            <h2>Bananen</h2>
            <button type="button"
                    onClick={() => bananaAmount !== 0 ? setBananaAmount(bananaAmount - 1) : 0}
            >-</button>
            {bananaAmount}
            <button
                type="button"
                onClick={() => setBananaAmount(bananaAmount + 1)}
            >+</button>
        </article>

        <article className='fruitTile'>
            <h2>Appels</h2>
            <button type="button"
                    onClick={() => appleAmount !== 0 ? setAppleAmount(appleAmount - 1) : 0}
            >-</button>
            {appleAmount}
            <button
                type="button"
                onClick={() => setAppleAmount(appleAmount + 1)}
            >+</button>
        </article>

        <article className='fruitTile'>
            <h2>Kiwi's</h2>
            <button type="button"
                    onClick={() => kiwiAmount !== 0 ? setKiwiAmount(kiwiAmount - 1) : 0}
            >-</button>
            {kiwiAmount}
            <button
                type="button"
                onClick={() => setKiwiAmount(kiwiAmount + 1)}
            >+</button>
        </article>

        <button type="button"
        onClick={()=>
            [setStrawberryAmount(0),
                setBananaAmount(0),
                setAppleAmount(0),
                setKiwiAmount(0)]}
        >
            Reset</button>

   {/*opdracht 2*/}
        <form>
            <label htmlFor="form-firstname">
                Voornaam
                <input type="text"
                name="firstName"
                id="form-firsNname"
                // value={}
                // onChange{(e)=>(())}
                />
            </label>
            <label htmlFor="form-lastName">
                Achternaam
                <input type="text"
                       name="lastName"
                       id="form-lastName"
                    // value={}
                    // onChange{(e)=>(())}
                />
            </label>
            <label htmlFor="form-age">
                Leeftijd
                <input type="text"
                       name="age"
                       id="form-age"
                    // value={}
                    // onChange{(e)=>(())}
                />
            </label>
            <label htmlFor="form-postalCode">
                Leeftijd
                <input type="text"
                       name="postalcode"
                       id="form-postalCode"
                    // value={}
                    // onChange{(e)=>(())}
                />
            </label>
            <label htmlFor="form-delivery-frequency">
                Bezorgfrequentie
                <input type="text"
                       name="delivery frequency"
                       id="form-delivery-frequency"
                    // value={}
                    // onChange{(e)=>(())}
                />
            </label>
            <label htmlFor="form-delivery-moment-day">
                <input type="radio"
                       name="delivery moment day"
                       id="form-delivery-moment-day"
                    // value={}
                    // onChange{(e)=>(())}
                />
                Overdag
            </label>
            <label htmlFor="form-delivery-moment-night">
                <input type="radio"
                       name="delivery moment night"
                       id="form-delivery-moment-night"
                    // value={}
                    // onChange{(e)=>(())}
                />
                's Avonds
            </label>
            <label htmlFor="form-comments">
                Opmerking
                <textarea
                    name="comments"
                    id="form-comments"
                    cols="30"
                    rows="10">
                    {/*// value={}*/}
                    {/*// onChange{(e)=>(())}*/}
                </textarea>
            </label>
        </form>

    </>
  )
}

export default App
