function calculateMoney(ticketSale ){
    let income = ticketSale * 120;
     const daronCharge =500;
     const staffBill =400;
     const totalKhoros = daronCharge + staffBill;
     const totalBill= income - totalKhoros;
     return totalBill;
     
   
     
}
// const totalTicket = calculateMoney(10);
// console.log(totalTicket);
