
import './App.css'

function App() {

  return (
    <>
        {/*opdracht 1*/}
        <h1>Fruitmand bezorgservice</h1>

            <article className='fruitTile'>
                <h2>Aardbeien</h2>
                <button type="button">-</button>
                <p>0</p>
                <button type="button">+</button>
            </article>

        <article className='fruitTile'>
            <h2>Bananen</h2>
            <button type="button">-</button>
            <p>0</p>
            <button type="button">+</button>
        </article>

        <article className='fruitTile'>
            <h2>Appels</h2>
            <button type="button">-</button>
            <p>0</p>
            <button type="button">+</button>
        </article>

        <article className='fruitTile'>
            <h2>Kiwi's</h2>
            <button type="button">-</button>
            <p>0</p>
            <button type="button">+</button>
        </article>

        <button type="button">Reset</button>

        {/*Opdracht 2*/}
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
