import React from "react";
import "../styles/DataBody.css";

function DataBody({ users }) {
  // A function to format the date of births pulled from users.
  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  return (
    // Creating a table
    <tbody>
    {/* Making sure the first index is not undefined or the name is not defined. */}
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              {/* Here we have to render a td for each argument in users.map*/ }
              {/* A table data setting the data to image, adding the src so the picture shows, making an alt incase picture doesn't load */}
             <td data-th="Image"><img src={picture.medium} alt="employee picture"></img></td>
             {/* A table data setting the data to Name, rendering first and last name */}
             <td data-th="Name">{name.first} {name.last}</td>
             {/* A table data setting the data to phone, rendering the phone number */}
             <td data-th="Phone">{phone}</td>
             {/* A table data setting the data to Email, rendering the email, also allows users to email certain employees.*/}
             <td data-th="Email"><a href={"mailto:" + email} target="_blank">{email}</a></td>
             {/* A table data setting the data to DOB, using the formatDate function to formate the dob.date value*/}
             <td data-th="DOB">{formatDate(dob.date)}</td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default DataBody;