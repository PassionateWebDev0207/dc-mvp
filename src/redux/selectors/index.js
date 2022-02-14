import { createSelector } from 'reselect';

const productDomain = (state) => state.product

const makeSelectProductLoading = () => createSelector(
  productDomain,
  (subdomain) => subdomain.isLoading
)


const makeSelectProductList = () => createSelector(
  productDomain,
  (subdomain) => subdomain.list
)


const makeSelectProductCount = () => createSelector(
  productDomain,
  (subdomain) => subdomain.totalCount
)


const makeSelectProductError = () => createSelector(
  productDomain,
  (subdomain) => subdomain.error
)

export {
  makeSelectProductLoading,
  makeSelectProductList,
  makeSelectProductCount,
  makeSelectProductError,
};
