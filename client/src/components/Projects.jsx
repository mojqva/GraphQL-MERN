import Spinner from './Spinner'
import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../queries/projectQuery'

const Projects = () => {
	const {loading, error, data} = useQuery(GET_PROJECTS)

	if (loading) return <Spinner/>
  if (error) return <p>Something Went Wrong</p>

  return (
    <>
			<div>TODO PRojects</div>
		</>
  )
}

export default Projects