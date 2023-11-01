import React from 'react';

export const GetTableData = () => {
  const [editData, setEditData] = React.useState<string | undefined | object | [key: unknown] >();
  const handleSetData = (data: string | object) => {
    setEditData(data);
  };
  return { editData, handleSetData };
};
