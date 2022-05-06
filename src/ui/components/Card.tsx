import styles from "../styles/components/Card.module.scss"

interface CardProps {
  imagePath: string
  productName: string
  units: number
  price: number
}

function Card({ imagePath, productName, units, price }: CardProps) {
  // TODO:: criar uma função que conte os números após a vírgula
  function precisePrice(price: number) {
    const priceAsString = price.toString()
    // por onde começar a contagem em busca dos números após a vírgula
    // por enquanto ainda estamos considerando que não trocamos pore vírgula
    const startingPoint = priceAsString.indexOf(".")
    console.log(startingPoint) // 1

    const decimalNumber = priceAsString.slice(startingPoint + 1, priceAsString.length)
    console.log(decimalNumber) // 5

    const precisions: Record<number, string> = {
      1: price.toPrecision(3),
      2: price.toPrecision(2),
      3: price.toPrecision(1)
    }
  }

  function convertToComma(price: number) {
    precisePrice(price)
    console.log(price.toPrecision(2))
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
