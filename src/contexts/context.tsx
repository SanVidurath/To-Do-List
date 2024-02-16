// context.tsx
import React, { ReactNode, useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface ListItem {
  id: number;
  value: string;
  isChecked: boolean;
}

interface AppContextProps {
  listItems: ListItem[];
  setListItems: Dispatch<SetStateAction<ListItem[]>>;
  handleDelete: (idToFind: number) => void;
  completedItems: ListItem[];
  activeItems: ListItem[];
  handleCheckboxChange: (idToFind: number) => void;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchedListItems: ListItem[];
}

export const AppContext = React.createContext<AppContextProps | undefined>(
  undefined
);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (idToFind: number) => {
    setListItems((prevValue) =>
      prevValue.filter((item) => item.id !== idToFind)
    );
  };

  const handleCheckboxChange = (idToFind: number) => {
    setListItems((prevItems) =>
      prevItems.map((item) =>
        item.id === idToFind ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const completedItems = listItems.filter((item) => item.isChecked);
  const activeItems = listItems.filter((item) => !item.isChecked);

  const searchedListItems = listItems.filter((item) =>
    item.value.includes(searchTerm)
  );

  return (
    <AppContext.Provider
      value={{
        listItems,
        setListItems,
        handleDelete,
        completedItems,
        activeItems,
        handleCheckboxChange,
        searchTerm,
        setSearchTerm,
        searchedListItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
