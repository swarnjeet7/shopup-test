import "./App.css";
import EditItems from "./components/editItems";

const data = {
  categories: {
    group: "Category",
    root_id: 1,
    list: [
      {
        id: 1,
        name: "test 1",
        children: [{ id: 2, name: "test 2", children: [] }],
      },
      {
        id: 3,
        name: "test 3",
        children: [
          {
            id: 4,
            name: "test 4",
            children: [{ id: 5, name: "test 5", children: [] }],
          },
        ],
      },
      { id: 6, name: "test 6", children: [] },
    ],
  },
};

function App() {
  return (
    <div className="App">
      <EditItems data={data.categories}></EditItems>
    </div>
  );
}

export default App;
