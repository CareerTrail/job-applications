import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  ApplicationStatus,
  ApplicationSources,
  InterviewType,
  useGetApplicationsQuery,
} from "../../services/applicationApi.ts";
import { Info } from "@mui/icons-material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

const applicationSourcesArray = Object.values(ApplicationSources);
const applicationStatusArray = Object.values(ApplicationStatus);
const interviewTypeArray = Object.values(InterviewType);

export const Applications = () => {
  // TODO: control page, sorting and limit in query
  const { data } = useGetApplicationsQuery({
    page: 1,
    limit: 10,
    sort: "",
  });
  const navigate = useNavigate();
  const infoButtonClickHandler = (rowId: string) => {
    navigate(`/applications/${rowId}`);
  };
  const addButtonClickHandler = () => {
    navigate("add");
  };
  const columns: GridColDef[] = [
    {
      field: "infoButton",
      width: 50,
      headerName: "Info",
      renderCell: (params) => (
        <Info
          sx={{
            cursor: "pointer",
          }}
          onClick={() => infoButtonClickHandler(params.row.id)}
        />
      ),
    },
    {
      field: "companyName",
      headerName: "Company Name",
      flex: 1,
      editable: true,
      valueGetter: (params) => params.row.company.name,
    },
    {
      field: "applyingDate",
      headerName: "Applying Date",
      flex: 1,
      type: "date",
      editable: true,
      valueGetter: (params) => new Date(params.value),
    },
    {
      field: "position",
      headerName: "Position",
      flex: 1,
      editable: true,
    },
    {
      field: "source",
      headerName: "Application source",
      type: "singleSelect",
      valueOptions: applicationSourcesArray,
      flex: 1,
      editable: true,
    },
    {
      field: "status",
      headerName: "Application Status",
      type: "singleSelect",
      valueOptions: applicationStatusArray,
      flex: 1,
      editable: true,
    },
    {
      field: "salary",
      headerName: "Salary Range",
      flex: 1,
      editable: true,
    },
    {
      field: "nextInterviewDate",
      headerName: "Next Interview Date",
      flex: 1,
      type: "dateTime",
      editable: true,
      valueGetter: (params) => new Date(params.row.nextInterviewDate),
    },
    {
      field: "currentStage",
      headerName: "Current Stage",
      type: "singleSelect",
      valueOptions: interviewTypeArray,
      flex: 1,
      editable: true,
    },
  ];
  return (
    <>
      <Box
        component={"div"}
        sx={{
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography color={"#000"} variant={"h5"}>
            Applications
          </Typography>
          <IconButton color={"success"} onClick={addButtonClickHandler}>
            <ControlPointIcon />
          </IconButton>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            padding: "10px",
          }}
        >
          {data && (
            <DataGrid
              rows={data.data}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: Number(data.pagination.limit),
                    page: Number(data.pagination.page),
                  },
                },
              }}
              pageSizeOptions={[5, 10, 15]}
              disableRowSelectionOnClick
            />
          )}
        </Paper>
      </Box>
      <Outlet />
    </>
  );
};
