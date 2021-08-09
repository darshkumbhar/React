import React, { useEffect, useState } from 'react'

import data_url from '../servises/config'
import axios from 'axios'
import User from '../component/User'

const Data = () => {
	useEffect(() => {
		document.title = 'Data'
		getAllData()
	}, [])
	const getAllData = (data) => {
		axios.get(`${data_url}/albums`).then(
			(response) => {
				setData(response.data)
			},
			(error) => {
				console.log('error')
			}
		)
	}

	const updateCources = (id) => {
		setData(data.filter((c) => c.id !== id))
	}

	const [data, setData] = useState([])

	const n = 20
	const data1 = data.slice(0, n)

	return (
		<>
			<User user={data1} update={updateCources} />
		</>
	)
}
export default Data
