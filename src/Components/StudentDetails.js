import React from "react";
import { useParams } from "react-router-dom";
import { TextField, FormControl, Avatar } from "@mui/material";



function StudentDetails({ student }) {
  const { index } = useParams();
  const selectedStudent = student[index];
  console.log(index);
  return (
    <div className="content">
      <h1>Student Details</h1>
      <div className="subject">
        <FormControl className="form-container" >
          <br></br>
          <div className="image">
            <Avatar alt={selectedStudent.name} src={selectedStudent.avatar} style={{ height: 100, width: 100 }} />
          </div>
          <TextField
            id="standard-name"
            label="Name"
            variant="standard"
            margin="dense"
            value={selectedStudent.name}
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-email"
            label="Email"
            variant="standard"
            value={selectedStudent.email}
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-phone"
            label="Phone"
            variant="standard"
            defaultValue={selectedStudent.phone}
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-rank"
            label="Rank"
            defaultValue={selectedStudent.rank}
            variant="standard"
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-id"
            label="ID"
            defaultValue={selectedStudent.id}
            variant="standard"
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-course"
            label="Course"
            defaultValue={selectedStudent.course}
            variant="standard"
            sx={{ width: { xs: "100%", sm: "95%", md: "80%" } }}
            InputProps={{
              readOnly: true,
            }}
          />
          <br></br>
        </FormControl>
      </div>

    </div>
  );
}

export default StudentDetails;
