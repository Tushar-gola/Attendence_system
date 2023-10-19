import React from 'react';

export const GetTableData = () => {
  const [data, setData] = React.useState<string | undefined | object>();
  const handleSetData = (data: string | object) => {
    setData(data);
  };
  console.log(data, 'nnnnnnnnnnnnnnnn');

  return { data, handleSetData };
};
