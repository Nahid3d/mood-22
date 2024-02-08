function woodQuentite(chairQuentite , tableQuentite , bedquentite){
    const perchariWood =3;
    const perTableWood =10;
    const perBedWood =50;

    const totalwoodchair = chairQuentite * perchariWood;
    const totalwoodtable = tableQuentite * perTableWood;
    const totalwoodBed   = bedquentite   * perBedWood  ;

    const totalwood = totalwoodchair + totalwoodtable + totalwoodBed;

    return totalwood;

}
const wood = woodQuentite(2,4,3);
console.log('total wood :', wood);