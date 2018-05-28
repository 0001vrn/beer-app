// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Welcome {
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

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export namespace Convert {
    export function toWelcome(json: string): Welcome {
        return cast(JSON.parse(json), r("Welcome"));
    }

    export function welcomeToJson(value: Welcome): string {
        return JSON.stringify(value, null, 2);
    }

    function cast<T>(obj: any, typ: any): T {
        if (!isValid(typ, obj)) {
            throw Error(`Invalid value`);
        }
        return obj;
    }

    function isValid(typ: any, val: any): boolean {
        if (typ === "any") { return true; }
        if (typ === null) { return val === null; }
        if (typ === false) { return false; }
        while (typeof typ === "object" && typ.ref !== undefined) {
            typ = typeMap[typ.ref];
        }
        if (Array.isArray(typ)) { return isValidEnum(typ, val); }
        if (typeof typ === "object") {
            return typ.hasOwnProperty("unionMembers") ? isValidUnion(typ.unionMembers, val)
                : typ.hasOwnProperty("arrayItems")    ? isValidArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props")         ? isValidObject(typ.props, typ.additional, val)
                : false;
        }
        return isValidPrimitive(typ, val);
    }

    function isValidPrimitive(typ: string, val: any) {
        return typeof typ === typeof val;
    }

    function isValidUnion(typs: any[], val: any): boolean {
        // val must validate against one typ in typs
        return typs.some((typ) => isValid(typ, val));
    }

    function isValidEnum(cases: string[], val: any): boolean {
        return cases.indexOf(val) !== -1;
    }

    function isValidArray(typ: any, val: any): boolean {
        // val must be an array with no invalid elements
        return Array.isArray(val) && val.every((element) => {
            return isValid(typ, element);
        });
    }

    function isValidObject(props: { [k: string]: any }, additional: any, val: any): boolean {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return false;
        }
        return Object.getOwnPropertyNames(val).every((key) => {
            const prop = val[key];
            if (Object.prototype.hasOwnProperty.call(props, key)) {
                return isValid(props[key], prop);
            }
            return isValid(additional, prop);
        });
    }

    function a(typ: any) {
        return { arrayItems: typ };
    }

    function u(...typs: any[]) {
        return { unionMembers: typs };
    }

    function o(props: { [k: string]: any }, additional: any) {
        return { props, additional };
    }

    function m(additional: any) {
        return { props: {}, additional };
    }

    function r(name: string) {
        return { ref: name };
    }

    const typeMap: any = {
        "Welcome": o({
            currentPage: 0,
            numberOfPages: 0,
            totalResults: 0,
            data: a(r("Datum")),
            status: "",
        }, false),
        "Datum": o({
            id: "",
            name: "",
            nameShortDisplay: u(undefined, ""),
            description: "",
            website: u(undefined, ""),
            isOrganic: "",
            images: u(undefined, r("Images")),
            status: "",
            statusDisplay: "",
            createDate: "",
            updateDate: "",
            isMassOwned: u(undefined, ""),
            brandClassification: u(undefined, ""),
            type: "",
            nameDisplay: u(undefined, ""),
            abv: u(undefined, ""),
            ibu: u(undefined, ""),
            glasswareId: u(undefined, 0),
            srmId: u(undefined, 0),
            availableId: u(undefined, 0),
            styleId: u(undefined, 0),
            servingTemperature: u(undefined, ""),
            servingTemperatureDisplay: u(undefined, ""),
            glass: u(undefined, r("Glass")),
            srm: u(undefined, r("Srm")),
            available: u(undefined, r("Available")),
            style: u(undefined, r("Style")),
        }, false),
        "Available": o({
            id: 0,
            name: "",
            description: "",
        }, false),
        "Glass": o({
            id: 0,
            name: "",
            createDate: "",
        }, false),
        "Images": o({
            icon: "",
            medium: "",
            large: "",
            squareMedium: "",
            squareLarge: "",
        }, false),
        "Srm": o({
            id: 0,
            name: "",
            hex: "",
        }, false),
        "Style": o({
            id: 0,
            categoryId: 0,
            category: r("Glass"),
            name: "",
            shortName: "",
            description: "",
            ibuMin: "",
            ibuMax: "",
            abvMin: "",
            abvMax: "",
            srmMin: "",
            srmMax: "",
            ogMin: "",
            fgMin: "",
            fgMax: "",
            createDate: "",
            updateDate: "",
        }, false),
    };
}
