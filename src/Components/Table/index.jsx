import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Snackbar from "@mui/material/Snackbar";
import down from "../../assets/down.svg";
import archive from "../../assets/archive.svg";
import trash from "../../assets/trash.svg";
import "./table.styles.css";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

import { tableData } from "../../utils/constants";
import Logo from "../Logo/Logo";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderLeft: "1px solid #E0E0E0",
  },
}));

export default function CustomizedTables() {
  const [selected, setSelected] = useState([]);

  const isSelected = (id) => selected.indexOf(id) !== -1;
  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  color="primary"
                  // indeterminate={numSelected > 0 && numSelected < rowCount}
                  // checked={rowCount > 0 && numSelected === rowCount}
                  // onChange={onSelectAllClick}
                  inputProps={{
                    "aria-label": "select all desserts",
                  }}
                />
              </TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Members</TableCell>
              <TableCell>Categories</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell>Next Meeting</TableCell>
              <TableCell>+</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow
                hover
                onClick={(event) => handleClick(event, row.brandName)}
                role="checkbox"
                aria-checked={isSelected(row.brandName)}
                tabIndex={-1}
                key={row.brandName}
                selected={isSelected(row.brandName)}
                sx={{ cursor: "pointer" }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={isSelected(row.brandName)}
                    inputProps={{
                      "aria-labelledby": `enhanced-table-checkbox-${index}`,
                    }}
                  />
                </TableCell>
                <TableCell
                  component="th"
                  id={`enhanced-table-checkbox-${index}`}
                  scope="row"
                  padding="none"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Logo image={row.logo} size={"small"} />
                    <div style={{ marginLeft: 4 }}>{row.brandName}</div>
                  </div>
                </TableCell>
                <StyledTableCell>{row.desc}</StyledTableCell>
                <StyledTableCell>
                  <AvatarGroup max={4} sx={{ justifyContent: "flex-end" }}>
                    {row.members.map((member, index) => (
                      <Avatar key={index} src={member} />
                    ))}
                  </AvatarGroup>
                </StyledTableCell>
                <StyledTableCell>
                  <div style={{ display: "flex" }}>
                    {row.categories.map((category, index) => (
                      <div
                        style={{
                          color: category.color,
                          backgroundColor: category.bg,
                          border: `1px solid ${category.color}`,
                        }}
                        key={index}
                        className="category"
                      >
                        {category.name}
                      </div>
                    ))}
                  </div>
                </StyledTableCell>
                <StyledTableCell>
                  <div>
                    {row.tags.map((tag, index) => (
                      <div className="tag" key={index}>
                        #{tag}
                      </div>
                    ))}
                  </div>
                </StyledTableCell>
                <StyledTableCell>
                  {row.meetings.map((meeting, index) => (
                    <div
                      style={{
                        color: meeting.color,
                        backgroundColor: meeting.bg,
                        border: `1px solid ${meeting.color}`,
                      }}
                      className="meetings"
                      key={index}
                    >
                      {meeting.detail}
                    </div>
                  ))}
                </StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={selected.length === 0}
        open={selected.length > 0}
      >
        <div className="snackbar">
          <div className="counter-display">{selected.length}</div>
          <div style={{ marginRight: 8 }}>selected</div>
          <div className="btn">
            <img src={archive} />
            Selected
          </div>

          <div className="btn">
            <img src={archive} />
            Archive
          </div>
          <div className="btn">
            <img src={trash} />
            Delete
          </div>
          <div className="btn">
            more
            <img src={down} />
          </div>
        </div>
      </Snackbar>
    </>
  );
}
