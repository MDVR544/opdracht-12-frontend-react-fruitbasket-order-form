
import './App.css'
import {useState} from "react";


function App() {
    const [strawberryAmount, setStrawberryAmount] = useState(0);
    const [bananaAmount, setBananaAmount] = useState(0);
    const [appleAmount, setAppleAmount] = useState(0);
    const [kiwiAmount, setKiwiAmount] = useState(0);
    const [firstnameValue, setFirstnameValue] = useState("");
    const [lastnameValue, setLastnameValue] = useState("");
    const [ageValue, setAgeValue] = useState(0);
    const [postalCodeValue, setPostalCodeValue] = useState("");
    const [deliveryFrequencyValue, setDeliveryFrequencyValue] = useState("")
    const [deliveryMomentDayValue, setDeliveryMomentDayValue] = useState(false);
    const [deliveryMomentNightValue, setDeliveryMomentNightValue] = useState(false);
    const [commentValue, setCommentValue] = useState("");
    const [generalTermValue, setGeneralTerms] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        return console.log(
            strawberryAmount,
            bananaAmount,
            appleAmount,
            kiwiAmount,
            firstnameValue,
            lastnameValue,
            ageValue,
            postalCodeValue,
            deliveryFrequencyValue,
            deliveryMomentDayValue,
            deliveryMomentNightValue,
            commentValue,
            generalTermValue
            );
    }


    return (
    <>
        <div>
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
        </div>
   {/*opdracht 2*/}
        <form onSubmit={handleSubmit}>
            <label htmlFor="form-firstname">
                Voornaam
                <input type="text"
                name="firstName"
                id="form-firsNname"
                value={firstnameValue}
                onChange={(e)=> setFirstnameValue(e.target.value)}
                />
            </label>
            <label htmlFor="form-lastName">
                Achternaam
                <input type="text"
                       name="lastName"
                       id="form-lastName"
                    value={lastnameValue}
                    onChange={(e)=>setLastnameValue(e.target.value)}
                />
            </label>
            <label htmlFor="form-age">
                Leeftijd
                <input type="text"
                       name="age"
                       id="form-age"
                    value={ageValue}
                    onChange={(e)=> setAgeValue(e.target.value)}
                />
            </label>
            <label htmlFor="form-postalCode">
                Postcode
                <input type="text"
                       name="postalcode"
                       id="form-postalCode"
                    value={postalCodeValue}
                    onChange={(e)=> setPostalCodeValue(e.target.value)}
                />
            </label>
            <label htmlFor="form-delivery-frequency">
                Bezorgfrequentie
                <select
                    name="delivery frequency"
                    id="form-delivery-frequency"
                value={deliveryFrequencyValue}
                onChange={(e)=>setDeliveryFrequencyValue(e.target.value)}>
                <option value="iedere week">iedere week</option>
                <option value="om de week">om de week</option>
                <option value="iedere maand">iedere maand</option>
                </select>

            </label>
            {/*Hier nog toevoegen dat er een message komt ipv true of false en de twee radio's proberen samen te voegen.*/}

            <label htmlFor="form-delivery-moment-day">
                <input type="radio"
                       name="delivery moment day"
                       id="form-delivery-moment-day"
                    value={deliveryMomentDayValue}
                    onChange={(e)=> setDeliveryMomentDayValue(e.target.value)}
                />
                Overdag
            </label>

            <label htmlFor="form-delivery-moment-night">
                <input type="radio"
                       name="delivery moment night"
                       id="form-delivery-moment-night"
                    value={deliveryMomentNightValue}
                    onChange={(e)=> setDeliveryMomentNightValue(e.target.value)}
                />
                's Avonds
            </label>
            <label htmlFor="form-comments">
                Opmerking
                <textarea
                    name="comments"
                    id="form-comments"
                    cols="30"
                    rows="10"
                    value={commentValue}
                    onChange={(e)=> setCommentValue(e.target.value)}>
                </textarea>
            </label>
            {/*Hier nog toevoegen dat er een message komt ipv true of false*/}
            <label htmlFor="form-general-terms">
                <input type="checkbox"
                name="general terms"
                id="form-general-terms"
                       value={generalTermValue}
                       onChange={(e=> setGeneralTerms(e.target.value))}
                />
                Ik ga akkoord met de voorwaarden
            </label>
            <button type="submit">Verzend</button>
        </form>

    </>
  )
}

export default App
