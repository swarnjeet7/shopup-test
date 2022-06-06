import EditItem from "./editItem";

function EditItems(props) {
  const { list } = props.data;
  let editItems = [];

  function handleRecursiveHtml(item) {
    editItems.push(
      <EditItem {...item} key={item.id} marginLeft={editItems.length * 10} />
    );

    if (item?.children?.length) {
      return handleRecursiveHtml(item.children[0]);
    }
    return editItems;
  }

  return (
    <div>
      {list.map((item) => {
        editItems = [];
        if (item?.children?.length) {
          return <div className="editItems">{handleRecursiveHtml(item)}</div>;
        } else {
          return (
            <div className="editItems">
              <EditItem {...item} key={item.id} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default EditItems;
