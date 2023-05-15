import { atom } from 'recoil';

// Define your atoms
export const formDataState = atom({
  key: 'formDataState',
  default: {
    name: '',
    lname: '',
    email: '',
    phoneNum: '',
    address: '',

    deposit: 500,
    options: '',
    accessories: 0,
    labour: 0,
    trade: '',
    stockNum: '',
    year: 2023,
    licensing: 0,

    preTax: 0,
    onTax: 0,
    qcTax: 0,
    on84: 0,
    on72: 0,
    months: 60,
    iRate: 0.1099,
    otherTax: 0.13,
    payment: 0,
    onTotal: 0,
    qcTotal: 0,
    newtotal: 0,
    trailer: 0,

    msrpUsed: 0,

    BEandTR: 1699,
    licensingMan: 149,
    licensingManTr: 99,
    tireTaxMan: 29,
    dts: 0,
    verado: 0,
    motor: 0,

    sigPkgCruise: 0,
    biminiCr: 0,
    wallColCr: '',
    colorCruise: '',

    sigPkgExplore: 0,
    selPkgExplore: 0,
    tubesExplore: 0,
    colorExplore: '',
    wallColorExplore: '',

    sigPkgLX: 0,
    selRFXPkgLX: 0,
    selRFXWPkgLX: 0,
    blkPkgLX: 0,
    colMatchedFiberLX: 0,
    powderCoatingLX: 0,
    blackAnoLX: 0,
    premiumJLLX: 0,
    JLTowerLX: 0,
    wallColorLX: '',
    wallGraphicLX: '',
    wallGraphicAccentLX: '',
    fibreGlassPodsLX: '',
    powderCoatLX: '',
    furnitureLX: '',
    flooringLX: '',

    battery: 0,
    propeller: 0,
    gps: 0,
    saltwaterPkg: 0,

    baseInst: 0,
    cupHolder: 0,
    multiHolder: 0,
    cooler13: 0,
    stemwareHolder: 0,
    coolerExtension: 0,
    coolerBag14: 0,
    singleHolder: 0,
    cargoBox10: 0,
    cargoBox20: 0,
    cargoBox30: 0,
    rodHolder: 0,








  }
});



// Export other atoms as needed
export const fetchedDataState = atom({
  key: 'fetchedDataState',
  default: null,
});  