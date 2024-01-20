export interface Wallet {
  icon: string;
  name: string;
  chain: string;
  address: string;
  domain?: string;
  isLink?: boolean;
}

export const WALLETS: Wallet[] = [
  {
    icon: "solana.svg",
    name: "Solana",
    chain: "Solana",
    address: "6N5TU8HhDTwCuJUPNaFzbgEvDkAXx2ZLuR2j1KG5VECw",
  },
  {
    icon: "bitcoin.svg",
    name: "Bitcoin",
    chain: "Bitcoin",
    address: "38WRmztKm7WDnPQvQAneyB1QjL77P2ngqX",
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
    address: "https://getalby.com/p/defiargentina",
    isLink: true,
  },
  {
    icon: "rootstock.svg",
    name: "Rootstock",
    chain: "Rootstock",
    address: "0xbb65d4af985bee52e9e73902006cb59e89438bb7",
  },
];
