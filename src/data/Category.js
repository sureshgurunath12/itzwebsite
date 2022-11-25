import { sofa } from "./Productdata/sofa";
import { armchair } from "./Productdata/armchair";
import { consoles } from "./Productdata/consoles";
import { tables } from "./Productdata/tables";
import { mirrors } from "./Productdata/mirrors-frames";
import { accessories } from "./Productdata/accessories";
import { idols } from "./Productdata/idols";
import { art } from "./Productdata/art";

export const CategoryArray = [
  {
    id: "sofas",
    type: "silver",
    title: "LOUNGERS & SOFAS",
    desc: "Khenshu- Loungers & Sofa Collections",
  },
  {
    id: "armcharis",
    type: "silver",
    title: "ARMCHAIRS",
    desc: "Khenshu- Loungers & Sofa Collections",
  },
  {
    id: "consoles",
    type: "silver",
    title: "CONSOLES",
    desc: "Khenshu- Loungers & Sofa Collections",
  },
  {
    id: "tables",
    type: "silver",
    title: "TABLES",
    desc: "Khenshu- Loungers & Sofa Collections",
  },
  {
    id: "mirrors-frames",
    type: "silver",
    title: "MIRRORS & FRAMES",
    desc: "Khenshu- Loungers & Sofa Collections",
  },
  {
    id: "accessories",
    type: "silver",
    title: "ACCESSORIES",
    desc: "Khenshu- Loungers & Sofa Collections",
  },
  {
    id: "idols",
    type: "silver",
    title: "IDOLS",
    desc: "Khenshu- Loungers & Sofa Collections",
  },
  {
    id: "art",
    type: "pichwai",
    title: "ART",
    desc: "Khenshu- Art Collections",
  },
];

export const ProductLists = [
  ...sofa,
  ...armchair,
  ...consoles,
  ...tables,
  ...mirrors,
  ...accessories,
  ...idols,
  ...art,
];
export const ImageArray = [
  {
    id: 1,
    productid: 1,
    categoryid: 1,
    url: "https://khenshu.com/img/lounger/01.png",
  },
  {
    id: 2,
    productid: 1,
    categoryid: 1,
    url: "https://www.khenshu.com/img/lounger/01.png",
  },
];
