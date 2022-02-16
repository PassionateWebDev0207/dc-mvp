import React, { useEffect, useState } from 'react'
import { Input, Button, Image, Rate, Pagination } from 'antd'
import { products as allProducts } from '../../assets/products/products'
import CaretDown from '../../assets/images/CaretDown.svg'
import CaretDownPrimary from '../../assets/images/CaretDownPrimary.svg'
import './style.less'

const Products = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [pageStart, setPageStart] = useState(0)
  const [pageEnd, setPageEnd] = useState(0)
  const [filterOption, setFilterOption] = useState('All Items')
  const [sortBy, setSortBy] = useState('Price - High to Low')
  const pageLimitOptions = [10, 25, 50, 100]
  const filterOptions = ['All Items', 'Best Sellers', 'Features']

  const getProductsForCurrentPage = (pageNumber, countPerPage) => {
    const productList = [...allProducts]
    if (countPerPage * pageNumber > productList.length) {
      const start = countPerPage * (pageNumber - 1)
      const end = productList.length
      setPageStart(start)
      setPageEnd(end)
      setProducts(productList.slice(start, end))
    } else {
      const start = countPerPage * (pageNumber - 1)
      const end = countPerPage * pageNumber
      setPageStart(start)
      setPageEnd(end)
      setProducts(productList.slice(start, end))
    }
  }

  useEffect(() => {
    getProductsForCurrentPage(page, limit)
  }, [page, limit])

  return (
    <div className="products">
      <div className="products-filter dc-container d-flex align-center justify-space-between">
        <div className="search d-flex align-center">
          <Input placeholder="Search Ollivander's item" />
          <Button type="primary">Search</Button>
        </div>
        <div className="filter-options d-flex align-center">
          {filterOptions.map(option => (
            <div
              className={`filter-option ${option === filterOption ? 'selected' : ''}`}
              key={option}
              onClick={() => setFilterOption(option)}
            >{option}</div>
          ))}
        </div>
        <div className="sort d-flex align-center">
          <span className="label">Sort by: </span>
          <span className="sort-by">{sortBy}</span>
          <Image src={CaretDownPrimary} preview={false} />
        </div>
      </div>
      <div className="products-container dc-container">
        {products.map((product, index) => (
          <div className="product" key={`product-item-${index}`}>
            <div className="logo" style={{ backgroundImage: `url(${product.image})` }} />
            <div className="tags d-flex">
              <div className="tag sales">{product.sales}%</div>
              <div className="tag free-shipping">Free Shipping</div>
            </div>
            <div className="reviews">
              <Rate value={product.overallRating} />
              <span className="content">{`${product.reviews} Review`}</span>
            </div>
            <div className="title">
              <a href={product.shopLink}>{product.shop}</a>
              <span> / {product.productName}</span>
            </div>
            <div className="cost d-flex align-center">
              <span className="current-cost">$46.<sup>00</sup></span>
              <span className="origin-cost">$64.<sup>00</sup></span>
            </div>
            <div className="buy">
              <Button type="primary" ghost block>Buy</Button>
            </div>
          </div>
        ))}
      </div>
      <div className="products-pagination dc-container d-flex align-center justify-space-between">
        <div className="status">
          {`${pageStart + 1}-${pageEnd} of ${allProducts.length}`}
        </div>
        <div className="control">
          <Pagination
            total={allProducts.length}
            pageSize={10}
            defaultCurrent={1}
            showSizeChanger={false}
            onChange={(page) => setPage(page)}
          />
        </div>
        <div className="size-options d-flex align-center">
          <span>{`Per Page: ${limit}`}</span>
          <Image src={CaretDown} preview={false} width={10} height={10} />
        </div>
      </div>
    </div>
  )
}

export default Products