import React from 'react';

export const GetTableData = () => {
  const [editData, setEditData] = React.useState<string | undefined | object>();
  const handleSetData = (data: string | object) => {
    setEditData(data);
  };
  console.log(editData, 'nnnnnnnnnnnnnnnn');

  return { editData, handleSetData };
};
