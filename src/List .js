im
function list() {
  var data = [
    { rollno: 101, name: "ram", marks: 55 },
    { rollno: 102, name: "Sham", marks: 66 },
    { rollno: 103, name: "Mohan", marks: 77 },
    { rollno: 104, name: "sohan", marks: 88 },
  ];
}

return (
  <div>
    <table>
      <tbody striped bordered hover variant="light">
        <tr>
          <td>Rollno</td>
          <td>Name</td>
          <td>Marks</td>
        </tr>
      </tbody>
    </table>
  </div>
);
export default list;
