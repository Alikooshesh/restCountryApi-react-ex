import './style.css'

const CountryCard = ({flagImageLink,name,capitalName})=>{
    return(
        <div className='countryCard-wrapper'>
           <div className='countryCard-flagImage__wrapper'>
               <img className='countryCard-flagImage' src={flagImageLink} alt={name}/>
           </div>

           <div className='countryCard--title'>
               <p className='countryCard--title__name'>{name}</p>
               <p className='countryCard--title__capitalName'>{capitalName}</p>
           </div>
        </div>
    )
}

export default CountryCard