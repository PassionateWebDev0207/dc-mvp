import { createSelector } from 'reselect';

const authDomain = (state) => state.auth
const adminDomain = (state) => state.admin
const assetDomain = (state) => state.asset

const makeSelectAuthLoading = () => createSelector(
  authDomain,
  (subdomain) => subdomain.isLoading,
);

const makeSelectAuthError = () => createSelector(
  authDomain,
  (subdomain) => subdomain.error,
);

const makeSelectAdminLoading = () => createSelector(
  adminDomain,
  (subdomain) => subdomain.isLoading
)

const makeSelectAdminError = () => createSelector(
  adminDomain,
  (subdomain) => subdomain.error
)

const makeSelectAccounts = () => createSelector(
  adminDomain,
  (subdomain) => subdomain.accounts
)

const makeSelectHistory = () => createSelector(
  adminDomain,
  (subdomain) => subdomain.history
)

const makeSelectAccountsCount = () => createSelector(
  adminDomain,
  (subdomain) => subdomain.accountsTotalCount
)

const makeSelectHistoryCount = () => createSelector(
  adminDomain,
  (subdomain) => subdomain.historyTotalCount
)

const makeSelectAssetLoading = () => createSelector(
  assetDomain,
  (subdomain) => subdomain.isLoading
)


const makeSelectAssetList = () => createSelector(
  assetDomain,
  (subdomain) => subdomain.list
)


const makeSelectAssetCount = () => createSelector(
  assetDomain,
  (subdomain) => subdomain.totalCount
)


const makeSelectAssetError = () => createSelector(
  assetDomain,
  (subdomain) => subdomain.error
)

export {
  makeSelectAuthLoading,
  makeSelectAuthError,
  makeSelectAdminLoading,
  makeSelectAdminError,
  makeSelectAccounts,
  makeSelectHistory,
  makeSelectAccountsCount,
  makeSelectHistoryCount,
  makeSelectAssetLoading,
  makeSelectAssetList,
  makeSelectAssetCount,
  makeSelectAssetError,
};
