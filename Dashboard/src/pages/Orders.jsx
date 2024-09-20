import React, { useState } from "react";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import avatar from "../data/avatar.jpg";
import avatar2 from "../data/avatar2.jpg";
// import avatar3 from "../data/avatar3.jpg"
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "PhotoUrl",
    headerName: "PhotoUrl",
    width: 90,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="Avatar"
        width={30}
        height={30}
        style={{ borderRadius: "20px", position: "relative", top: "10px" }}
      />
    ),
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, PhotoUrl: avatar, lastName: "Snow", firstName: "Jon", age: 14 },
  {
    id: 2,
    PhotoUrl: avatar2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 31,
  },
  {
    id: 3,
    PhotoUrl: avatar,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 31,
  },
  { id: 4, PhotoUrl: avatar, lastName: "Stark", firstName: "Arya", age: 11 },
  {
    id: 5,
    PhotoUrl: avatar2,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
  },
  {
    id: 6,
    PhotoUrl: avatar,
    lastName: "Melisandre",
    firstName: null,
    age: 150,
  },
  {
    id: 7,
    PhotoUrl: avatar2,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
  },
  {
    id: 8,
    PhotoUrl: avatar,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
  },
  {
    id: 9,
    PhotoUrl: avatar2,
    lastName: "Roxie",
    firstName: "Ronaldo",
    age: 65,
  },
  { id: 10, PhotoUrl: avatar, lastName: "Roxie", firstName: "Smith", age: 64 },
  {
    id: 11,
    PhotoUrl: avatar2,
    lastName: "dayana",
    firstName: "Collman",
    age: 55,
  },
  {
    id: 12,
    PhotoUrl: avatar2,
    lastName: "cris ",
    firstName: "Michael",
    age: 75,
  },
  { id: 13, PhotoUrl: avatar, lastName: "rana", firstName: "Nour", age: 85 },
  {
    id: 14,
    PhotoUrl: avatar,
    lastName: "Aryana ",
    firstName: "The-dog",
    age: 85,
  },
  { id: 15, PhotoUrl: avatar, lastName: "john", firstName: "Cat", age: 85 },
];
const Orders = () => {
  const [pageSize, setpageSize] = useState(5);
  return (
    <div className=" m-2 mt-16 p-2  bg-white rounded-3xl ">
      <Header category="Page" title="Orders" />
      <Box sx={{ height: 400, width: "95%" }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{ textAlign: "center", mt: 3, mb: 3 }}
        >
          Manage Users
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Orders;
