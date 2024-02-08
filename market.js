function marketPlane(shart , pent , show){
    const pershart = 500;
    const perpent = 700;
    const pershow = 1100;

    const totalShartPrice = shart * pershart;
    const totalPentPrice = pent * perpent;
    const totalShowPrice = show * pershow;

    const allMarketPrices = totalShartPrice + totalPentPrice + totalShowPrice;
     return allMarketPrices;
}
const market = marketPlane(5,5,5);
console.log('Total Market Prices:-' , market);