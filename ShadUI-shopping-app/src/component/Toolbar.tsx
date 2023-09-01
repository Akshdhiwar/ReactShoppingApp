import { Button } from '../components/ui/button'

const Toolbar = () => {
  return (
    <div className='p-2 flex items-center justify-between box-border'>
        <div className="logo font-extrabold">SHOPPING</div>
        <div>
        <Button variant={'ghost'}>Products</Button>
        <Button variant={'ghost'}>Offers</Button>
        <Button variant={'ghost'}>More</Button>
        </div>
        <div>
            <Button>Login</Button>
        </div>
    </div>
  )
}

export default Toolbar