export interface IGatePosition {
    info: unknown;
    symbol: string;
    timestamp: number;
    datetime: string;
    initialMargin: number;
    initialMarginPercentage: number;
    maintenanceMargin: number;
    maintenanceMarginPercentage: number;
    entryPrice: number;
    notional: number;
    leverage: number;
    unrealizedPnl: number;
    contracts: number;
    contractSize: number;
    marginRatio: number;
    collateral: number;
    marginType: string;
    side: string;
    percentage: number;
  }
  
  export interface IGateBalance {
    asset: string;
    walletBalance: string;
    unrealizedProfit: string;
    marginBalance: string;
    maintMargin: string;
    initialMargin: string;
    positionInitialMargin: string;
    openOrderInitialMargin: string;
    maxWithdrawAmount: string;
    crossWalletBalance: string;
    crossUnPnl: string;
    availableBalance: string;
    marginAvailable: boolean;
    updateTime: string;
  }
  
  export interface IGateTickerInformations {
    symbol: string;
    priceChange: string;
    priceChangePercent: string;
    weightedAvgPrice: string;
    prevClosePrice: string;
    lastPrice: string;
    lastQty: string;
    bidPrice: string;
    bidQty: string;
    askPrice: string;
    askQty: string;
    openPrice: string;
    highPrice: string;
    lowPrice: string;
    volume: string;
    quoteVolume: string;
    openTime: string;
    closeTime: string;
    firstId: string;
    lastId: string;
    count: string;
  }
  
  export interface IGateTicker {
    symbol: string;
    timestamp: number;
    datetime: string;
    high: number;
    low: number;
    bid: number;
    bidVolume: number;
    ask: number;
    askVolume: number;
    vwap: number;
    open: number;
    close: number;
    last: number;
    previousClose: number;
    change: number;
    percentage: number;
    average: undefined;
    baseVolume: number;
    quoteVolume: number;
    info: IGateTickerInformations;
  }
  
  export interface IGateTickerInformations {
    symbol: string;
    priceChange: string;
    priceChangePercent: string;
    weightedAvgPrice: string;
    prevClosePrice: string;
    lastPrice: string;
    lastQty: string;
    bidPrice: string;
    bidQty: string;
    askPrice: string;
    askQty: string;
    openPrice: string;
    highPrice: string;
    lowPrice: string;
    volume: string;
    quoteVolume: string;
    openTime: string;
    closeTime: string;
    firstId: string;
    lastId: string;
    count: string;
  }