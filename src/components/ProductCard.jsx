import './ProductCard.css'

const price = () =>
  Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(Math.random() * 1000)

const imageSize = () => parseInt(Math.random() * 1000)

export function ProductCard() {
  return (
    <div className="card stacked rounded-top">
      <img
        loading="lazy"
        className="card__img rounded-top-0"
        src={`//unsplash.it/${imageSize()}`}
        alt=""
      />
      <div className="card__content bg-light-gray rounded-top">
        <h2 className="card__title text-firebrick">Lorem, ipsum dolor.</h2>
        <p className="card__price">{price()}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fuga
          numquam reiciendis cum! Corrupti, nulla.
        </p>
      </div>
    </div>
  )
}
