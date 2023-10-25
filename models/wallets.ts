export interface Wallet {
  icon: string;
  name: string;
  chain: string;
  address: string;
  domain?: string;
}

export const WALLETS: Wallet[] = [
  {
    icon: "bitcoin.svg",
    name: "Bitcoin",
    chain: "Bitcoin",
    address: "bc1q9a6rsmk325zadss3dn7zcujt5gdp69c29tmetp3lq3tcj38dj47qgqn7sx"
  },  
  {
    icon: "ethereum.svg",
    name: "Ethereum",
    chain: "ERC20",
    address: "0xe576d24c6AA0E6A2cb3f30A5C18A636bba54FfaE",
  },
  {
    icon: "bnb-chain.svg",
    name: "BNB Chain",
    chain: "BEP20",
    address: "0x59ec567e868b06b132f6d31f117795822beaa147",
  },
  {
    icon: "polygon.svg",
    name: "Polygon",
    chain: "Polygon",
    address: "0x5D039073fC3DD3d9c7Dbc9eC3409bA6957786Bf4",
  },
  {
    icon: "optimism.svg",
    name: "Optimism",
    chain: "Optimism",
    address: "0x59ec567e868b06b132f6d31f117795822beaa147",
  },
  {
    icon: "arbitrum.svg",
    name: "Arbitrum",
    chain: "Arbitrum",
    address: "0x59ec567e868b06b132f6d31f117795822beaa147",
  },
  {
    icon: "tron.svg",
    name: "Tron",
    chain: "TRC20",
    address: "TFs5PpagP26xYdDRQyfFxH9WoV67MeYuHY",
  },
  {
    icon: "polkadot.svg",
    name: "Polkadot",
    chain: "Polkadot",
    address: "12T4ugwsqhQiUmmbkf4u6TbytaVayspqAqMzgrjaDU6sGgPX",
  },
  {
    icon: "cosmos.svg",
    name: "Cosmos",
    chain: "Cosmos",
    address: "cosmos17jlcjvaaexufrlsm3mnesljzhc57zlusfw7tdd",
  },
  {
    icon: "algorand.svg",
    name: "Algorand",
    chain: "Algorand",
    address: "MEBNZFUAWF6YSZ7WHCR3CSIM623AYWKC4XS7O6BQRS5QL7QGFAOGKTTOQA",
  },
  {
    icon: "osmosis.svg",
    name: "Osmosis",
    chain: "Osmosis",
    address: "osmo17jlcjvaaexufrlsm3mnesljzhc57zlusp4dmml",
  },  
  {
    icon: "lightning-network.svg",
    name: "Lightning Network",
    chain: "Lightning Network",
    address: "lnbc1pjjdftdpp59jhjeq6zcj2mj0q4n5gvxvpfzrzhfcxct04xjems6rzgtqwnyewqdqqcqzzgxqyz5vqrzjqwnvuc0u4txn35cafc7w94gxvq5p3cu9dd95f7hlrh0fvs46wpvhd3vz67pxv63jlqqqqqryqqqqthqqpyrzjqw8c7yfutqqy3kz8662fxutjvef7q2ujsxtt45csu0k688lkzu3ld3vz67pxv63jlqqqqqryqqqqthqqpysp5t9yehsug5fydxgwa27dqckf9qlsa39tjzxhvan9r4ysycdmxggys9qypqsqz9k4d8d04xq2cv3dr2ndysfra7dv6gzzvwl9hm9k8ptn0up5mkls7m752adccy6l5uavpf3acd59mzzyrj6um5hx3906cjxcxvz7s6gqayhmju"
  }
];
