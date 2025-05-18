import { Button } from '@/components/ui/button'
import {CirclePlus} from 'lucide-react'
import { Link } from 'react-router-dom'


const AddNewSessionButton = () => {
  return (
    <div>
        <Button className='space-x-1'>
         
           <Link to="/dashboard/parking-sessions/add-session" className='flex items-center gap-2'> Add Session <CirclePlus size={18}/></Link>
           
        </Button>
    </div>
  )
}

export default AddNewSessionButton