const data = {
  categories: {
    group: "Category",
    root_id: 1,
    list: [
      {
        id: 3,
        name: "test",
        children: [{ id: 4, name: "test1", children: [] }],
      },
      {
        id: 5,
        name: "parallel",
        children: [
          {
            id: 7,
            name: "test2",
            children: [{ id: 10, name: "aaaa", children: [] }],
          },
        ],
      },
      { id: 6, name: "test1", children: [] },
    ],
  },
};

export default data;
