export interface Wallet {
  icon: string;
  name: string;
  chain: string;
  address: string;
  domain?: string;
}

export const WALLETS: Wallet[] = [
  {
    icon: "ethereum.svg",
    name: "Ethereum",
    chain: "ERC20",
    address: "0x59ec567e868b06b132f6d31f117795822beaa147",
    domain: "defiargentina.eth",
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
    chain: "MATIC",
    address: "0x59ec567e868b06b132f6d31f117795822beaa147",
  },
  {
    icon: "tron.svg",
    name: "Tron",
    chain: "TRC20",
    address: "TTzbrg6M4mXefWHR3muz6mzeKf1B6ugR57",
  },
  {
    icon: "polkadot.svg",
    name: "Polkadot",
    chain: "Polkadot",
    address: "0x59ec567e868b06b132f6d31f117795822beaa147",
  },
  {
    icon: "tron.svg",
    name: "Cosmos",
    chain: "Cosmos",
    address: "0x59ec567e868b06b132f6d31f117795822beaa147",
  },
];
