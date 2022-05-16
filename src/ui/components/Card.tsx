import styles from "../styles/components/Card.module.scss"

interface CardProps {
  imagePath: string
  productName: string
  units: number
  price: number
}

function Card({ imagePath, productName, units, price }: CardProps) {
  function precisePrice(price: number) {
    const priceAsString = price.toString()

    if (priceAsString.includes(".")) {
      const decimalPoint = priceAsString.indexOf(".")
      const integerPart = priceAsString.substring(decimalPoint, -1)
      const decimalPart = priceAsString.substring(decimalPoint + 1)
      return integerPart + "." + decimalPart.padEnd(3, "0")
    }

    return price
  }

  function convertToComma(price: number) {
    const newPrice = precisePrice(price)
    const priceAsString = newPrice.toString()
    return priceAsString.replace(".", ",")
  }

  return (
    <div className={styles.container}>
      <img src={imagePath} alt="Produto" />
      <div className={styles.productInfo}>
        <div>
          <span>{productName}</span>
          <span className={styles.units}>{units} units</span>
        </div>
        <div>${convertToComma(price)}</div>
      </div>
    </div>
  )
}

export default Card
