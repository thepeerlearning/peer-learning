import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  Select,
  StyledDarkTooltip,
  TextArea,
} from "../../../components/forms/textFields";
import { Colors } from "../../../components/themes/colors";
import { Fonts } from "../../../components/themes/fonts";
import {
  classSchedules,
  updateClassStatus,
} from "../../../redux/slices/courses";
import { CancelButton, SubmitButton } from "../../../components/forms/buttons";
import Snackbars from "../../../components/snackbar";
import { ButtonsRow } from "../../../components/forms/buttons/styles";
import { useRouter } from "next/router";
import { EditIcon } from "../../../components/svg/menuIcons";

export default function InstructorFeedbackDialog({ id, scheduleStatus }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  // form validation rules
  const validationSchema = Yup.object().shape({
    feedback: Yup.string().required("Please provide a feedback"),
    status: Yup.string().required("Status is required"),
  });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const status = watch("status");

  React.useEffect(() => {
    if (message?.instructor_status) {
      message?.instructor_status?.map((stat) => {
        return setErrorMessage("Status " + stat);
      });
    } else if (message?.instructor_feedback) {
      message?.instructor_feedback?.map((feed) => {
        return setErrorMessage("Feedback " + feed);
      });
    } else if (message?.detail) {
      return setErrorMessage("Detail " + message?.detail);
    } else {
      return setErrorMessage(message);
    }
  }, [message]);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseSnack = () => setError(false);
  const handleCloseSuccessSnack = () => setSuccess(false);

  function onSubmit(data) {
    const inputData = {
      instructor_feedback: data.feedback,
      instructor_status: status,
    };
    setLoading(true);
    dispatch(updateClassStatus({ id, inputData }))
      .unwrap()
      .then(() => {
        setLoading(false);
        setSuccess(true);
        reset();
        setTimeout(() => {
          setOpen(false);
          router.reload(router.pathname);
          dispatch(classSchedules({ page: 1, limit: 10 }));
        }, 3200);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
    return false;
  }
  return (
    <div>
      <StyledDarkTooltip title="Edit status class">
        <IconButton onClick={handleClickOpen}>
          <EditIcon />
        </IconButton>
      </StyledDarkTooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{ font: `normal normal normal 800 20px/24px ${Fonts.secondary}` }}
        >
          Class Feedback
        </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              borderTop: `1px solid #F3F4F7`,
              display: "flex",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Select
                  id="status"
                  htmlFor="status"
                  name="status"
                  label="Status"
                  placeholder="Class status"
                  register={register}
                  error={errors.status ? true : false}
                  helper={errors.status?.message}
                  disabled={loading}
                >
                  <option value="pending">Pending</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                  <option value="missed">Missed</option>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextArea
                  id="feedback"
                  htmlFor="feedback"
                  name="feedback"
                  label="Feedback"
                  placeholder="Write a messsage"
                  register={register}
                  error={errors.feedback ? true : false}
                  helper={errors.feedback?.message}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12}>
                <ButtonsRow sx={""}>
                  <CancelButton
                    style={{ padding: "10px 0", width: 120 }}
                    disabled={loading}
                    loading={loading}
                    onClick={handleClose}
                  >
                    Cancel
                  </CancelButton>
                  <SubmitButton
                    style={{ padding: "10px 0", width: 120 }}
                    disabled={loading}
                    loading={loading}
                  >
                    Submit
                  </SubmitButton>
                </ButtonsRow>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <Snackbars
          variant="success"
          handleClose={handleCloseSuccessSnack}
          message={"Submitted Successfully"}
          isOpen={success}
        />
        <Snackbars
          variant="error"
          handleClose={handleCloseSnack}
          message={errorMessage}
          isOpen={error}
        />
      </Dialog>
    </div>
  );
}
