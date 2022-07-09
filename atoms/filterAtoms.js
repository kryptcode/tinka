import { atom } from 'recoil'

export const DescOrderState = atom({
    key: 'DescOrder',
    default: false,
});

export const AscOrderState = atom({
    key: 'AscOrder',
    default: false,
});