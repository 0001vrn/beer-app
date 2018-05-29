// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface BeerPaginationList {
    currentPage:   number;
    numberOfPages: number;
    totalResults:  number;
    data:          Beer[];
    status:        string;
}

export interface Beer {
    id:                         string;
    name:                       string;
    nameShortDisplay?:          string;
    description:                string;
    website?:                   string;
    isOrganic:                  string;
    images?:                    Images;
    status:                     string;
    statusDisplay:              string;
    createDate:                 string;
    updateDate:                 string;
    isMassOwned?:               string;
    brandClassification?:       string;
    type:                       string;
    nameDisplay?:               string;
    abv?:                       string;
    ibu?:                       string;
    glasswareId?:               number;
    srmId?:                     number;
    availableId?:               number;
    styleId?:                   number;
    servingTemperature?:        string;
    servingTemperatureDisplay?: string;
    glass?:                     Glass;
    srm?:                       Srm;
    available?:                 Available;
    style?:                     Style;
}

export interface Available {
    id:          number;
    name:        string;
    description: string;
}

export interface Glass {
    id:         number;
    name:       string;
    createDate: string;
}

export interface Images {
    icon:         string;
    medium:       string;
    large:        string;
    squareMedium: string;
    squareLarge:  string;
}

export interface Srm {
    id:   number;
    name: string;
    hex:  string;
}

export interface Style {
    id:          number;
    categoryId:  number;
    category:    Glass;
    name:        string;
    shortName:   string;
    description: string;
    ibuMin:      string;
    ibuMax:      string;
    abvMin:      string;
    abvMax:      string;
    srmMin:      string;
    srmMax:      string;
    ogMin:       string;
    fgMin:       string;
    fgMax:       string;
    createDate:  string;
    updateDate:  string;
}