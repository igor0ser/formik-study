import { isEqual, isEmpty, keys } from "lodash";

export const whatChanged = (o1, o2) => {
    const res = {};
    const keys1 = keys(o1);
    const keys2 = keys(o2);

    keys1.forEach(key => {
        if (!isEqual(o1[key], o2[key])) {
            res[key] = {
                prev: o1[key],
                next: o2[key],
            };
        }
    });

    keys2.forEach(key => {
        if (!keys1.includes(key)) {
            res[key] = {
                prev: o1[key],
                next: o2[key],
            };
        }
    });
    if (!isEmpty(res)) {
        // tslint:disable-next-line:no-console
        console.log(res);
    }
    return res;
};