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
    address: "0xc600ccC02D08E432B812b01406f9E1F9aD142778",
    domain: "defiargentina.eth",
  },
  {
    icon: "bnb-chain.svg",
    name: "BNB Chain",
    chain: "BEP20",
    address: "0x449A1AC9c7AB3a14431d700D45040124D3269f1B",
  },
  {
    icon: "tron.svg",
    name: "Tron",
    chain: "TRC20",
    address: "TTzbrg6M4mXefWHR3muz6mzeKf1B6ugR57",
  },
  {
    icon: "polygon.svg",
    name: "Polygon",
    chain: "MATIC",
    address: "0x5B06bff581bA31Fc3560dbAEFe87C514bFFf65A7",
  },
];
