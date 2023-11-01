/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
export const isAppendRow = (setRows, row) => {    
    setRows(prev => {
        const data = [...prev];
        if (data.find(d => d.id === row?.id)) {
            return data.map((d) => {
                if (d?.id === row.id) {
                    d = _.cloneDeep(row);
                    return d;
                } else {
                    return d;
                }
            });
        } else {
            return [row, ...data];
        }
    });
};