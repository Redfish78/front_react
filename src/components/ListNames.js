import React, { useEffect, useState } from 'react'
import {Table, Container} from 'reactstrap'

export const ListOfNames = () => {

  const [lstNames, setLstNames] = useState([]);

  useEffect(() => {
    fetch("/api/names").then(response => 
      response.json().then(data => {
        setLstNames(data);
      })
    );
  }, []);

  
  return (
    <Container>
      <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              
            </tr>
          </thead>
          <tbody>
            {lstNames.map((item, key) => 
                <tr>
                    <td>{key}</td>
                    <td>{item}</td>
                </tr>
            )
            }
        </tbody>
      </Table>
    </Container>
  );
};

