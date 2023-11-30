import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Skeleton,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {ReactElement, useState} from "react";
import { Close, Edit, ExpandMore } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetApplicationQuery,
  useUpdateApplicationMutation,
} from "../../services/applicationApi.ts";
import Box from "@mui/material/Box";
import EditableText from "../../components/EditableText/EditableText.tsx";

export const Application = () => {
  const [open, setOpen] = useState(true);
  const { applicationId } = useParams<{ applicationId: string }>();
  const navigate = useNavigate();
  const { data, isLoading } = useGetApplicationQuery(applicationId || "");
  const [updateApp] = useUpdateApplicationMutation();
  const handleClose = () => {
    setOpen(false);
    navigate("/applications");
  };
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullScreen
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {data
          ? `${data?.position} in ${data?.company.name}`
          : "Job application"}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <Close />
      </IconButton>
      {isLoading && (
        <>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </>
      )}
      {data && (
        <>
          <DialogContent dividers sx={{ background: "#F2F4F6" }}>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Accordion defaultExpanded={true}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Box
                    component={"div"}
                    sx={{ display: "flex", flexDirection: "row", gap: "20px" }}
                  >
                    <Typography variant="h6">General Info</Typography>
                    <Edit color={"primary"} />
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ borderTop: "1px solid rgba(0, 0, 0, .125)" }}
                >
                  <DataRow
                    name={"Company name"}
                    handleUpdate={(text) => {
                      updateApp({
                        id: applicationId || "",
                        data: {
                          company: {
                            name: text || "",
                          },
                        },
                      });
                    }}
                    value={data.company.name}
                  />
                  <DataRow
                    name={"Position name"}
                    handleUpdate={(text) => {
                      updateApp({
                        id: applicationId || "",
                        data: {
                          position: text || "",
                        },
                      });
                    }}
                    value={data.position}
                  />
                  <DataRow
                    name={"Salary range"}
                    handleUpdate={(text) => {
                      updateApp({
                        id: applicationId || "",
                        data: {
                          salary: text || "",
                        },
                      });
                    }}
                    value={data.salary}
                  />
                  <DataRow
                    handleUpdate={(text) => {
                      updateApp({
                        id: applicationId || "",
                        data: {
                          applyingDate: text || "",
                        },
                      });
                    }}
                    name={"Application Date"}
                    value={new Date(data.applyingDate).toString()}
                  />
                  <DataRow
                    handleUpdate={(text) => {
                      updateApp({
                        id: applicationId || "",
                        data: {
                          currentStage: text || "",
                        },
                      });
                    }}
                    name={"Current stage"}
                    value={data.currentStage}
                  />
                  <DataRow
                    handleUpdate={(text) => {
                      updateApp({
                        id: applicationId || "",
                        data: {
                          nextInterviewDate: text || "",
                        },
                      });
                    }}
                    name={"Interview date"}
                    value={new Date(data.nextInterviewDate).toString()}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded={true}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Box
                    component={"div"}
                    sx={{ display: "flex", flexDirection: "row", gap: "20px" }}
                  >
                    <Typography variant="h6">Company Info</Typography>
                    <Edit color={"primary"} />
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ borderTop: "1px solid rgba(0, 0, 0, .125)" }}
                >
                  <DataRow
                    name={"Name"}
                    handleUpdate={(text) => {
                      updateApp({
                        id: applicationId || "",
                        data: {
                          company: {
                            name: text || "",
                          },
                        },
                      });
                    }}
                    value={data.company.name}
                  />
                  <DataRow
                    name={"Type"}
                    handleUpdate={(text) => {
                      updateApp({
                        id: applicationId || "",
                        data: {
                          company: {
                            name: data.company.name,
                            type: text || undefined,
                          },
                        },
                      });
                    }}
                    value={data.company.type}
                  />
                  <DataRow
                    name={"Link to website"}
                    handleUpdate={(text) => {
                      updateApp({
                        id: applicationId || "",
                        data: {
                          company: {
                            name: data.company.name,
                            link: text || "",
                          },
                        },
                      });
                    }}
                    value={data.company.link}
                  />
                  <DataRow
                    name={"Notes"}
                    handleUpdate={(text) => {
                      updateApp({
                        id: applicationId || "",
                        data: {
                          company: {
                            name: data.company.name,
                            notes: text || "",
                          },
                        },
                      });
                    }}
                    value={data.company.notes}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded={true}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Box
                    component={"div"}
                    sx={{ display: "flex", flexDirection: "row", gap: "20px" }}
                  >
                    <Typography variant="h6">Recruiter Info</Typography>
                    <Edit color={"primary"} />
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ borderTop: "1px solid rgba(0, 0, 0, .125)" }}
                >
                  <DataRow
                    name={"Name"}
                    handleUpdate={(text) => {
                      updateApp({
                        id: applicationId || "",
                        data: {
                          recruiter: {
                            contact: data.recruiter.contact,
                            name: text || "",
                          },
                        },
                      });
                    }}
                    value={data.recruiter.name}
                  />
                  <DataRow
                    name={"Contact link"}
                    handleUpdate={(text) => {
                      updateApp({
                        id: applicationId || "",
                        data: {
                          recruiter: {
                            name: data.recruiter.name,
                            contact: text || "",
                          },
                        },
                      });
                    }}
                    value={data.recruiter.contact}
                  />
                </AccordionDetails>
              </Accordion>
              {/*<Accordion defaultExpanded={true}>*/}
              {/*  <AccordionSummary expandIcon={<ExpandMore />}>*/}
              {/*    <Box*/}
              {/*      component={"div"}*/}
              {/*      sx={{ display: "flex", flexDirection: "row", gap: "20px" }}*/}
              {/*    >*/}
              {/*      <Typography variant="h6">Interviews Info</Typography>*/}
              {/*      <Edit color={"primary"} />*/}
              {/*    </Box>*/}
              {/*  </AccordionSummary>*/}
              {/*  <AccordionDetails*/}
              {/*    sx={{ borderTop: "1px solid rgba(0, 0, 0, .125)" }}*/}
              {/*  >*/}
              {/*    {data.interviews.map((interview, index) => {*/}
              {/*      return (*/}
              {/*        <Box>*/}
              {/*          <Typography>Stage {index + 1}</Typography>*/}
              {/*          <DataRow name={"Type"} value={interview.type} />*/}
              {/*          <DataRow name={"Date"} value={interview.date} />*/}
              {/*          <DataRow name={"Notes"} value={interview.notes} />*/}
              {/*          <DataRow*/}
              {/*            name={"Feedback from recruiter"}*/}
              {/*            value={interview.feedback}*/}
              {/*          />*/}
              {/*        </Box>*/}
              {/*      );*/}
              {/*    })}*/}
              {/*  </AccordionDetails>*/}
              {/*</Accordion>*/}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

interface DataRowProps {
  name: string;
  handleUpdate: (text: string) => void;
  value?: string;
}

/**
 * DataRow component for rendering a row of data with a name and editable value.
 *
 * @component DataRow
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the data.
 * @param {string} props.value - The value of the data.
 * @param {function} props.handleUpdate - Callback function triggered on value update.
 *
 * @returns {ReactElement} The rendered DataRow component.
 */
const DataRow = ({ name, value, handleUpdate }: DataRowProps): ReactElement => {
  return (
    <Grid container columnSpacing={2}>
      <Grid
        item
        md={3}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"right"}
      >
        <Typography color={"#74787c"}>{name}</Typography>
      </Grid>
      <Grid item md={9}>
        <EditableText handleUpdate={handleUpdate} initialText={value || ""} />
      </Grid>
    </Grid>
  );
};
