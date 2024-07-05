import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  MenuItem,
  TextField,
} from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ApplicationSources,
  ApplicationStatus,
  useAddNewApplicationMutation,
} from 'services/applicationApi.ts';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AddApplicationSchema = Yup.object().shape({
  positionName: Yup.string().required(),
  applicationSource: Yup.string().required(),
  applicationDate: Yup.date(),
  applicationLink: Yup.string(),
  salaryRange: Yup.string(),
  companyName: Yup.string().required(),
  companyType: Yup.string(),
  recruiterName: Yup.string(),
  recruiterContact: Yup.string(),
});

/**
 * Component for adding a new application.
 *
 * @component Add
 *
 * @returns {ReactElement} The rendered Add component.
 */

export const AddApplication = (): ReactElement => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const [addApp, { isSuccess }] = useAddNewApplicationMutation();
  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };

  /**
   * Formik's configuration for the AddApplication Application form.
   */
  const formik = useFormik({
    initialValues: {
      positionName: '',
      applicationSource: '',
      applicationDate: new Date().toISOString(),
      applicationLink: '',
      salaryRange: '',
      companyName: '',
      companyType: '',
      recruiterName: '',
      recruiterContact: '',
    },
    validationSchema: AddApplicationSchema,
    onSubmit: (values) => {
      addApp({
        applyingDate: new Date(values.applicationDate).toISOString(),
        position: values.positionName,
        source: values.applicationSource as ApplicationSources,
        salary: values.salaryRange,
        link: values.applicationLink,
        status: ApplicationStatus.OFFER,
        company: {
          name: values.companyName,
          type: values.companyType,
          link: '',
          notes: '',
        },
        recruiter: {
          name: values.recruiterName,
          contact: values.recruiterContact,
        },
      });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
    }
  }, [isSuccess]);

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth={'md'}
      fullWidth
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Add new application
      </DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <SectionHeader name={'General info'} />
          <Grid
            container
            spacing={4}
            sx={{
              paddingTop: '20px',
            }}
          >
            <Grid item md={4} sm={6} xs={12}>
              <TextField
                label={'Position name*'}
                id="positionName"
                name="positionName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.positionName}
                error={!!formik.errors.positionName}
                helperText={formik.errors.positionName}
                fullWidth
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <TextField
                select
                label={'Application source'}
                id="applicationSource"
                name="applicationSource"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.applicationSource}
                error={!!formik.errors.applicationSource}
                helperText={formik.errors.applicationSource}
                fullWidth
              >
                {Object.values(ApplicationSources).map((source) => {
                  return (
                    <MenuItem key={source} value={source}>
                      {source}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <TextField
                label={'Application date'}
                id="applicationDate"
                name="applicationDate"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.applicationDate}
                error={!!formik.errors.applicationDate}
                helperText={formik.errors.applicationDate}
                fullWidth
              ></TextField>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <TextField
                label={'Link'}
                id="applicationLink"
                name="applicationLink"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.applicationLink}
                error={!!formik.errors.applicationLink}
                helperText={formik.errors.applicationLink}
                fullWidth
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <TextField
                label={'Salary range'}
                id="salaryRange"
                name="salaryRange"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.salaryRange}
                error={!!formik.errors.salaryRange}
                helperText={formik.errors.salaryRange}
                fullWidth
              />
            </Grid>
          </Grid>
          <SectionHeader name={'Company info'} />
          <Grid
            container
            spacing={4}
            sx={{
              paddingTop: '20px',
            }}
          >
            <Grid item md={4} sm={6} xs={12}>
              <TextField
                label={'Company name'}
                id="companyName"
                name="companyName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.companyName}
                error={!!formik.errors.companyName}
                helperText={formik.errors.companyName}
                fullWidth
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <TextField
                label={'Company type'}
                id="companyType"
                name="companyType"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.companyType}
                error={!!formik.errors.companyType}
                helperText={formik.errors.companyName}
                fullWidth
              />
            </Grid>
          </Grid>
          <SectionHeader name={'Recruiter info'} />
          <Grid
            container
            spacing={4}
            sx={{
              paddingTop: '20px',
            }}
          >
            <Grid item md={4} sm={6} xs={12}>
              <TextField
                label={'Recruiter name'}
                id="recruiterName"
                name="recruiterName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.recruiterName}
                error={!!formik.errors.recruiterName}
                helperText={formik.errors.recruiterName}
                fullWidth
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <TextField
                label={'Recruiter contact'}
                id="recruiterContact"
                name="recruiterContact"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.recruiterContact}
                error={!!formik.errors.recruiterContact}
                helperText={formik.errors.recruiterContact}
                fullWidth
              />
            </Grid>
          </Grid>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '10px',
            }}
          >
            <Divider />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
              }}
            >
              <Button type="submit" color={'success'} variant={'contained'}>
                Add
              </Button>
              <Button
                autoFocus
                onClick={handleClose}
                color={'error'}
                variant={'contained'}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};

interface SectionHeaderProps {
  name: string;
}

/**
 * Component for rendering a section header with a name and divider.
 *
 * @component SectionHeader
 *
 * @param {SectionHeaderProps} props - The component props.
 * @param {string} props.name - The name of the section.
 *
 * @returns {ReactElement} The rendered SectionHeader component.
 */
const SectionHeader = ({ name }: SectionHeaderProps): ReactElement => {
  return (
    <Box component={'div'} marginTop={'10px'}>
      <Typography>{name}</Typography>
      <Divider />
    </Box>
  );
};
