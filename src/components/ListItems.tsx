// ListItems.tsx
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGlobalContext } from "../contexts/hooks";

const ListItems = () => {
  const context = useGlobalContext();

  if (!context) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textTransform: "uppercase" }}>Loading...</h1>
      </div>
    );
  }

  const {
    listItems,
    handleDelete,
    handleCheckboxChange,
    searchTerm,
    searchedListItems,
  } = context;

  const dense = false;

  if (listItems.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textTransform: "uppercase" }}>No Items Found</h1>
      </div>
    );
  }

  return (
    <>
      <List dense={dense}>
        {searchTerm
          ? searchedListItems.map((item) => (
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <Checkbox
                      checked={item.isChecked}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.value} />
              </ListItem>
            ))
          : listItems.map((item) => (
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <Checkbox
                      checked={item.isChecked}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.value} />
              </ListItem>
            ))}
      </List>
    </>
  );
};

export default ListItems;
