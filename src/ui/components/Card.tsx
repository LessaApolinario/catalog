import styles from "../styles/components/Card.module.scss"

interface CardProps {
  imagePath: string
  productName: string
  units: number
  price: number
}

function Card({ imagePath, productName, units, price }: CardProps) {
  function convertToComma(price: number) {
    console.log(price)
    const priceAsString = price.toString()
    return priceAsString.replace(".", ",").padEnd(7, "0")
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
