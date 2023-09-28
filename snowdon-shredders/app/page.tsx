import Image from 'next/image'
'use client'
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios('http://127.0.0.1:8000/snowboard');

        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <main>
      <h1>Data from Server:</h1>
      {JSON.stringify(data)}
    </main>
  )
}
