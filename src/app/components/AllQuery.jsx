"use client"; 

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Innerbanner from './Innerbanner';
const AllQuery = () => {

    const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('api/messages');
        const reversearr = response && response.data.reverse();
        setContacts(reversearr);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contacts', error);
        setError('Failed to fetch contacts');
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const padZero = (num) => (num < 10 ? '0' + num : num);
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1); // Months are zero-based
    const day = padZero(date.getDate());
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${day}-${month}-${year}, Time: ${hours}:${minutes}`;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <Innerbanner title={"Query List"} />
      <div className="container">
        <h2>Query List</h2>
        <table className="contactTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company/Organization</th>
              <th>Date/Time</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact.id}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.comapany}</td>
                <td>{formatDate(contact.createdAt)}</td>
                <td>{contact.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>  
  )
}

export default AllQuery
