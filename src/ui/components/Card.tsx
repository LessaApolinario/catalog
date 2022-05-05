import styles from "../styles/components/Card.module.scss"

interface CardProps {
  imagePath: string
  productName: string
  units: number
  price: number
}

function Card({ imagePath, productName, units, price }: CardProps) {
  function convertToComma(price: number) {
    const priceAsString = price.toString()
    return priceAsString.replace(".", ",")
  }

  return (
    <div className={styles.container}>
      <img src={imagePath} alt="Produto" />
      <div>
        <div>
          <span>{productName}</span>
          <span>{units} units</span>
        </div>
        <div>${convertToComma(price)}</div>
      </div>
    </div>
  )
}

export default Card
