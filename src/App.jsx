import { ProductGrid } from './components/ProductGrid'
import { ProductCard } from './components/ProductCard'

function range(limit = 10) {
  const items = []

  for (let i = 1; i <= limit; i++) {
    items.push(i)
  }

  return items
}

export function App() {
  return (
    <main>
      <div className="container">
        <ProductGrid>
          {range(107).map((i) => (
            <ProductCard key={i} />
          ))}
        </ProductGrid>
      </div>
    </main>
  )
}
