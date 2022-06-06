import EditIcon from "../assets/edit.svg";

function EditItem(props) {
  const { name, marginLeft } = props;

  return (
    <div className="editItem" style={{ marginLeft }}>
      <div className="edit-text">{name}</div>
      <img src={EditIcon} alt="pencil" width="20" height="20" />
    </div>
  );
}

export default EditItem;
